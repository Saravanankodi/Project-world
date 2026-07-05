// "use client";

// import SearchBar from "@/components/Navbar/Search";
// import StatsCard from "@/components/Cards/StatsCard";

// import ProjectHeader from "./ProjectHeader";
// import DashboardActions from "./DashboardActions";
// import SalesRevenueChart from "./SalesRevenueChart";
// import ProjectVisibilityChart from "./ProjectVisibilityChart";

// import {
//     Eye,
//     Download,
//     IndianRupee,
//     Star,
// } from "lucide-react";

// export default function ProjectDashboard() {
//     return (
//         <div className="space-y-6">

//             {/* Search */}
//             <SearchBar placeholder="Search Projects..." />

//             {/* Project Header */}
//             <ProjectHeader
//                 title="Smart Grid Monitor"
//                 domain="IOT / Hardware"
//                 status="PUBLISHED"
//                 image="/images/project.png"
//                 tags={[
//                     "Python",
//                     "React",
//                     "MongoDB",
//                 ]}
//                 onEdit={() => console.log("Edit")}
//                 onMentorship={() => console.log("Mentorship")}
//                 onView={() => console.log("View")}
//             />

//             {/* Quick Actions */}
//             <DashboardActions
//                 onEdit={() => console.log("Edit")}
//                 onAnalytics={() => console.log("Analytics")}
//                 onPreview={() => console.log("Preview")}
//                 onShare={() => console.log("Share")}
//                 onDelete={() => console.log("Delete")}
//             />

//             {/* Statistics */}
//             <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

//                 <StatsCard
//                     title="Views"
//                     value="12,540"
//                     icon={<Eye size={22} />}
//                     trend="+12%"
//                     trendUp
//                 />

//                 <StatsCard
//                     title="Downloads"
//                     value="1,245"
//                     icon={<Download size={22} />}
//                     trend="+8%"
//                     trendUp
//                 />

//                 <StatsCard
//                     title="Revenue"
//                     value="₹54,200"
//                     icon={<IndianRupee size={22} />}
//                     trend="+15%"
//                     trendUp
//                 />

//                 <StatsCard
//                     title="Rating"
//                     value="4.9"
//                     icon={<Star size={22} />}
//                     trend="+0.2"
//                     trendUp
//                 />

//             </div>

//             {/* Charts */}
//             <div className="grid gap-6 xl:grid-cols-2">

//                 <SalesRevenueChart />

//                 <ProjectVisibilityChart />

//             </div>

//         </div>
//     );
// }