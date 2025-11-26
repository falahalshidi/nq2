"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MapPin, Phone, Clock, Users, TrendingUp } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const branches = [
  {
    id: 1,
    name: "الفرع الرئيسي",
    location: "الرياض، حي الملقا",
    phone: "0112345678",
    status: "نشط",
    staff: 15,
    sales: "٤٥,٢٠٠ ر.س",
    orders: 156,
    openTime: "٨:٠٠ ص - ١٢:٠٠ م",
  },
  {
    id: 2,
    name: "فرع العليا",
    location: "الرياض، حي العليا",
    phone: "0112345679",
    status: "نشط",
    staff: 12,
    sales: "٣٨,٥٠٠ ر.س",
    orders: 134,
    openTime: "٩:٠٠ ص - ١١:٠٠ م",
  },
  {
    id: 3,
    name: "فرع الخبر",
    location: "الخبر، الكورنيش",
    phone: "0133456789",
    status: "نشط",
    staff: 10,
    sales: "٣٢,٨٠٠ ر.س",
    orders: 98,
    openTime: "١٠:٠٠ ص - ١٢:٠٠ م",
  },
  {
    id: 4,
    name: "فرع جدة",
    location: "جدة، حي الروضة",
    phone: "0122345678",
    status: "قيد الصيانة",
    staff: 8,
    sales: "٠ ر.س",
    orders: 0,
    openTime: "مغلق مؤقتاً",
  },
]

const branchStats = [
  {
    title: "إجمالي الفروع",
    value: "٤",
    icon: MapPin,
    color: "text-blue-600",
  },
  {
    title: "الفروع النشطة",
    value: "٣",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "إجمالي الموظفين",
    value: "٤٥",
    icon: Users,
    color: "text-purple-600",
  },
]

export default function BranchesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">الفروع</h1>
          <p className="text-muted-foreground">إدارة فروع المطعم</p>
        </div>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة فرع جديد
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {branchStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Branches Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة الفروع</CardTitle>
          <CardDescription>عرض وإدارة جميع فروع المطعم</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الاسم</TableHead>
                <TableHead className="text-right">الموقع</TableHead>
                <TableHead className="text-right">الهاتف</TableHead>
                <TableHead className="text-right">ساعات العمل</TableHead>
                <TableHead className="text-right">الموظفين</TableHead>
                <TableHead className="text-right">المبيعات</TableHead>
                <TableHead className="text-right">الطلبات</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell className="font-medium">{branch.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{branch.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{branch.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{branch.openTime}</span>
                    </div>
                  </TableCell>
                  <TableCell>{branch.staff}</TableCell>
                  <TableCell className="font-medium">{branch.sales}</TableCell>
                  <TableCell>{branch.orders}</TableCell>
                  <TableCell>
                    <Badge variant={branch.status === "نشط" ? "default" : "secondary"}>
                      {branch.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      تفاصيل
                    </Button>
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

