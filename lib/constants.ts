// Application constants for better performance and maintainability

export const APP_NAME = "منصة إدارة المطاعم";
export const APP_DESCRIPTION = "نظام إدارة شامل للمطاعم والفروع";

// Navigation items
export const NAV_ITEMS = [
  {
    title: "لوحة التحكم",
    href: "/",
  },
  {
    title: "الفروع",
    href: "/branches",
  },
  {
    title: "الموظفين",
    href: "/staff",
  },
  {
    title: "المنيو",
    href: "/menu",
  },
  {
    title: "العروض",
    href: "/offers",
  },
  {
    title: "الطابعات",
    href: "/printers",
  },
  {
    title: "نقاط البيع",
    href: "/pos",
  },
  {
    title: "التحليلات",
    href: "/analytics",
  },
  {
    title: "الإعدادات",
    href: "/settings",
  },
] as const;

// Chart colors for consistency
export const CHART_COLORS = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  success: "hsl(142, 76%, 36%)",
  warning: "hsl(38, 92%, 50%)",
  danger: "hsl(0, 84%, 60%)",
  info: "hsl(199, 89%, 48%)",
} as const;

// Date formats
export const DATE_FORMATS = {
  full: "dd/MM/yyyy HH:mm:ss",
  date: "dd/MM/yyyy",
  time: "HH:mm",
  monthYear: "MM/yyyy",
} as const;

// Pagination
export const ITEMS_PER_PAGE = 10;
export const MAX_PAGE_BUTTONS = 5;

// API endpoints (for future use)
export const API_ROUTES = {
  dashboard: "/api/dashboard",
  branches: "/api/branches",
  staff: "/api/staff",
  menu: "/api/menu",
  offers: "/api/offers",
  printers: "/api/printers",
  pos: "/api/pos",
  analytics: "/api/analytics",
  settings: "/api/settings",
} as const;

