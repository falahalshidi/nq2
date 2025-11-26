"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Printer, Wifi, WifiOff, MapPin } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const printers = [
  {
    id: 1,
    name: "طابعة المطبخ - الرئيسي",
    model: "Epson TM-T88VI",
    ipAddress: "192.168.1.100",
    branch: "الفرع الرئيسي",
    location: "المطبخ الرئيسي",
    status: "متصل",
    jobsToday: 145,
    lastPrint: "منذ دقيقتين",
  },
  {
    id: 2,
    name: "طابعة الكاشير - الرئيسي",
    model: "Star TSP143III",
    ipAddress: "192.168.1.101",
    branch: "الفرع الرئيسي",
    location: "نقطة البيع ١",
    status: "متصل",
    jobsToday: 178,
    lastPrint: "منذ ٥ دقائق",
  },
  {
    id: 3,
    name: "طابعة المطبخ - العليا",
    model: "Epson TM-T88VI",
    ipAddress: "192.168.2.100",
    branch: "فرع العليا",
    location: "المطبخ",
    status: "متصل",
    jobsToday: 98,
    lastPrint: "منذ ١٠ دقائق",
  },
  {
    id: 4,
    name: "طابعة الحلويات - الرئيسي",
    model: "Star TSP650II",
    ipAddress: "192.168.1.102",
    branch: "الفرع الرئيسي",
    location: "قسم الحلويات",
    status: "غير متصل",
    jobsToday: 0,
    lastPrint: "منذ ٣ ساعات",
  },
]

export default function PrintersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">الطابعات</h1>
          <p className="text-muted-foreground">إدارة الطابعات وإعداداتها</p>
        </div>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة طابعة جديدة
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الطابعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١٢</div>
            <p className="text-xs text-muted-foreground mt-1">في جميع الفروع</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">الطابعات المتصلة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١٠</div>
            <p className="text-xs text-muted-foreground mt-1 text-green-600">نشطة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">غير متصلة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٢</div>
            <p className="text-xs text-muted-foreground mt-1 text-red-600">تحتاج صيانة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">الطلبات اليوم</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٤٢١</div>
            <p className="text-xs text-muted-foreground mt-1">مطبوعة</p>
          </CardContent>
        </Card>
      </div>

      {/* Printers Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة الطابعات</CardTitle>
          <CardDescription>عرض وإدارة جميع الطابعات</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الطابعة</TableHead>
                <TableHead className="text-right">الموديل</TableHead>
                <TableHead className="text-right">عنوان IP</TableHead>
                <TableHead className="text-right">الفرع</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
                <TableHead className="text-right">الطلبات اليوم</TableHead>
                <TableHead className="text-right">آخر طباعة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {printers.map((printer) => (
                <TableRow key={printer.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Printer className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{printer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {printer.model}
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {printer.ipAddress}
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{printer.branch}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {printer.location}
                  </TableCell>
                  <TableCell className="font-medium">{printer.jobsToday}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {printer.lastPrint}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={printer.status === "متصل" ? "default" : "destructive"}
                      className="flex items-center gap-1 w-fit"
                    >
                      {printer.status === "متصل" ? (
                        <Wifi className="h-3 w-3" />
                      ) : (
                        <WifiOff className="h-3 w-3" />
                      )}
                      {printer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        اختبار
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

