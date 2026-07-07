"use client";

import StatsCard from "@/components/Cards/StatsCard";

import AnalyticsHeader from "@/components/ui/Analytics/AnalyticsHeader";

import RevenueChart from "@/components/ui/Analytics/RevenueChart";
import CategorySales from "@/components/ui/Analytics/CategorySales";

import TopProjectsTable from "@/components/ui/Analytics/TopProjectsTable";

import CustomerInsights from "@/components/ui/Analytics/CustomerInsights";
import CreatorGrowthStats from "@/components/ui/Analytics/CreatorGrowthStats";

import RecentTransactions from "@/components/ui/Analytics/RecentTransactions";

import {
    Users,
    DollarSign,
    Package,
    Star,
} from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8 p-6">

            {/* Search */}

            {/* <Search /> */}

            {/* Header */}

            <AnalyticsHeader />

            {/* Filter */}

            

            {/* Stats */}

            {/* <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                <StatsCard
                    title="Revenue"
                    value="₹1.28L"
                    icon={<IndianRupee size={18} />}
                    trend="+24%"
                    trendUp
                />

                <StatsCard
                    title="Sales"
                    value="284"
                    icon={<ShoppingBag size={18} />}
                    trend="+18%"
                    trendUp
                />

                <StatsCard
                    title="Customers"
                    value="152"
                    icon={<Users size={18} />}
                    trend="+11%"
                    trendUp
                />

                <StatsCard
                    title="Growth"
                    value="38%"
                    icon={<TrendingUp size={18} />}
                    trend="+7%"
                    trendUp
                />

            </div> */}

            <div className="grid gap-5 grid-cols-2 xl:grid-cols-4">

                <StatsCard
                    title="Total Revenue"
                    value="₹1,25,000"
                    icon={<DollarSign size={20} className=" border-[#E5E7EB] bg-white text-[#039855]" />}
                    iconBg="bg-[#ECFDF3]"
                    badge="+24%"
                />

                <StatsCard
                    title="Projects Sold"
                    value="156"
                    icon={<Package size={20} className=" border-[#E5E7EB] bg-white text-[#6675F5]" />}
                    iconBg="bg-[#EEF2FF]"
                    badge="+12%"
                />

                <StatsCard
                    title="Total Customers"
                    value="120"
                    icon={<Users size={20} className=" border-[#E5E7EB] bg-white text-[#D92D20]" />}
                    iconBg="bg-[#FEF3F2]"
                    badge="+8%"
                />

                <StatsCard
                    title="Avg. Rating"
                    value="4.8 / 5"
                    icon={<Star size={20} fill="#FDB022" className=" border-[#E5E7EB] bg-white text-[#FDB022]" />}
                    iconBg="bg-[#FFF8E7]"
                    badge="Active"
                    badgeColor="bg-[#ECFDF3] text-[#039855]"
                />

            </div>

            {/* Charts */}

            <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">

                <RevenueChart />

                <CategorySales />

            </div>

            {/* Table */}

            <TopProjectsTable />

            {/* Insights */}

            <div className="grid gap-6 lg:grid-cols-2">

                <CustomerInsights />

                <CreatorGrowthStats />

            </div>

            {/* Transactions */}

            <RecentTransactions />

        </div>
    );
}