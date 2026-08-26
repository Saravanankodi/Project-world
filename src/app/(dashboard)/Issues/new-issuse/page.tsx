"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Send,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@/components/Button/Button";
import { geist, inter } from "@/lib/fonts";

import { auth } from "@/lib/firebase";
import { getBuyerOrders, Order } from "@/services/order";
import { getProjectById, Project } from "@/services/project";
import { createIssue } from "@/services/issue";

type Category =
  | "payment"
  | "project"
  | "download"
  | "technical"
  | "account"
  | "other";

type Priority = "low" | "medium" | "high";

type Step =
  | "category"
  | "project"
  | "priority"
  | "description"
  | "confirm"
  | "success";

interface Message {
  id: number;
  type: "bot" | "user";
  message: string;
}

const categories = [
  {
    label: "Payment Issue",
    value: "payment" as Category,
    emoji: "💳",
  },
  {
    label: "Project Issue",
    value: "project" as Category,
    emoji: "📦",
  },
  {
    label: "Download Issue",
    value: "download" as Category,
    emoji: "⬇️",
  },
  {
    label: "Technical Issue",
    value: "technical" as Category,
    emoji: "💻",
  },
  {
    label: "Account Issue",
    value: "account" as Category,
    emoji: "👤",
  },
  {
    label: "Other",
    value: "other" as Category,
    emoji: "💬",
  },
];

const priorities = [
  {
    label: "Low",
    value: "low" as Priority,
    description: "Minor issue",
  },
  {
    label: "Medium",
    value: "medium" as Priority,
    description: "Affects my work",
  },
  {
    label: "High",
    value: "high" as Priority,
    description: "Cannot use the project",
  },
];

