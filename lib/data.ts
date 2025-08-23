import { Product, Order, User, OrderStatus, PaymentStatus, Grade, Subject, BookFormat } from '@/types'



// Real product data
export const products: Product[] = [
  {
    id: '1',
    sku: 'ENG-P1-001',
    isbn: '978-0-123456-01-2',
    title: 'English Language for Primary 1',
    author: 'Dr. Sarah Johnson',
    publisher: 'Educational Publishers Ltd',
    edition: '2024 Edition',
    grade: 'Primary 1',
    subject: 'English',
    price: 2500,
    salePrice: 2200,
    stock: 45,
    weight: 0.8,
    dimensions: { length: 28, width: 21, height: 2 },
    language: 'English',
    description: 'Comprehensive English language textbook designed for Primary 1 students. Covers reading, writing, speaking, and listening skills.',
    images: ['/images/products/english-2.png'],
    tags: ['textbook', 'primary', 'english', 'language'],
    format: 'Textbook',
    isActive: true,
    isFeatured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    sku: 'MATH-P2-002',
    isbn: '978-0-123456-02-3',
    title: 'Mathematics Made Easy - Primary 2',
    author: 'Prof. Michael Chen',
    publisher: 'Math Excellence Publishers',
    edition: '2024 Edition',
    grade: 'Primary 2',
    subject: 'Mathematics',
    price: 2800,
    stock: 32,
    weight: 1.2,
    dimensions: { length: 30, width: 22, height: 2.5 },
    language: 'English',
    description: 'Interactive mathematics textbook with practical examples and exercises for Primary 2 students.',
    images: ['/images/products/math-book-1.svg'],
    tags: ['textbook', 'primary', 'mathematics', 'interactive'],
    format: 'Textbook',
    isActive: true,
    isFeatured: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    sku: 'SCI-P3-003',
    isbn: '978-0-123456-03-4',
    title: 'Science Explorer - Primary 3',
    author: 'Dr. Emily Rodriguez',
    publisher: 'Science Discovery Press',
    edition: '2024 Edition',
    grade: 'Primary 3',
    subject: 'Science',
    price: 3200,
    salePrice: 2900,
    stock: 28,
    weight: 1.0,
    dimensions: { length: 29, width: 21, height: 2.2 },
    language: 'English',
    description: 'Engaging science textbook with hands-on experiments and colorful illustrations for Primary 3 students.',
    images: ['/images/products/science-3.png'],
    tags: ['textbook', 'primary', 'science', 'experiments'],
    format: 'Textbook',
    isActive: true,
    isFeatured: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: '4',
    sku: 'SOC-P4-004',
    isbn: '978-0-123456-04-5',
    title: 'Social Studies for Primary 4',
    author: 'Prof. David Thompson',
    publisher: 'Heritage Education',
    edition: '2024 Edition',
    grade: 'Primary 4',
    subject: 'Social Studies',
    price: 2400,
    stock: 38,
    weight: 0.9,
    dimensions: { length: 27, width: 20, height: 1.8 },
    language: 'English',
    description: 'Comprehensive social studies textbook covering history, geography, and civics for Primary 4 students.',
    images: ['/images/products/social-studies-4.svg'],
    tags: ['textbook', 'primary', 'social studies', 'history'],
    format: 'Textbook',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '5',
    sku: 'REL-P5-005',
    isbn: '978-0-123456-05-6',
    title: 'Religious Studies - Primary 5',
    author: 'Rev. James Wilson',
    publisher: 'Faith Education Press',
    edition: '2024 Edition',
    grade: 'Primary 5',
    subject: 'Religious Studies',
    price: 1800,
    stock: 52,
    weight: 0.7,
    dimensions: { length: 25, width: 18, height: 1.5 },
    language: 'English',
    description: 'Religious education textbook promoting moral values and spiritual development for Primary 5 students.',
    images: ['/images/products/religious-education-3.svg'],
    tags: ['textbook', 'primary', 'religious studies', 'values'],
    format: 'Textbook',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: '6',
    sku: 'ART-P6-006',
    isbn: '978-0-123456-06-7',
    title: 'Creative Arts Workbook - Primary 6',
    author: 'Ms. Lisa Anderson',
    publisher: 'Creative Learning Press',
    edition: '2024 Edition',
    grade: 'Primary 6',
    subject: 'Creative Arts',
    price: 1600,
    stock: 65,
    weight: 0.6,
    dimensions: { length: 24, width: 17, height: 1.2 },
    language: 'English',
    description: 'Interactive workbook for creative arts including drawing, painting, and crafts for Primary 6 students.',
    images: ['/images/products/creative-arts-1.svg'],
    tags: ['workbook', 'primary', 'creative arts', 'activities'],
    format: 'Workbook',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  },
  {
    id: '7',
    sku: 'FRENCH-P1-007',
    isbn: '978-0-123456-07-8',
    title: 'French for Beginners - Primary 1',
    author: 'Mme. Sophie Dubois',
    publisher: 'Language Learning Press',
    edition: '2024 Edition',
    grade: 'Primary 1',
    subject: 'French',
    price: 2200,
    stock: 25,
    weight: 0.8,
    dimensions: { length: 26, width: 19, height: 1.8 },
    language: 'French',
    description: 'Beginner French textbook with audio support and interactive exercises for Primary 1 students.',
    images: ['/images/products/french-book-1.svg'],
    tags: ['textbook', 'primary', 'french', 'language'],
    format: 'Textbook',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: '8',
    sku: 'COMP-P4-008',
    isbn: '978-0-123456-08-9',
    title: 'Computer Studies - Primary 4',
    author: 'Mr. Robert Kim',
    publisher: 'Tech Education Press',
    edition: '2024 Edition',
    grade: 'Primary 4',
    subject: 'Computer Studies',
    price: 3000,
    salePrice: 2700,
    stock: 20,
    weight: 1.1,
    dimensions: { length: 29, width: 21, height: 2.3 },
    language: 'English',
    description: 'Modern computer studies textbook covering basic computing skills and digital literacy for Primary 4 students.',
    images: ['/images/products/computer-studies-2.svg'],
    tags: ['textbook', 'primary', 'computer studies', 'digital literacy'],
    format: 'Textbook',
    isActive: true,
    isFeatured: true,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: '9',
    sku: 'HOME-P5-009',
    isbn: '978-0-123456-09-0',
    title: 'Home Economics - Primary 5',
    author: 'Mrs. Patricia Brown',
    publisher: 'Life Skills Press',
    edition: '2024 Edition',
    grade: 'Primary 5',
    subject: 'Home Economics',
    price: 2000,
    stock: 35,
    weight: 0.9,
    dimensions: { length: 27, width: 20, height: 1.9 },
    language: 'English',
    description: 'Practical home economics textbook teaching life skills, nutrition, and household management for Primary 5 students.',
    images: ['/images/products/quantitative-reasoning-5.svg'],
    tags: ['textbook', 'primary', 'home economics', 'life skills'],
    format: 'Textbook',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25')
  },
  {
    id: '10',
    sku: 'PE-P6-010',
    isbn: '978-0-123456-10-1',
    title: 'Physical Education Guide - Primary 6',
    author: 'Coach Mark Davis',
    publisher: 'Sports Education Press',
    edition: '2024 Edition',
    grade: 'Primary 6',
    subject: 'Physical Education',
    price: 1500,
    stock: 40,
    weight: 0.5,
    dimensions: { length: 23, width: 16, height: 1.0 },
    language: 'English',
    description: 'Physical education guide with sports activities, fitness exercises, and health education for Primary 6 students.',
    images: ['/images/products/physical-education-4.svg'],
    tags: ['guide', 'primary', 'physical education', 'sports'],
    format: 'Reference',
    isActive: true,
    isFeatured: false,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: '11',
    sku: 'MATH-JSS1-011',
    isbn: '978-0-123456-11-2',
    title: 'Mathematics for JSS 1',
    author: 'Prof. Michael Chen',
    publisher: 'Math Excellence Publishers',
    edition: '2024 Edition',
    grade: 'JSS 1',
    subject: 'Mathematics',
    price: 3500,
    salePrice: 3200,
    stock: 25,
    weight: 1.3,
    dimensions: { length: 31, width: 23, height: 2.8 },
    language: 'English',
    description: 'Comprehensive mathematics textbook designed for Junior Secondary School 1 students with advanced concepts and practical applications.',
    images: ['/images/products/jss1 maths.png'],
    tags: ['textbook', 'jss', 'mathematics', 'secondary'],
    format: 'Textbook',
    isActive: true,
    isFeatured: true,
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  }
]

