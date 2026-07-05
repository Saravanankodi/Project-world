"use client";

import SearchBar from "@/components/Navbar/Search";
import StatCard from "@/components/Cards/StatsCard";

import ProjectHeader from "@/components/ui/UploadProject_Analytics/ProjectHeader";
import DashboardActions from "@/components/ui/UploadProject_Analytics/DashboardActions";
import SalesRevenueChart from "@/components/ui/UploadProject_Analytics/SalesRevenueChart";
import ProjectVisibilityChart from "@/components/ui/UploadProject_Analytics/ProjectVisibilityChart";
import {Star} from "lucide-react";
import StatsCard from "@/components/Cards/StatsCard";

export default function UploadProject_Analytics() {
  return (
    <div className=" ">

      {/* Search */}
      <div className="sm:hidden m-4">
        <SearchBar placeholder="Search Projects..." />
      </div>
      <div className=" space-y-5 sm:space-y-3  bg-[#F3FCEF] p-4 px-4 py-2">
      {/* Project Header */}
      <ProjectHeader
        title="Smart Grid Monitor"
        domain="IOT / Hardware"
        status="PUBLISHED"
        image="/img/Image.png"
        tags={[
          "Python",
          "React",
          "MongoDB",
        ]}
        onEdit={() => console.log("Edit")}
        onMentorship={() => console.log("Mentorship")}
        onView={() => console.log("View")}
      />

      {/* Statistics */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-4 ">

        <StatsCard
          title="TOTAL VIEWS"
          value="12,540"
          trend="+12%"
          trendUp
        />

        <StatsCard
          title="TOTAL PURCHASES"
          value="1,245"
          trend="+8%"
          trendUp
        />

        <StatsCard
          title="TOTAL REVENUE"
          value="₹54,200"
          trend="+15%"
          trendUp
        />

        <StatCard
          title="AVG RATING"
          value="4.9/5"
          icon={<Star size={22} fill="#FBBF24" />}
          trendUp
        />

      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">

        <SalesRevenueChart />

        <ProjectVisibilityChart />

      </div>
      </div>

    </div>
  );
}