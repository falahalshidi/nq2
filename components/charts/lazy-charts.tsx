"use client"

// Lazy load recharts components for better performance
import dynamic from "next/dynamic"

export const LazyBarChart = dynamic(
  () => import("recharts").then((mod) => mod.BarChart),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }
)

export const LazyLineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }
)

export const LazyPieChart = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }
)

export const LazyAreaChart = dynamic(
  () => import("recharts").then((mod) => mod.AreaChart),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }
)

export const LazyRadarChart = dynamic(
  () => import("recharts").then((mod) => mod.RadarChart),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse text-muted-foreground">جاري التحميل...</div>
      </div>
    )
  }
)

// Export other recharts components
export * from "recharts"