// Sample users
export const users: User[] = [
  {
    id: '1',
    email: 'john.doe@email.com',
    name: 'John Doe',
    phone: '+234-801-234-5678',
    role: 'customer',
    isEmailVerified: true,
    schoolAffiliation: 'St. Mary\'s Primary School',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    email: 'jane.smith@email.com',
    name: 'Jane Smith',
    phone: '+234-802-345-6789',
    role: 'customer',
    isEmailVerified: true,
    schoolAffiliation: 'Grace Academy',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '3',
    email: 'admin@faithlife.com',
    name: 'Admin User',
    phone: '+234-803-456-7890',
    role: 'super_admin',
    isEmailVerified: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Inquiry Types
export interface Inquiry {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'in_progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  updatedAt: Date
  assignedTo?: string
  notes?: string
}

// Sample inquiries with real-time data
export let inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+234-804-567-8901',
    subject: 'Book Availability Inquiry',
    message: 'Hi, I\'m looking for Mathematics textbooks for Primary 3. Do you have them in stock? Also, what\'s the delivery time to Lagos?',
    status: 'new',
    priority: 'medium',
    createdAt: new Date('2024-03-18T10:30:00'),
    updatedAt: new Date('2024-03-18T10:30:00')
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+234-805-678-9012',
    subject: 'Bulk Order Request',
    message: 'I need to order 50 copies of English Language books for Primary 1. Is there a discount for bulk orders? Can you provide a quote?',
    status: 'in_progress',
    priority: 'high',
    createdAt: new Date('2024-03-17T14:15:00'),
    updatedAt: new Date('2024-03-18T09:45:00'),
    assignedTo: 'admin@faithlife.com',
    notes: 'Contacted customer for additional details. Waiting for school confirmation.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    phone: '+234-806-789-0123',
    subject: 'Return Policy Question',
    message: 'I received a damaged book last week. What\'s your return policy and how do I initiate a return?',
    status: 'resolved',
    priority: 'medium',
    createdAt: new Date('2024-03-16T16:20:00'),
    updatedAt: new Date('2024-03-17T11:30:00'),
    assignedTo: 'admin@faithlife.com',
    notes: 'Replacement book sent. Customer satisfied with resolution.'
  },
  {
    id: '4',
    name: 'David Thompson',
    email: 'david.thompson@email.com',
    phone: '+234-807-890-1234',
    subject: 'New Product Request',
    message: 'Do you have any books for Computer Studies in Primary 2? My child\'s school is introducing this subject.',
    status: 'new',
    priority: 'low',
    createdAt: new Date('2024-03-18T08:45:00'),
    updatedAt: new Date('2024-03-18T08:45:00')
  }
]

