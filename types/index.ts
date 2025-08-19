// User and Authentication Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  role: UserRole
  isEmailVerified: boolean
  schoolAffiliation?: string
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'customer' | 'school_admin' | 'shop_staff' | 'super_admin'

export interface AuthSession {
  user: User
  token: string
  expiresAt: Date
}

// Product Types
export interface Product {
  id: string
  sku: string
  isbn: string
  title: string
  author: string
  publisher: string
  edition: string
  grade: Grade
  subject: Subject
  price: number
  salePrice?: number
  stock: number
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  language: string
  description: string
  images: string[]
  tags: string[]
  format: BookFormat
  isActive: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

export type Grade = 'Creche' | 'Nursery' | 'Primary 1' | 'Primary 2' | 'Primary 3' | 'Primary 4' | 'Primary 5' | 'Primary 6'

export type Subject = 
  | 'English' 
  | 'Mathematics' 
  | 'Science' 
  | 'Social Studies' 
  | 'Religious Studies' 
  | 'Creative Arts' 
  | 'Physical Education' 
  | 'French' 
  | 'Computer Studies'
  | 'Home Economics'

export type BookFormat = 'Textbook' | 'Workbook' | 'Storybook' | 'Reference' | 'Activity Book'

// Cart Types
export interface CartItem {
  productId: string
  product: Product
  quantity: number
  price: number
}

export interface Cart {
  id: string
  userId?: string
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  couponCode?: string
  discount?: number
  createdAt: Date
  updatedAt: Date
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  userId: string
  user: User
  items: OrderItem[]
  subtotal: number
  shipping: number
  discount: number
  total: number
  status: OrderStatus
  paymentStatus: PaymentStatus
  shippingMethod: ShippingMethod
  shippingAddress?: Address
  pickupLocation?: PickupLocation
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
  estimatedDelivery?: Date
  actualDelivery?: Date
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  product: Product
  quantity: number
  price: number
  total: number
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'ready_for_pickup' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled' 
  | 'refunded'

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export type ShippingMethod = 'pickup' | 'delivery' | 'courier'

// Address and Location Types
export interface Address {
  id: string
  userId: string
  type: 'home' | 'work' | 'other'
  firstName: string
  lastName: string
  phone: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface PickupLocation {
  id: string
  name: string
  address: string
  city: string
  phone: string
  hours: string
  isActive: boolean
}

// Class Booklist Types
export interface ClassBooklist {
  id: string
  class: Grade
  term: string
  academicYear: string
  isOfficial: boolean
  isActive: boolean
  items: BooklistItem[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface BooklistItem {
  id: string
  booklistId: string
  subject: Subject
  title: string
  author: string
  isbn: string
  publisher: string
  edition: string
  quantity: number
  notes?: string
  productId?: string
  product?: Product
}

// Admin Dashboard Types
export interface DashboardStats {
  totalOrders: number
  totalRevenue: number
  totalProducts: number
  totalCustomers: number
  pendingOrders: number
  lowStockProducts: number
  monthlyRevenue: number[]
  topProducts: Product[]
  recentOrders: Order[]
}

export interface InventoryAlert {
  id: string
  productId: string
  product: Product
  currentStock: number
  threshold: number
  type: 'low_stock' | 'out_of_stock'
  createdAt: Date
  isResolved: boolean
}

// Payment Types
export interface Payment {
  id: string
  orderId: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  transactionId?: string
  gateway: PaymentGateway
  metadata?: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export type PaymentMethod = 'card' | 'bank_transfer' | 'mobile_money' | 'pay_on_delivery'

export type PaymentGateway = 'stripe' | 'paystack' | 'flutterwave'

// Marketing Types
export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed'
  value: number
  minOrderAmount?: number
  maxUses?: number
  usedCount: number
  isActive: boolean
  validFrom: Date
  validTo: Date
  applicableGrades?: Grade[]
  createdAt: Date
}

export interface Promotion {
  id: string
  title: string
  description: string
  type: 'bundle' | 'discount' | 'free_shipping'
  discountPercentage?: number
  discountAmount?: number
  products: string[]
  isActive: boolean
  validFrom: Date
  validTo: Date
  createdAt: Date
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  metadata?: Record<string, any>
  createdAt: Date
}

export type NotificationType = 
  | 'order_confirmation' 
  | 'order_shipped' 
  | 'order_ready' 
  | 'payment_received' 
  | 'low_stock' 
  | 'promotion'

// Search and Filter Types
export interface ProductFilters {
  grade?: Grade[]
  subject?: Subject[]
  format?: BookFormat[]
  publisher?: string[]
  priceRange?: {
    min: number
    max: number
  }
  availability?: 'in_stock' | 'out_of_stock' | 'pre_order'
  language?: string[]
  tags?: string[]
}

export interface SearchParams {
  query?: string
  filters?: ProductFilters
  sortBy?: 'relevance' | 'price_low' | 'price_high' | 'newest' | 'popularity'
  page?: number
  limit?: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface LoginForm {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterForm {
  name: string
  email: string
  phone?: string
  password: string
  confirmPassword: string
  schoolAffiliation?: string
  agreeToTerms: boolean
}

export interface CheckoutForm {
  shippingMethod: ShippingMethod
  shippingAddress?: Address
  pickupLocation?: string
  paymentMethod: PaymentMethod
  couponCode?: string
  notes?: string
}

// Utility Types
export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface Breadcrumb {
  label: string
  href: string
  current?: boolean
}

export interface MenuItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children?: MenuItem[]
  badge?: string
}

// Error Types
export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

// File Upload Types
export interface FileUpload {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  uploadedBy: string
  createdAt: Date
}

// Activity Log Types
export interface ActivityLog {
  id: string
  userId: string
  user: User
  action: string
  resource: string
  resourceId: string
  details?: Record<string, any>
  ipAddress: string
  userAgent: string
  createdAt: Date
} 