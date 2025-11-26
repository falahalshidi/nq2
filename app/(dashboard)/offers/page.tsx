"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Tag, Calendar, TrendingUp, Users } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const offers = [
  {
    id: 1,
    name: "عرض نهاية الأسبوع",
    description: "خصم ٢٥٪ على جميع الوجبات",
    discount: "٢٥٪",
    startDate: "٢٠٢٤-١١-٢٨",
    endDate: "٢٠٢٤-١١-٣٠",
    status: "نشط",
    used: 45,
    revenue: "٨,٥٠٠ ر.س",
  },
  {
    id: 2,
    name: "عرض اشترِ واحدة واحصل على أخرى",
    description: "اشترِ بيتزا واحصل على أخرى مجاناً",
    discount: "٥٠٪",
    startDate: "٢٠٢٤-١١-٢٥",
    endDate: "٢٠٢٤-١٢-٠٥",
    status: "نشط",
    used: 78,
    revenue: "١٢,٣٠٠ ر.س",
  },
  {
    id: 3,
    name: "عرض العملاء الجدد",
    description: "خصم ٣٠٪ على أول طلب",
    discount: "٣٠٪",
    startDate: "٢٠٢٤-١١-٠١",
    endDate: "٢٠٢٤-١٢-٣١",
    status: "نشط",
    used: 156,
    revenue: "١٨,٧٠٠ ر.س",
  },
  {
    id: 4,
    name: "عرض رمضان",
    description: "خصم ٤٠٪ على وجبات الإفطار",
    discount: "٤٠٪",
    startDate: "٢٠٢٤-٠٣-١٠",
    endDate: "٢٠٢٤-٠٤-٠٩",
    status: "منتهي",
    used: 342,
    revenue: "٤٥,٦٠٠ ر.س",
  },
]

export default function OffersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">العروض</h1>
          <p className="text-muted-foreground">إدارة العروض والخصومات</p>
        </div>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة عرض جديد
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي العروض</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٢٨</div>
            <p className="text-xs text-muted-foreground mt-1">في النظام</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">العروض النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٣</div>
            <p className="text-xs text-muted-foreground mt-1">قيد التشغيل</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">مرات الاستخدام</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٦٢١</div>
            <p className="text-xs text-muted-foreground mt-1">خلال الشهر</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٨٥,١٠٠ ر.س</div>
            <p className="text-xs text-muted-foreground mt-1">من العروض</p>
          </CardContent>
        </Card>
      </div>

      {/* Offers Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة العروض</CardTitle>
          <CardDescription>عرض وإدارة جميع العروض والخصومات</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">العرض</TableHead>
                <TableHead className="text-right">الخصم</TableHead>
                <TableHead className="text-right">تاريخ البداية</TableHead>
                <TableHead className="text-right">تاريخ النهاية</TableHead>
                <TableHead className="text-right">مرات الاستخدام</TableHead>
                <TableHead className="text-right">الإيرادات</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        <Tag className="h-4 w-4 text-muted-foreground" />
                        {offer.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {offer.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                      {offer.discount}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {offer.startDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {offer.endDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{offer.used}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 font-medium text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      {offer.revenue}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={offer.status === "نشط" ? "default" : "secondary"}>
                      {offer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      تعديل
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