// Sample orders with changeable statuses
export let orders: Order[] = [
  {
    id: '1',
    orderNumber: 'FL-2024-001',
    userId: '1',
    user: users[0],
    items: [
      {
        id: '1',
        orderId: '1',
        productId: '1',
        product: products[0],
        quantity: 2,
        price: 2200,
        total: 4400
      },
      {
        id: '2',
        orderId: '1',
        productId: '2',
        product: products[1],
        quantity: 1,
        price: 2800,
        total: 2800
      }
    ],
    subtotal: 7200,
    shipping: 500,
    discount: 0,
    total: 7700,
    status: 'confirmed',
    paymentStatus: 'paid',
    shippingMethod: 'delivery',
    shippingAddress: {
      id: '1',
      userId: '1',
      type: 'home',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+234-801-234-5678',
      street: '123 Main Street',
      city: 'Lagos',
      state: 'Lagos',
      postalCode: '100001',
      country: 'Nigeria',
      isDefault: true
    },
    trackingNumber: 'TRK-001-2024',
    notes: 'Please deliver after 3 PM',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
    estimatedDelivery: new Date('2024-03-20')
  },
  {
    id: '2',
    orderNumber: 'FL-2024-002',
    userId: '2',
    user: users[1],
    items: [
      {
        id: '3',
        orderId: '2',
        productId: '3',
        product: products[2],
        quantity: 1,
        price: 2900,
        total: 2900
      }
    ],
    subtotal: 2900,
    shipping: 0,
    discount: 0,
    total: 2900,
    status: 'processing',
    paymentStatus: 'paid',
    shippingMethod: 'pickup',
    pickupLocation: {
      id: '1',
      name: 'Faith Life Bookshop - Main Branch',
      address: '45 Education Street',
      city: 'Lagos',
      phone: '+234-804-567-8901',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      isActive: true
    },
    notes: 'Will pick up on Friday',
    createdAt: new Date('2024-03-16'),
    updatedAt: new Date('2024-03-16'),
    estimatedDelivery: new Date('2024-03-18')
  },
  {
    id: '3',
    orderNumber: 'FL-2024-003',
    userId: '1',
    user: users[0],
    items: [
      {
        id: '4',
        orderId: '3',
        productId: '8',
        product: products[7],
        quantity: 1,
        price: 2700,
        total: 2700
      },
      {
        id: '5',
        orderId: '3',
        productId: '9',
        product: products[8],
        quantity: 1,
        price: 2000,
        total: 2000
      }
    ],
    subtotal: 4700,
    shipping: 500,
    discount: 200,
    total: 5000,
    status: 'pending',
    paymentStatus: 'pending',
    shippingMethod: 'delivery',
    shippingAddress: {
      id: '1',
      userId: '1',
      type: 'home',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+234-801-234-5678',
      street: '123 Main Street',
      city: 'Lagos',
      state: 'Lagos',
      postalCode: '100001',
      country: 'Nigeria',
      isDefault: true
    },
    notes: 'Please include receipt',
    createdAt: new Date('2024-03-17'),
    updatedAt: new Date('2024-03-17')
  }
]

