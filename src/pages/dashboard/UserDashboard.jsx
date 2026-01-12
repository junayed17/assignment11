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

const UserDashboard = () => {
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading } = useQuery({
    queryKey: ["bookStats", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/books-stats`);
      return data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;
console.log(stats);

  // Bar chart data
  const categoryData =
    stats?.categories?.map((item) => ({
      category: item._id || "Other",
      total: item.count,
    })) || [];

  // Pie chart data
  const statusData =
    stats?.statusBreakdown?.map((item) => ({
      name: item._id,
      value: item.count,
    })) || [];

  const STATUS_COLORS = {
    Published: "#10B981",
    Unpublished: "#EF4444",
  };

  return (
    <div
      className="p-4 md:p-8 min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-950"
      style={{
        "--chart-grid": "#E5E7EB",
        "--chart-grid-dark": "#374151",
        "--tooltip-bg": "#ffffff",
        "--tooltip-bg-dark": "#1f2937",
        "--tooltip-text": "#111827",
        "--tooltip-text-dark": "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Total Books */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* কার্ড ১: মোট বই */}
          <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl flex flex-col items-center sm:items-start transition-transform hover:scale-[1.02]">
            <h3 className="text-sm uppercase tracking-widest opacity-80 font-bold">
              Total Books
            </h3>
            <p className="text-5xl font-black mt-1">{stats?.totalPosts || 0}</p>
          </div>

          {/* কার্ড ২: মোট অর্ডার */}
          <div className="p-8 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl text-white shadow-2xl flex flex-col items-center sm:items-start transition-transform hover:scale-[1.02]">
            <h3 className="text-sm uppercase tracking-widest opacity-80 font-bold">
              Total Users
            </h3>
            <p className="text-5xl font-black mt-1">{stats?.totalUser || 0}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Books by Category
            </h2>

            <div className="h-72 md:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--chart-grid)"
                    className="dark:[stroke:var(--chart-grid-dark)]"
                    opacity={0.4}
                  />
                  <XAxis
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(59,130,246,0.08)" }}
                    contentStyle={{
                      borderRadius: "10px",
                      backgroundColor: "var(--tooltip-bg)",
                      color: "var(--tooltip-text)",
                      border: "none",
                    }}
                  />
                  <Bar
                    dataKey="total"
                    fill="#3B82F6"
                    radius={[6, 6, 0, 0]}
                    barSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Publication Status
            </h2>

            <div className="h-72 md:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={8}
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
                      borderRadius: "10px",
                      backgroundColor: "var(--tooltip-bg)",
                      color: "var(--tooltip-text)",
                      border: "none",
                    }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
