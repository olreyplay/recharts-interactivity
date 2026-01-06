import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 2800 },
  { month: "Apr", revenue: 4100 },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h2>Interactive Revenue Chart</h2>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="revenue"
          fill="#6366f1"
          onClick={(_, index) => setActiveIndex(index)}
        >
          {data.map((_, index) => (
            <rect
              key={index}
              fill={index === activeIndex ? "#ef4444" : "#6366f1"}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