// Real-time event listeners
type EventCallback = (data: any) => void
const eventListeners: { [key: string]: EventCallback[] } = {}

export const subscribeToEvents = (eventType: string, callback: EventCallback) => {
  if (!eventListeners[eventType]) {
    eventListeners[eventType] = []
  }
  eventListeners[eventType].push(callback)
  
  // Return unsubscribe function
  return () => {
    const index = eventListeners[eventType].indexOf(callback)
    if (index > -1) {
      eventListeners[eventType].splice(index, 1)
    }
  }
}

const emitEvent = (eventType: string, data: any) => {
  if (eventListeners[eventType]) {
    eventListeners[eventType].forEach(callback => callback(data))
  }
}

// Functions to manage data with real-time updates
export const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
  const orderIndex = orders.findIndex(order => order.id === orderId)
  if (orderIndex !== -1) {
    orders[orderIndex].status = newStatus
    orders[orderIndex].updatedAt = new Date()
    
    // Emit real-time update
    emitEvent('orderStatusChanged', {
      orderId,
      newStatus,
      order: orders[orderIndex]
    })
    
    return orders[orderIndex]
  }
  return null
}

export const updatePaymentStatus = (orderId: string, newStatus: PaymentStatus) => {
  const orderIndex = orders.findIndex(order => order.id === orderId)
  if (orderIndex !== -1) {
    orders[orderIndex].paymentStatus = newStatus
    orders[orderIndex].updatedAt = new Date()
    
    // Emit real-time update
    emitEvent('paymentStatusChanged', {
      orderId,
      newStatus,
      order: orders[orderIndex]
    })
    
    return orders[orderIndex]
  }
  return null
}

