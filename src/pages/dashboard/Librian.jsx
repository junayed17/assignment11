import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Loader from "../../components/Loader";
import useAuthHook from "../../customHook/useAuthHook";
import useAxiosSecure from "../../customHook/useAxiosSecure";

const Librarian = () => {
  const { user, loading: authLoading } = useAuthHook();
  const axiosSecure = useAxiosSecure();


  const {
    data: stats,
    isLoading,
    isError,
    error,
  } = useQuery({
  
    queryKey: ["bookStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      console.log("Fetching stats for:", user?.email); // কনসোলে চেক করার জন্য
      const { data } = await axiosSecure.get(
        `/books-stats-librian?email=${user?.email}`
      );
      return data;
    },
  });

  console.log(stats);
  
  // যদি অথেনটিকেশন লোড হচ্ছে অথবা ডাটা লোড হচ্ছে, তবে লোডার দেখাবে
  if (authLoading || isLoading) return <Loader />;

  // যদি কোনো এরর হয় (যেমন টোকেন ইস্যু)
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 font-bold">
          Error loading stats: {error.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  // চার্ট ডাটা প্রসেসিং (অপশনাল চেইনিং ব্যবহার করে)
  const bookOrderData =
    stats?.bookAnalytics?.map((item) => ({
      name:
        item.name.length > 12 ? item.name.substring(0, 10) + "..." : item.name,
      orders: item.order || 0,
      fullName: item.name,
    })) || [];

  const statusData =
    stats?.statusBreakdown?.map((item) => ({
      name: item._id,
      value: item.count || 0,
    })) || [];

  const STATUS_COLORS = {
    Published: "#10B981",
    Unpublished: "#EF4444",
  };

  return (
    <div className="p-4 md:p-8 min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* উপরের স্ট্যাটাস কার্ডগুলো */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl flex flex-col items-center sm:items-start">
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-80 font-bold">
              Total Books
            </h3>
            <p className="text-6xl font-black mt-2">{stats?.totalPosts || 0}</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl text-white shadow-2xl flex flex-col items-center sm:items-start">
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-80 font-bold">
              Total Orders
            </h3>
            <p className="text-6xl font-black mt-2">{stats?.totalOrder || 0}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ১. Bar Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Orders by Book
            </h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bookOrderData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    strokeOpacity={0.1}
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9CA3AF", fontSize: 10 }}
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
                    contentStyle={{
                      borderRadius: "15px",
                      backgroundColor: "#1f2937",
                      border: "none",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                    labelFormatter={(value) =>
                      bookOrderData.find((b) => b.name === value)?.fullName ||
                      value
                    }
                  />
                  <Bar
                    dataKey="orders"
                    fill="#3B82F6"
                    radius={[6, 6, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ২. Pie Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Publication Summary
            </h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={10}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={STATUS_COLORS[entry.name] || "#9CA3AF"}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "15px",
                      backgroundColor: "#1f2937",
                      border: "none",
                      color: "#fff",
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Librarian;
