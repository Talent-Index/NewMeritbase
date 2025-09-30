"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 2) + 1 },
  { name: "Feb", total: Math.floor(Math.random() * 2) + 1 },
  { name: "Mar", total: Math.floor(Math.random() * 3) + 2 },
  { name: "Apr", total: Math.floor(Math.random() * 4) + 3 },
  { name: "May", total: Math.floor(Math.random() * 4) + 3 },
  { name: "Jun", total: Math.floor(Math.random() * 5) + 4 },
  { name: "Jul", total: Math.floor(Math.random() * 5) + 4 },
  { name: "Aug", total: Math.floor(Math.random() * 5) + 4 },
  { name: "Sep", total: Math.floor(Math.random() * 3) + 2 },
  { name: "Oct", total: Math.floor(Math.random() * 5) + 4 },
  { name: "Nov", total: Math.floor(Math.random() * 2) + 1 },
  { name: "Dec", total: Math.floor(Math.random() * 3) + 2 },
];

export function JobPostingChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Job Posting Trends</CardTitle>
        <CardDescription>Monthly job posting history.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent))', opacity: 0.1 }}
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--border))",
              }}
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4, fill: "hsl(var(--primary))" }}
              activeDot={{ r: 8, style: { stroke: "hsl(var(--primary))" } }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