export const addNewOrder = (order: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>) => {
  console.log('✅ Creating new order with', order.items?.length || 0, 'items')
  
  // Basic validation - only check for items
  if (!order.items || order.items.length === 0) {
    console.error('❌ Cannot create order without items')
    return null
  }
  
  const newOrder: Order = {
    ...order,
    id: (orders.length + 1).toString(),
    orderNumber: `FL-2024-${String(orders.length + 1).padStart(3, '0')}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  orders.push(newOrder)
  
  // Emit real-time update
  emitEvent('newOrder', newOrder)
  
  return newOrder
}

export const updateInquiryStatus = (inquiryId: string, newStatus: Inquiry['status'], notes?: string) => {
  const inquiryIndex = inquiries.findIndex(inquiry => inquiry.id === inquiryId)
  if (inquiryIndex !== -1) {
    inquiries[inquiryIndex].status = newStatus
    inquiries[inquiryIndex].updatedAt = new Date()
    if (notes) {
      inquiries[inquiryIndex].notes = notes
    }
    
    // Emit real-time update
    emitEvent('inquiryStatusChanged', {
      inquiryId,
      newStatus,
      inquiry: inquiries[inquiryIndex]
    })
    
    return inquiries[inquiryIndex]
  }
  return null
}

export const addNewInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt'>) => {
  console.log('✅ Creating new inquiry from:', inquiry.name)
  
  // Basic validation - only check for name and message
  if (!inquiry.name || !inquiry.message) {
    console.error('❌ Cannot create inquiry without name or message')
    return null
  }
  
  const newInquiry: Inquiry = {
    ...inquiry,
    id: (inquiries.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  inquiries.push(newInquiry)
  
  // Emit real-time update
  emitEvent('newInquiry', newInquiry)
  
  return newInquiry
}

export const updateProductStock = (productId: string, newStock: number) => {
  const productIndex = products.findIndex(product => product.id === productId)
  if (productIndex !== -1) {
    products[productIndex].stock = newStock
    products[productIndex].updatedAt = new Date()
    
    // Emit real-time update
    emitEvent('productStockChanged', {
      productId,
      newStock,
      product: products[productIndex]
    })
    
    return products[productIndex]
  }
  return null
}

export const getProductsByGrade = (grade: Grade) => {
  return products.filter(product => product.grade === grade)
}

export const getProductsBySubject = (subject: Subject) => {
  return products.filter(product => product.subject === subject)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured)
}

export const getOrdersByStatus = (status: OrderStatus) => {
  return orders.filter(order => order.status === status)
}

export const getOrdersByUser = (userId: string) => {
  return orders.filter(order => order.userId === userId)
}

export const getInquiriesByStatus = (status: Inquiry['status']) => {
  return inquiries.filter(inquiry => inquiry.status === status)
}

export const deleteOrder = (orderId: string) => {
  const orderIndex = orders.findIndex(order => order.id === orderId)
  if (orderIndex !== -1) {
    const deletedOrder = orders[orderIndex]
    
    // Preserve revenue from deleted order
    if (deletedOrder.paymentStatus === 'paid') {
      totalRevenue += deletedOrder.total
    }
    
    orders.splice(orderIndex, 1)
    
    // Emit real-time update
    emitEvent('orderDeleted', {
      orderId,
      deletedOrder,
      totalRevenue
    })
    
    return deletedOrder
  }
  return null
}

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.author.toLowerCase().includes(lowercaseQuery) ||
    product.subject.toLowerCase().includes(lowercaseQuery) ||
    product.grade.toLowerCase().includes(lowercaseQuery)
  )
}

// Revenue tracking for deleted orders
export let totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
