import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dữ liệu giả cho KPI
const kpiData = {
  totalRevenue: 24500000,
  todayRevenue: 1200000,
  newUsers: 15,
  totalUsers: 1248,
};

// Dữ liệu giả cho Biểu đồ
const chartData = [
  { name: "7 days ago", DoanhThu: 1500000 },
  { name: "6 days ago", DoanhThu: 1800000 },
  { name: "5 days ago", DoanhThu: 1300000 },
  { name: "4 days ago", DoanhThu: 2100000 },
  { name: "3 days ago", DoanhThu: 1900000 },
  { name: "Yesterday", DoanhThu: 2500000 },
  { name: "Today", DoanhThu: kpiData.todayRevenue },
];

// Component Thẻ KPI
const KpiCard = ({ title, value, details, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-800">
          {value.toLocaleString("vi-VN")}
        </p>
        <p className="text-xs text-green-600 mt-2">{details}</p>
      </div>
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* 4 Thẻ KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Tổng Doanh Thu"
          value={kpiData.totalRevenue}
          details="+23% from last month"
          icon={
            <span className="text-2xl text-blue-600">₫</span>
          }
        />
        <KpiCard
          title="Doanh Thu (Hôm nay)"
          value={kpiData.todayRevenue}
          details="+8% from yesterday"
          icon={
            <span className="text-2xl text-blue-600">💰</span>
          }
        />
        <KpiCard
          title="Người Dùng Mới (Hôm nay)"
          value={kpiData.newUsers}
          details="+12% from yesterday"
          icon={
            <span className="text-2xl text-blue-600">👤</span>
          }
        />
        <KpiCard
          title="Tổng Số Người Dùng"
          value={kpiData.totalUsers}
          details="All time"
          icon={
            <span className="text-2xl text-blue-600">👥</span>
          }
        />
      </div>

      {/* Biểu đồ Doanh thu */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Doanh thu 7 ngày qua
        </h3>
        {/* ResponsiveContainer làm biểu đồ co dãn */}
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis 
                tickFormatter={(value) => 
                  `${(value / 1000000).toLocaleString("vi-VN")}tr`
                } 
              />
              <Tooltip 
                formatter={(value) => 
                  `${value.toLocaleString("vi-VN")} ₫`
                } 
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="DoanhThu"
                stroke="#3B82F6"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* (Phần sau: Bảng User, Bảng Giao dịch...) */}
    </div>
  );
}