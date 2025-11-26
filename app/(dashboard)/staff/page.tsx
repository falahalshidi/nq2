"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, UserCircle, Mail, Phone, MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const staff = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "مدير",
    branch: "الفرع الرئيسي",
    email: "ahmed@restaurant.com",
    phone: "0501234567",
    status: "نشط",
    avatar: "/avatars/01.png",
  },
  {
    id: 2,
    name: "فاطمة علي",
    role: "محاسب",
    branch: "الفرع الرئيسي",
    email: "fatima@restaurant.com",
    phone: "0502345678",
    status: "نشط",
    avatar: "/avatars/02.png",
  },
  {
    id: 3,
    name: "محمد خالد",
    role: "طاهي",
    branch: "فرع العليا",
    email: "mohammed@restaurant.com",
    phone: "0503456789",
    status: "نشط",
    avatar: "/avatars/03.png",
  },
  {
    id: 4,
    name: "نورة سعد",
    role: "موظف استقبال",
    branch: "فرع الخبر",
    email: "noura@restaurant.com",
    phone: "0504567890",
    status: "في إجازة",
    avatar: "/avatars/04.png",
  },
  {
    id: 5,
    name: "عبدالله يوسف",
    role: "طاهي",
    branch: "الفرع الرئيسي",
    email: "abdullah@restaurant.com",
    phone: "0505678901",
    status: "نشط",
    avatar: "/avatars/05.png",
  },
]

const roleColors: Record<string, string> = {
  "مدير": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "محاسب": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "طاهي": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "موظف استقبال": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
}

export default function StaffPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">الموظفين</h1>
          <p className="text-muted-foreground">إدارة موظفي المطعم والصلاحيات</p>
        </div>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة موظف جديد
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الموظفين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٤٥</div>
            <p className="text-xs text-muted-foreground mt-1">في جميع الفروع</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">الموظفين النشطين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٤٢</div>
            <p className="text-xs text-muted-foreground mt-1">متواجدين حالياً</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">في إجازة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٣</div>
            <p className="text-xs text-muted-foreground mt-1">غير متواجدين</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">المناصب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٧</div>
            <p className="text-xs text-muted-foreground mt-1">أنواع الوظائف</p>
          </CardContent>
        </Card>
      </div>

      {/* Staff Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة الموظفين</CardTitle>
          <CardDescription>عرض وإدارة جميع موظفي المطعم</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الموظف</TableHead>
                <TableHead className="text-right">الوظيفة</TableHead>
                <TableHead className="text-right">الفرع</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">الهاتف</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{member.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={roleColors[member.role]}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{member.branch}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.status === "نشط" ? "default" : "secondary"}>
                      {member.status}
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

