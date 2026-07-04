import { ChatData } from "@/types/types";

export const chatData:ChatData = {
  currentUser: "user_1",

  chats: {
    user_2: {
      projectId: "chat_1",
      lastMessage: "Cool, I will check it tonight 👍",
      updatedAt: "2026-07-03T10:15:00Z",

      messages: {
        m1: {
          msg: "Hey bro, are you free today?",
          type: "text",
          senderId: "user_2",
          createdAt: "2026-07-03T09:50:00Z",
          status: "read",
        },
        m2: {
          msg: "Yeah I am free after 6 PM",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-07-03T09:52:00Z",
          status: "read",
        },
        m3: {
          msg: "Cool, I will check it tonight 👍",
          type: "text",
          senderId: "user_2",
          createdAt: "2026-07-03T10:15:00Z",
          status: "sent",
        },
        m4: {
          msg: "Cool, I will check it tonight 👍",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-07-03T10:15:00Z",
          status: "sent",
        },
        m5: {
          msg: "Cool, I will check it tonight 👍",
          type: "text",
          senderId: "user_2",
          createdAt: "2026-07-03T10:15:00Z",
          status: "sent",
        },
        m6: {
          msg: "Cool, I will check it tonight 👍",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-07-03T10:15:00Z",
          status: "sent",
        },
      },
    },

    user_3: {
      projectId: "chat_2",
      lastMessage: "Send me the updated design file",
      updatedAt: "2026-07-02T18:30:00Z",

      messages: {
        m1: {
          msg: "Did you finish the UI design?",
          type: "text",
          senderId: "user_3",
          createdAt: "2026-07-02T18:10:00Z",
          status: "read",
        },
        m2: {
          msg: "Almost done, just fixing responsiveness",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-07-02T18:15:00Z",
          status: "read",
        },
        m3: {
          msg: "Send me the updated design file",
          type: "text",
          senderId: "user_3",
          createdAt: "2026-07-02T18:30:00Z",
          status: "sent",
        },
      },
    },

    user_4: {
      projectId: "chat_3",
      lastMessage: "Okay thanks 🙌",
      updatedAt: "2026-07-01T12:45:00Z",

      messages: {
        m1: {
          msg: "Can you help me with React state management?",
          type: "text",
          senderId: "user_4",
          createdAt: "2026-07-01T12:10:00Z",
          status: "read",
        },
        m2: {
          msg: "Sure, use useState for local state and Redux for global state.",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-07-01T12:20:00Z",
          status: "read",
        },
        m3: {
          msg: "Okay thanks 🙌",
          type: "text",
          senderId: "user_4",
          createdAt: "2026-07-01T12:45:00Z",
          status: "sent",
        },
      },
    },

    user_5: {
      projectId: "chat_4",
      lastMessage: "Let's catch up later",
      updatedAt: "2026-06-30T20:00:00Z",

      messages: {
        m1: {
          msg: "Are you coming to the meeting?",
          type: "text",
          senderId: "user_5",
          createdAt: "2026-06-30T19:40:00Z",
          status: "read",
        },
        m2: {
          msg: "Yes, I will join in 10 minutes",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-30T19:45:00Z",
          status: "read",
        },
        m3: {
          msg: "Let's catch up later",
          type: "text",
          senderId: "user_5",
          createdAt: "2026-06-30T20:00:00Z",
          status: "sent",
        },
      },
    },

    user_6: {
      projectId: "chat_5",
      lastMessage: "Nice work on the project 🚀",
      updatedAt: "2026-06-29T14:20:00Z",

      messages: {
        m1: {
          msg: "Your dashboard UI looks amazing",
          type: "text",
          senderId: "user_6",
          createdAt: "2026-06-29T14:00:00Z",
          status: "read",
        },
        m2: {
          msg: "Thanks! Took me 2 days to finish it",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-29T14:05:00Z",
          status: "read",
        },
        m3: {
          msg: "Nice work on the project 🚀",
          type: "text",
          senderId: "user_6",
          createdAt: "2026-06-29T14:20:00Z",
          status: "sent",
        },
      },
    },

    user_7: {
      projectId: "chat_6",
      lastMessage: "Got it 👍",
      updatedAt: "2026-06-28T09:10:00Z",

      messages: {
        m1: {
          msg: "Did you fix the bug in API?",
          type: "text",
          senderId: "user_7",
          createdAt: "2026-06-28T09:00:00Z",
          status: "read",
        },
        m2: {
          msg: "Yes, it was a missing await issue",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-28T09:05:00Z",
          status: "read",
        },
        m3: {
          msg: "Got it 👍",
          type: "text",
          senderId: "user_7",
          createdAt: "2026-06-28T09:10:00Z",
          status: "sent",
        },
      },
    },

    user_8: {
      projectId: "chat_7",
      lastMessage: "See you tomorrow morning",
      updatedAt: "2026-06-27T22:00:00Z",

      messages: {
        m1: {
          msg: "Meeting at 10 AM tomorrow",
          type: "text",
          senderId: "user_8",
          createdAt: "2026-06-27T21:40:00Z",
          status: "read",
        },
        m2: {
          msg: "Okay I will be there",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-27T21:45:00Z",
          status: "read",
        },
        m3: {
          msg: "See you tomorrow morning",
          type: "text",
          senderId: "user_8",
          createdAt: "2026-06-27T22:00:00Z",
          status: "sent",
        },
      },
    },

    user_9: {
      projectId: "chat_8",
      lastMessage: "Thanks for the help 🙏",
      updatedAt: "2026-06-26T16:30:00Z",

      messages: {
        m1: {
          msg: "I was stuck in authentication issue",
          type: "text",
          senderId: "user_9",
          createdAt: "2026-06-26T16:10:00Z",
          status: "read",
        },
        m2: {
          msg: "You should check Firebase rules",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-26T16:20:00Z",
          status: "read",
        },
        m3: {
          msg: "Thanks for the help 🙏",
          type: "text",
          senderId: "user_9",
          createdAt: "2026-06-26T16:30:00Z",
          status: "sent",
        },
      },
    },

    user_10: {
      projectId: "chat_9",
      lastMessage: "Let's build something cool 🔥",
      updatedAt: "2026-06-25T11:00:00Z",

      messages: {
        m1: {
          msg: "Do you want to collaborate on a SaaS project?",
          type: "text",
          senderId: "user_10",
          createdAt: "2026-06-25T10:40:00Z",
          status: "read",
        },
        m2: {
          msg: "Yeah sounds interesting!",
          type: "text",
          senderId: "user_1",
          createdAt: "2026-06-25T10:50:00Z",
          status: "read",
        },
        m3: {
          msg: "Let's build something cool 🔥",
          type: "text",
          senderId: "user_10",
          createdAt: "2026-06-25T11:00:00Z",
          status: "sent",
        },
      },
    },
  },
};