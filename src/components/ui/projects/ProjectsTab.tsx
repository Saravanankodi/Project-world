"use client";

import { useState } from "react";
import Overview from "./tabs/Overview";
import Features from "./tabs/Features";
import TechnicalDetails from "./tabs/TechnicalDetails";
import Review from "./tabs/Review";

const overview = "This comprehensive bridge monitoring system leverages cutting-edge IoT sensors and AutoCAD precise modeling to create a real-time structural health platform. The Eco-Smart Bridge Infrastructure project includes full architectural source files, sensor calibration scripts in Python, and a responsive React dashboard for monitoring vibration, tension, and environmental factors."

const features = "This comprehensive bridge monitoring system leverages cutting-edge IoT sensors and AutoCAD precise modeling to create a real-time structural health platform. The Eco-Smart Bridge Infrastructure project includes full architectural source files, sensor calibration scripts in Python, and a responsive React dashboard for monitoring vibration, tension, and environmental factors.This comprehensive bridge monitoring system leverages cutting-edge IoT sensors and AutoCAD precise modeling to create a real-time structural health platform. The Eco-Smart Bridge Infrastructure project includes full architectural source files, sensor calibration scripts in Python, and a responsive React dashboard for monitoring vibration, tension, and environmental factors"
const Requirements = [
    'Arduino Kit (Uno/Mega)',
    'Laptop with 8GB RAM minimum',
    'Python 3.9+ Environment'
]

const techStack = [
    {
        label:'Python',
        value:60
    },
    {
        label:'React',
        value:25
    },
    {
        label:'sql',
        value:15
    },
]

const architecture = [
    'Sensors collect real time bridge condition date  and database stores historical',
    'Micro controller processes sensor readings and the process.',
    'Python scripts analyze and manage collected datas of the language',
    'React dashboard displays like live insights and the alerts'
]
const tabs = [
  {
    id: "overview",
    title: "Overview",
    content: <Overview overview={overview} techStacklist={techStack} requirements={Requirements} />,
  },
  {
    id: "features",
    title: "Features",
    content: <Features overview={overview} feature={features}/>
  },
  {
    id: "technical",
    title: "Technical Details",
    content: <TechnicalDetails techStacklist={techStack} requirements={Requirements} architecture={architecture}/>
  },
  {
    id: "reviews",
    title: "Reviews",
    content: <Review/>
  },
];

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="max-w-185 bg-white rounded-xl shadow">
      <div className="flex border-b border-[#BCCBB9] ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 ${
              activeTab === tab.id
                ? "border-b-2 border-[#006E2F] text-[#006E2F] bg-[#006E2F0D]"
                : "text-[#3D4A3D]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-5">{currentTab?.content}</div>
    </div>
  );
}