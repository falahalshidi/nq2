"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Settings, Bell, Shield, Globe, CreditCard, Mail } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">الإعدادات</h1>
        <p className="text-muted-foreground">إدارة إعدادات المطعم والنظام</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">
            <Settings className="ml-2 h-4 w-4" />
            عام
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="ml-2 h-4 w-4" />
            الإشعارات
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="ml-2 h-4 w-4" />
            الأمان
          </TabsTrigger>
          <TabsTrigger value="localization">
            <Globe className="ml-2 h-4 w-4" />
            اللغة
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="ml-2 h-4 w-4" />
            الدفع
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="ml-2 h-4 w-4" />
            البريد
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>الإعدادات العامة</CardTitle>
              <CardDescription>إدارة المعلومات الأساسية للمطعم</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="restaurant-name">اسم المطعم</Label>
                <Input id="restaurant-name" defaultValue="مطعم الذواقة" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Textarea 
                  id="description" 
                  defaultValue="مطعم يقدم أفضل الوجبات السريعة والصحية"
                  rows={3}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" defaultValue="0112345678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" defaultValue="info@restaurant.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">العنوان</Label>
                <Input id="address" defaultValue="الرياض، حي الملقا، طريق الملك فهد" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">المنطقة الزمنية</Label>
                  <Select defaultValue="riyadh">
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">الرياض (GMT+3)</SelectItem>
                      <SelectItem value="dubai">دبي (GMT+4)</SelectItem>
                      <SelectItem value="cairo">القاهرة (GMT+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">العملة</Label>
                  <Select defaultValue="sar">
                    <SelectTrigger id="currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sar">ريال سعودي (SAR)</SelectItem>
                      <SelectItem value="aed">درهم إماراتي (AED)</SelectItem>
                      <SelectItem value="egp">جنيه مصري (EGP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل الطلبات عبر الإنترنت</Label>
                  <p className="text-sm text-muted-foreground">السماح للعملاء بالطلب عبر الموقع</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تفعيل خدمة التوصيل</Label>
                  <p className="text-sm text-muted-foreground">توفير خدمة توصيل الطلبات</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الإشعارات</CardTitle>
              <CardDescription>إدارة تفضيلات الإشعارات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعارات الطلبات الجديدة</Label>
                  <p className="text-sm text-muted-foreground">تلقي إشعار عند وصول طلب جديد</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعارات المبيعات اليومية</Label>
                  <p className="text-sm text-muted-foreground">تقرير يومي بالمبيعات</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعارات المخزون</Label>
                  <p className="text-sm text-muted-foreground">تنبيه عند انخفاض المخزون</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعارات الموظفين</Label>
                  <p className="text-sm text-muted-foreground">تنبيه عند تسجيل دخول وخروج الموظفين</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>إشعارات الطابعات</Label>
                  <p className="text-sm text-muted-foreground">تنبيه عند حدوث مشاكل في الطابعات</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="notification-email">البريد الإلكتروني للإشعارات</Label>
                <Input id="notification-email" type="email" defaultValue="notifications@restaurant.com" />
              </div>

              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>الأمان والخصوصية</CardTitle>
              <CardDescription>إدارة إعدادات الأمان</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                <Input id="confirm-password" type="password" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>المصادقة الثنائية</Label>
                  <p className="text-sm text-muted-foreground">إضافة طبقة أمان إضافية</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>تسجيل نشاط تسجيل الدخول</Label>
                  <p className="text-sm text-muted-foreground">حفظ سجل محاولات تسجيل الدخول</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>طلب كلمة المرور عند العمليات الحساسة</Label>
                  <p className="text-sm text-muted-foreground">تأكيد الهوية عند حذف البيانات</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Localization Settings */}
        <TabsContent value="localization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>اللغة والمنطقة</CardTitle>
              <CardDescription>إعدادات اللغة والتنسيق</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">اللغة</Label>
                <Select defaultValue="ar">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">تنسيق التاريخ</Label>
                <Select defaultValue="dd-mm-yyyy">
                  <SelectTrigger id="date-format">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                    <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                    <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time-format">تنسيق الوقت</Label>
                <Select defaultValue="24">
                  <SelectTrigger id="time-format">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">١٢ ساعة</SelectItem>
                    <SelectItem value="24">٢٤ ساعة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>استخدام التقويم الهجري</Label>
                  <p className="text-sm text-muted-foreground">عرض التواريخ بالتقويم الهجري</p>
                </div>
                <Switch />
              </div>

              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الدفع</CardTitle>
              <CardDescription>إدارة طرق الدفع المتاحة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>الدفع النقدي</Label>
                  <p className="text-sm text-muted-foreground">قبول الدفع نقداً</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>بطاقات الائتمان</Label>
                  <p className="text-sm text-muted-foreground">قبول بطاقات Visa و Mastercard</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Apple Pay</Label>
                  <p className="text-sm text-muted-foreground">قبول الدفع عبر Apple Pay</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>مدى</Label>
                  <p className="text-sm text-muted-foreground">قبول بطاقات مدى</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>STC Pay</Label>
                  <p className="text-sm text-muted-foreground">قبول الدفع عبر STC Pay</p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="tax-rate">نسبة الضريبة (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="15" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-charge">رسوم الخدمة (%)</Label>
                <Input id="service-charge" type="number" defaultValue="0" />
              </div>

              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات البريد الإلكتروني</CardTitle>
              <CardDescription>تكوين خادم البريد الإلكتروني</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">خادم SMTP</Label>
                <Input id="smtp-host" defaultValue="smtp.gmail.com" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">المنفذ</Label>
                  <Input id="smtp-port" type="number" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="encryption">التشفير</Label>
                  <Select defaultValue="tls">
                    <SelectTrigger id="encryption">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                      <SelectItem value="none">بدون تشفير</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-username">اسم المستخدم</Label>
                <Input id="smtp-username" type="email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-password">كلمة المرور</Label>
                <Input id="smtp-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-email">البريد المرسل</Label>
                <Input id="from-email" type="email" defaultValue="noreply@restaurant.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-name">اسم المرسل</Label>
                <Input id="from-name" defaultValue="مطعم الذواقة" />
              </div>

              <Button variant="outline">اختبار الاتصال</Button>
              <Button>حفظ التغييرات</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

