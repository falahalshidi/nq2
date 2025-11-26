"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, UtensilsCrossed, DollarSign, Package } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const menuItems = [
  {
    id: 1,
    name: "برجر لحم فاخر",
    category: "وجبات رئيسية",
    price: "٤٥ ر.س",
    cost: "٢٠ ر.س",
    status: "متاح",
    sales: 234,
  },
  {
    id: 2,
    name: "بيتزا مارجريتا",
    category: "وجبات رئيسية",
    price: "٣٥ ر.س",
    cost: "١٥ ر.س",
    status: "متاح",
    sales: 189,
  },
  {
    id: 3,
    name: "عصير برتقال طازج",
    category: "مشروبات",
    price: "١٢ ر.س",
    cost: "٥ ر.س",
    status: "متاح",
    sales: 456,
  },
  {
    id: 4,
    name: "سلطة سيزر",
    category: "مقبلات",
    price: "٢٥ ر.س",
    cost: "١٠ ر.س",
    status: "متاح",
    sales: 167,
  },
  {
    id: 5,
    name: "كيك الشوكولاتة",
    category: "حلويات",
    price: "٢٠ ر.س",
    cost: "٨ ر.س",
    status: "غير متاح",
    sales: 98,
  },
  {
    id: 6,
    name: "معكرونة ألفريدو",
    category: "وجبات رئيسية",
    price: "٤٠ ر.س",
    cost: "١٨ ر.س",
    status: "متاح",
    sales: 145,
  },
]

const categories = [
  { name: "وجبات رئيسية", count: 45, color: "bg-blue-500" },
  { name: "مشروبات", count: 28, color: "bg-green-500" },
  { name: "مقبلات", count: 22, color: "bg-orange-500" },
  { name: "حلويات", count: 18, color: "bg-pink-500" },
]

export default function MenuPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">المنيو</h1>
          <p className="text-muted-foreground">إدارة قائمة الطعام والمشروبات</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Package className="ml-2 h-4 w-4" />
            إدارة الفئات
          </Button>
          <Button>
            <Plus className="ml-2 h-4 w-4" />
            إضافة منتج جديد
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المنتجات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١١٣</div>
            <p className="text-xs text-muted-foreground mt-1">في القائمة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">المنتجات المتاحة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">١٠٨</div>
            <p className="text-xs text-muted-foreground mt-1">جاهز للطلب</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">غير متاح</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٥</div>
            <p className="text-xs text-muted-foreground mt-1">نفذت الكمية</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">الفئات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">٤</div>
            <p className="text-xs text-muted-foreground mt-1">تصنيفات رئيسية</p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{category.name}</p>
                  <p className="text-2xl font-bold mt-1">{category.count}</p>
                </div>
                <div className={`h-12 w-12 rounded-full ${category.color} flex items-center justify-center`}>
                  <UtensilsCrossed className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Menu Items Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة المنتجات</CardTitle>
          <CardDescription>عرض وإدارة جميع منتجات القائمة</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">المنتج</TableHead>
                <TableHead className="text-right">الفئة</TableHead>
                <TableHead className="text-right">السعر</TableHead>
                <TableHead className="text-right">التكلفة</TableHead>
                <TableHead className="text-right">الربح</TableHead>
                <TableHead className="text-right">المبيعات</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => {
                const price = parseInt(item.price.replace(/[^\d]/g, ''))
                const cost = parseInt(item.cost.replace(/[^\d]/g, ''))
                const profit = price - cost
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{item.price}</TableCell>
                    <TableCell className="text-muted-foreground">{item.cost}</TableCell>
                    <TableCell>
                      <span className="font-medium text-green-600">{profit} ر.س</span>
                    </TableCell>
                    <TableCell>{item.sales}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "متاح" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        تعديل
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

