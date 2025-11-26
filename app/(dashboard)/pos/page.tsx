"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, CreditCard, MapPin, DollarSign, TrendingUp } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const posTerminals = [
  {
    id: 1,
    name: "كاشير ١ - الرئيسي",
    terminalId: "POS-001",
    branch: "الفرع الرئيسي",
    operator: "أحمد محمد",
    status: "نشط",
    todaySales: "١٢,٤٥٠ ر.س",
    todayOrders: 87,
    lastTransaction: "منذ دقيقة",
  },
  {
    id: 2,
    name: "كاشير ٢ - الرئيسي",
    terminalId: "POS-002",
    branch: "الفرع الرئيسي",
    operator: "فاطمة علي",
    status: "نشط",
    todaySales: "١٠,٨٢٠ ر.س",
    todayOrders: 76,
    lastTransaction: "منذ ٣ دقائق",
  },
  {
    id: 3,
    name: "كاشير ١ - العليا",
    terminalId: "POS-003",
    branch: "فرع العليا",
    operator: "محمد خالد",
    status: "نشط",
    todaySales: "٨,٣٥٠ ر.س",
    todayOrders: 54,
    lastTransaction: "منذ ٥ دقائق",
  },
  {
    id: 4,
    name: "كاشير ١ - الخبر",
    terminalId: "POS-004",
    branch: "فرع الخبر",
    operator: "نورة سعد",
    status: "معطل",
    todaySales: "٠ ر.س",
    todayOrders: 0,
    lastTransaction: "منذ ٢ ساعة",
  },
  {
    id: 5,
    name: "كاشير Drive-Thru - الرئيسي",
    terminalId: "POS-005",
    branch: "الفرع الرئيسي",
    operator: "عبدالله يوسف",
    status: "نشط",
    todaySales: "١٥,٦٧٠ ر.س",
    todayOrders: 112,
    lastTransaction: "منذ ثانيتين",
  },
]

export default function POSPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">نقاط البيع</h1>
          <p className="text-muted-foreground">إدارة نقاط البيع والمعاملات</p>
        </div>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة نقطة بيع جديدة
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي نقاط البيع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١٥</div>
            <p className="text-xs text-muted-foreground mt-1">في جميع الفروع</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">النقاط النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١٣</div>
            <p className="text-xs text-muted-foreground mt-1 text-green-600">قيد التشغيل</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">المبيعات اليوم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٦٨,٢٩٠ ر.س</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+١٨٪</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">المعاملات اليوم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٣٢٩</div>
            <p className="text-xs text-muted-foreground mt-1">معاملة مكتملة</p>
          </CardContent>
        </Card>
      </div>

      {/* POS Terminals Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة نقاط البيع</CardTitle>
          <CardDescription>عرض وإدارة جميع نقاط البيع</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">نقطة البيع</TableHead>
                <TableHead className="text-right">رقم الجهاز</TableHead>
                <TableHead className="text-right">الفرع</TableHead>
                <TableHead className="text-right">المشغل</TableHead>
                <TableHead className="text-right">المبيعات اليوم</TableHead>
                <TableHead className="text-right">الطلبات</TableHead>
                <TableHead className="text-right">آخر معاملة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posTerminals.map((terminal) => (
                <TableRow key={terminal.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{terminal.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {terminal.terminalId}
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{terminal.branch}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{terminal.operator}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 font-medium text-green-600">
                      <DollarSign className="h-4 w-4" />
                      {terminal.todaySales}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{terminal.todayOrders}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {terminal.lastTransaction}
                  </TableCell>
                  <TableCell>
                    <Badge variant={terminal.status === "نشط" ? "default" : "destructive"}>
                      {terminal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        تفاصيل
                      </Button>
                      <Button variant="ghost" size="sm">
                        إعدادات
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