const NewIssusePage = () => {
  const router = useRouter();

  const [step, setStep] = useState<Step>("category");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      message:
        "Hi! 👋 I'm here to help. What kind of problem are you experiencing?",
    },
  ]);

  const [orders, setOrders] = useState<Order[]>([]);
  const [projects, setProjects] = useState<
    Record<string, Project | null>
  >({});

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedPriority, setSelectedPriority] =
    useState<Priority>("medium");

  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const [loadingOrders, setLoadingOrders] = useState(false);
  const [loadingProject, setLoadingProject] = useState(false);
  const [creating, setCreating] = useState(false);

  const [error, setError] = useState("");

  /*
   * Load buyer's purchased orders
   */

  useEffect(() => {
    async function loadOrders() {
      const user = auth.currentUser;

      if (!user) {
        setError("Please login before creating an issue.");
        return;
      }

      try {
        setLoadingOrders(true);

        const data = await getBuyerOrders(user.uid);

        setOrders(data);

        const projectData: Record<string, Project | null> = {};

        for (const order of data) {
          if (!projectData[order.projectId]) {
            projectData[order.projectId] =
              await getProjectById(order.projectId);
          }
        }

        setProjects(projectData);
      } catch (err) {
        console.error(err);
        setError("Failed to load your purchases.");
      } finally {
        setLoadingOrders(false);
      }
    }

    loadOrders();
  }, []);

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "bot",
        message: text,
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        message: text,
      },
    ]);
  };

  /*
   * Category
   */

  const handleCategory = (
    category: Category,
    label: string
  ) => {
    setSelectedCategory(category);

    addUserMessage(label);

    setTimeout(() => {
      addBotMessage(
        "Got it. Which project is this issue related to?"
      );

      setStep("project");
    }, 300);
  };

  /*
   * Project
   */

  const handleProject = async (order: Order) => {
    setSelectedOrder(order);

    const project = projects[order.projectId];

    setSelectedProject(project ?? null);

    const projectName =
      project?.projectInformation.title ??
      "Selected Project";

    addUserMessage(projectName);

    setTimeout(() => {
      addBotMessage(
        "Thanks! How serious is the problem?"
      );

      setStep("priority");
    }, 300);
  };

  /*
   * Priority
   */

  const handlePriority = (
    priority: Priority,
    label: string
  ) => {
    setSelectedPriority(priority);

    addUserMessage(label);

    setTimeout(() => {
      addBotMessage(
        "Please describe what happened. Include any error messages or details that might help our support team."
      );

      setStep("description");
    }, 300);
  };

  /*
   * Description
   */

  const handleSend = () => {
    if (!message.trim()) return;

    addUserMessage(message);

    setDescription(message);

    setMessage("");

    setTimeout(() => {
      addBotMessage(
        "Thanks! I've collected everything I need. Please review your support request before submitting it."
      );

      setStep("confirm");
    }, 300);
  };

  /*
   * Create issue
   */

  const handleCreateIssue = async () => {
    const user = auth.currentUser;

    if (!user) {
      setError("Please login before creating an issue.");
      return;
    }

    if (!selectedCategory) {
      setError("Please select an issue category.");
      return;
    }

    if (!selectedOrder) {
      setError("Please select a project.");
      return;
    }

    if (!selectedProject) {
      setError("Project information is missing.");
      return;
    }

    try {
      setCreating(true);
      setError("");

      const projectName =
        selectedProject.projectInformation.title;

      const issueId = await createIssue({
        userId: user.uid,

        orderId: selectedOrder.id!,

        projectId: selectedOrder.projectId,

        sellerId: selectedOrder.sellerId,

        projectName,

        category: selectedCategory,

        subject: `${projectName} - ${selectedCategory} issue`,

        description,

        priority: selectedPriority,

        status: "new",

        attachments: [],
      });

      console.log("Created issue:", issueId);

      setStep("success");

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "bot",
          message:
            "Your support request has been created successfully! 🎉 Our support team will review it shortly.",
        },
      ]);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to create your support request. Please try again."
      );
    } finally {
      setCreating(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#F7FAF5] px-4 py-5 sm:px-6 lg:px-8">

      {/* HEADER */}

      <header className="mx-auto flex max-w-4xl items-center justify-between border-b border-[#D8E3D3] pb-4">

        <div className="flex items-center gap-3">

          <Link
            href="/Issues"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D8E3D3] bg-white text-[#006E2F]"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1
              className={`${geist.className} text-lg font-semibold text-[#161D16]`}
            >
              Support Center
            </h1>

            <p
              className={`${inter.className} text-xs text-[#667366]`}
            >
              Create a new support request
            </p>
          </div>

        </div>

        <div className="hidden items-center gap-2 sm:flex">

          <span className="h-2 w-2 rounded-full bg-[#22C55E]" />

          <span className="text-xs font-medium text-[#3D4A3D]">
            Support Online
          </span>

        </div>

      </header>


      {/* CHAT */}

      <main className="mx-auto mt-5 max-w-4xl overflow-hidden rounded-2xl border border-[#D8E3D3] bg-white shadow-sm">

        {/* CHAT HEADER */}

        <div className="flex items-center gap-3 border-b border-[#D8E3D3] bg-[#EDF6EA] px-5 py-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006E2F] text-white">
            <Bot size={20} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[#161D16]">
              ProjectVerse Support
            </h2>

            <p className="text-xs text-[#667366]">
              Let's get your issue resolved
            </p>
          </div>

        </div>


        {/* MESSAGES */}

        <div className="min-h-125 space-y-5 overflow-y-auto p-4 sm:p-6">

          {messages.map((item) => (

            <div
              key={item.id}
              className={`flex ${
                item.type === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`flex max-w-[85%] items-end gap-2 ${
                  item.type === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >

                {item.type === "bot" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDF6EA] text-[#006E2F]">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`rounded-2xl px-4 py-3 ${
                    item.type === "user"
                      ? "rounded-br-sm bg-[#006E2F] text-white"
                      : "rounded-bl-sm bg-[#F3FCEF] text-[#161D16]"
                  }`}
                >
                  <p className="text-sm leading-6">
                    {item.message}
                  </p>
                </div>

              </div>

            </div>

          ))}


          {/* CATEGORY */}

          {step === "category" && (

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:pl-10">

              {categories.map((category) => (

                <button
                  key={category.value}
                  onClick={() =>
                    handleCategory(
                      category.value,
                      category.label
                    )
                  }
                  className="rounded-xl border border-[#D8E3D3] bg-white p-3 text-left transition hover:border-[#22C55E] hover:bg-[#F3FCEF]"
                >

                  <div className="mb-2 text-lg">
                    {category.emoji}
                  </div>

                  <span className="text-xs font-medium text-[#3D4A3D]">
                    {category.label}
                  </span>

                </button>

              ))}

            </div>

          )}


          {/* PROJECT */}

          {step === "project" && (

            <div className="space-y-2 sm:pl-10">

              {loadingOrders ? (

                <div className="rounded-xl bg-[#F3FCEF] p-4 text-sm text-[#667366]">
                  Loading your purchased projects...
                </div>

              ) : orders.length === 0 ? (

                <div className="rounded-xl border border-[#D8E3D3] bg-[#F7FAF5] p-5">

                  <p className="text-sm font-medium text-[#161D16]">
                    No purchased projects found.
                  </p>

                  <p className="mt-1 text-xs text-[#667366]">
                    You need a purchased project before creating a project-related support request.
                  </p>

                </div>

              ) : (

                orders.map((order) => {

                  const project =
                    projects[order.projectId];

                  return (
                    <button
                      key={order.id}
                      onClick={() =>
                        handleProject(order)
                      }
                      className="flex w-full items-center gap-3 rounded-xl border border-[#D8E3D3] bg-white p-3 text-left transition hover:border-[#22C55E] hover:bg-[#F3FCEF]"
                    >

                      <div className="h-12 w-12 overflow-hidden rounded-lg bg-[#EDF6EA]">

                        {project?.technicalDetails
                          ?.resources?.screenshots?.[0] ? (

                          <img
                            src={
                              project
                                .technicalDetails
                                .resources
                                .screenshots[0]
                            }
                            alt=""
                            className="h-full w-full object-cover"
                          />

                        ) : null}

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-[#161D16]">
                          {project?.projectInformation.title ??
                            "Project"}
                        </p>

                        <p className="mt-1 text-xs text-[#667366]">
                          Order #{order.id}
                        </p>

                      </div>

                      <span className="text-xs font-semibold text-[#006E2F]">
                        SELECT
                      </span>

                    </button>
                  );

                })

              )}

            </div>

          )}


          {/* PRIORITY */}

          {step === "priority" && (

            <div className="space-y-2 sm:pl-10">

              {priorities.map((item) => (

                <button
                  key={item.value}
                  onClick={() =>
                    handlePriority(
                      item.value,
                      item.label
                    )
                  }
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    item.value === "high"
                      ? "hover:border-red-400"
                      : "hover:border-[#22C55E]"
                  } hover:bg-[#F3FCEF]`}
                >

                  <p className="text-sm font-semibold text-[#161D16]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs text-[#667366]">
                    {item.description}
                  </p>

                </button>

              ))}

            </div>

          )}


          {/* CONFIRM */}

          {step === "confirm" && (

            <div className="sm:pl-10">

              <div className="rounded-xl border border-[#D8E3D3] bg-[#F7FAF5] p-5">

                <h3 className="text-sm font-semibold text-[#161D16]">
                  Review your issue
                </h3>

                <div className="mt-4 space-y-4">

                  <div>
                    <p className="text-[10px] uppercase text-[#667366]">
                      Project
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#161D16]">
                      {selectedProject?.projectInformation.title}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-[#667366]">
                      Category
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#161D16]">
                      {
                        categories.find(
                          (x) =>
                            x.value === selectedCategory
                        )?.label
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-[#667366]">
                      Priority
                    </p>

                    <p className="mt-1 text-sm font-medium capitalize text-[#161D16]">
                      {selectedPriority}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase text-[#667366]">
                      Description
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#3D4A3D]">
                      {description}
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">

                <Button
                  onClick={handleCreateIssue}
                  disabled={creating}
                  className="w-full bg-[#006E2F] py-3 text-sm font-semibold text-white"
                >
                  {creating
                    ? "CREATING ISSUE..."
                    : "CREATE SUPPORT ISSUE"}
                </Button>

              </div>

            </div>

          )}


          {/* SUCCESS */}

          {step === "success" && (

            <div className="flex justify-center py-10">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF6EA] text-[#006E2F]">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#161D16]">
                  Issue Created Successfully
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667366]">
                  Your support request has been submitted. Our support team will review it and get back to you.
                </p>

                <Button
                  onClick={() => router.push("/Issues")}
                  className="mt-5 mx-auto bg-[#006E2F] px-6 py-3 text-sm font-semibold text-white"
                >
                  VIEW MY ISSUES
                </Button>

              </div>

            </div>

          )}

        </div>


        {/* INPUT */}

        {step === "description" && (

          <div className="border-t border-[#D8E3D3] p-3 sm:p-4">

            <div className="flex items-end gap-2 rounded-xl border border-[#BCCBB9] bg-[#F7FAF5] p-2 focus-within:border-[#006E2F]">

              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={2}
                placeholder="Describe your issue..."
                className="flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-[#8A9688]"
              />

              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#006E2F] text-white disabled:opacity-40"
              >
                <Send size={17} />
              </button>

            </div>

            <div className="mt-2 flex items-center justify-center gap-1">

              <ShieldCheck
                size={13}
                className="text-[#027A48]"
              />

              <span className="text-[10px] text-[#667366]">
                Your information is secure
              </span>

            </div>

          </div>

        )}

      </main>

    </section>
  );
};

export default NewIssusePage;