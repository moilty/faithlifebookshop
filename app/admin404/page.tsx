'use client'

import { useState, useEffect } from 'react'
import { 
  EnvelopeIcon, 
  ShoppingBagIcon, 
  ChatBubbleLeftRightIcon,
  EyeIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

interface Order {
  id: string
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: Array<{
    productTitle: string
    quantity: number
    price: number
  }>
  total: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'failed'
  shippingMethod: 'delivery' | 'pickup'
  shippingAddress?: string
  createdAt: string
  notes?: string
}

interface Enquiry {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'closed'
  createdAt: string
}

interface Message {
  id: string
  name: string
  email: string
  phone: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'orders' | 'enquiries' | 'messages'>('orders')
  const [orders, setOrders] = useState<Order[]>([])
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  // Mock data - in real app, this would come from your API
  useEffect(() => {
    // Mock orders
    setOrders([
      {
        id: '1',
        orderNumber: 'ORD-2024-001',
        customerName: 'John Doe',
        customerEmail: 'john.doe@email.com',
        customerPhone: '+234 801 234 5678',
        items: [
          { productTitle: 'New General Mathematics for Junior Secondary Schools Book 1', quantity: 2, price: 2000 },
          { productTitle: 'New Oxford English Book 1', quantity: 1, price: 2400 }
        ],
        total: 6400,
        status: 'pending',
        paymentStatus: 'paid',
        shippingMethod: 'delivery',
        shippingAddress: '123 Main Street, Lagos, Nigeria',
        createdAt: '2024-01-15T10:30:00Z',
        notes: 'Please deliver after 6 PM'
      },
      {
        id: '2',
        orderNumber: 'ORD-2024-002',
        customerName: 'Sarah Johnson',
        customerEmail: 'sarah.j@email.com',
        customerPhone: '+234 802 345 6789',
        items: [
          { productTitle: 'Basic Science and Technology for Primary 3', quantity: 1, price: 3200 }
        ],
        total: 3200,
        status: 'confirmed',
        paymentStatus: 'paid',
        shippingMethod: 'pickup',
        createdAt: '2024-01-14T14:20:00Z'
      },
      {
        id: '3',
        orderNumber: 'ORD-2024-003',
        customerName: 'Michael Chen',
        customerEmail: 'michael.chen@email.com',
        customerPhone: '+234 803 456 7890',
        items: [
          { productTitle: 'Social Studies for Primary Schools Book 4', quantity: 3, price: 1800 },
          { productTitle: 'Quantitative Reasoning for Primary 5', quantity: 2, price: 2900 }
        ],
        total: 11200,
        status: 'processing',
        paymentStatus: 'pending',
        shippingMethod: 'delivery',
        shippingAddress: '456 Oak Avenue, Abuja, Nigeria',
        createdAt: '2024-01-13T09:15:00Z'
      }
    ])

    // Mock enquiries
    setEnquiries([
      {
        id: '1',
        name: 'David Wilson',
        email: 'david.wilson@email.com',
        phone: '+234 804 567 8901',
        subject: 'Bulk Order Inquiry',
        message: 'I would like to place a bulk order for 50 copies of Mathematics textbooks for our school. Can you provide a quote and delivery timeline?',
        status: 'new',
        createdAt: '2024-01-15T11:45:00Z'
      },
      {
        id: '2',
        name: 'Grace Adebayo',
        email: 'grace.adebayo@email.com',
        phone: '+234 805 678 9012',
        subject: 'Book Availability',
        message: 'Do you have the latest edition of the English textbook for JSS 2? I need it urgently for my daughter.',
        status: 'read',
        createdAt: '2024-01-14T16:30:00Z'
      },
      {
        id: '3',
        name: 'Robert Smith',
        email: 'robert.smith@email.com',
        phone: '+234 806 789 0123',
        subject: 'Wholesale Pricing',
        message: 'I run a bookstore and would like to know about your wholesale pricing for educational books.',
        status: 'replied',
        createdAt: '2024-01-13T13:20:00Z'
      }
    ])

    // Mock messages
    setMessages([
      {
        id: '1',
        name: 'Emma Thompson',
        email: 'emma.thompson@email.com',
        phone: '+234 807 890 1234',
        message: 'I received my order but one of the books was damaged. How can I get a replacement?',
        status: 'new',
        createdAt: '2024-01-15T12:00:00Z'
      },
      {
        id: '2',
        name: 'James Brown',
        email: 'james.brown@email.com',
        phone: '+234 808 901 2345',
        message: 'Thank you for the excellent service! The books arrived in perfect condition and on time.',
        status: 'read',
        createdAt: '2024-01-14T10:15:00Z'
      },
      {
        id: '3',
        name: 'Lisa Davis',
        email: 'lisa.davis@email.com',
        phone: '+234 809 012 3456',
        message: 'I have a question about the return policy. Can I return a book if it\'s not suitable for my child\'s grade level?',
        status: 'replied',
        createdAt: '2024-01-13T15:45:00Z'
      }
    ])
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      processing: 'bg-purple-100 text-purple-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      new: 'bg-red-100 text-red-800',
      read: 'bg-blue-100 text-blue-800',
      replied: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
      paid: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-4 w-4" />
      case 'confirmed':
      case 'processing':
      case 'shipped':
        return <CheckCircleIcon className="h-4 w-4" />
      case 'delivered':
        return <CheckCircleIcon className="h-4 w-4" />
      case 'cancelled':
        return <XCircleIcon className="h-4 w-4" />
      default:
        return <ClockIcon className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Faith Life Bookshop Management</p>
            </div>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-NG', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingBagIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enquiries</p>
                <p className="text-2xl font-bold text-gray-900">{enquiries.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <EnvelopeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Messages</p>
                <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'orders'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ShoppingBagIcon className="h-5 w-5 inline mr-2" />
                Orders ({orders.length})
              </button>
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'enquiries'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 inline mr-2" />
                Enquiries ({enquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'messages'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <EnvelopeIcon className="h-5 w-5 inline mr-2" />
                Messages ({messages.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{order.orderNumber}</h3>
                            <p className="text-sm text-gray-600">{order.customerName}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                              <span className="ml-1">{order.status}</span>
                            </span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.paymentStatus)}`}>
                              {order.paymentStatus}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <p>Total: {formatPrice(order.total)} • {order.items.length} items</p>
                          <p>Created: {formatDate(order.createdAt)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Enquiries Tab */}
            {activeTab === 'enquiries' && (
              <div className="space-y-4">
                {enquiries.map((enquiry) => (
                  <div key={enquiry.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{enquiry.subject}</h3>
                            <p className="text-sm text-gray-600">{enquiry.name} • {enquiry.email}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(enquiry.status)}`}>
                            {enquiry.status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <p className="line-clamp-2">{enquiry.message}</p>
                          <p className="mt-1">Received: {formatDate(enquiry.createdAt)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{message.name}</h3>
                            <p className="text-sm text-gray-600">{message.email}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                            {message.status}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <p className="line-clamp-2">{message.message}</p>
                          <p className="mt-1">Received: {formatDate(message.createdAt)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">{selectedOrder.orderNumber}</h4>
                <p className="text-sm text-gray-600">Created: {formatDate(selectedOrder.createdAt)}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Customer Information</h5>
                  <div className="space-y-1 text-sm">
                    <p><UserIcon className="h-4 w-4 inline mr-2" />{selectedOrder.customerName}</p>
                    <p><EnvelopeIcon className="h-4 w-4 inline mr-2" />{selectedOrder.customerEmail}</p>
                    <p><PhoneIcon className="h-4 w-4 inline mr-2" />{selectedOrder.customerPhone}</p>
                    {selectedOrder.shippingAddress && (
                      <p><MapPinIcon className="h-4 w-4 inline mr-2" />{selectedOrder.shippingAddress}</p>
                    )}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Order Status</h5>
                  <div className="space-y-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                      {getStatusIcon(selectedOrder.status)}
                      <span className="ml-1">{selectedOrder.status}</span>
                    </span>
                    <br />
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.paymentStatus)}`}>
                      Payment: {selectedOrder.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Order Items</h5>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.productTitle} (x{item.quantity})</span>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-medium">
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span>{formatPrice(selectedOrder.total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedOrder.notes && (
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Notes</h5>
                  <p className="text-sm text-gray-600">{selectedOrder.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Enquiry Details</h3>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">{selectedEnquiry.subject}</h4>
                <p className="text-sm text-gray-600">Received: {formatDate(selectedEnquiry.createdAt)}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Contact Information</h5>
                  <div className="space-y-1 text-sm">
                    <p><UserIcon className="h-4 w-4 inline mr-2" />{selectedEnquiry.name}</p>
                    <p><EnvelopeIcon className="h-4 w-4 inline mr-2" />{selectedEnquiry.email}</p>
                    <p><PhoneIcon className="h-4 w-4 inline mr-2" />{selectedEnquiry.phone}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Status</h5>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedEnquiry.status)}`}>
                    {selectedEnquiry.status}
                  </span>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Message</h5>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{selectedEnquiry.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Details Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Message Details</h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Message from {selectedMessage.name}</h4>
                <p className="text-sm text-gray-600">Received: {formatDate(selectedMessage.createdAt)}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Contact Information</h5>
                  <div className="space-y-1 text-sm">
                    <p><UserIcon className="h-4 w-4 inline mr-2" />{selectedMessage.name}</p>
                    <p><EnvelopeIcon className="h-4 w-4 inline mr-2" />{selectedMessage.email}</p>
                    <p><PhoneIcon className="h-4 w-4 inline mr-2" />{selectedMessage.phone}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Status</h5>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedMessage.status)}`}>
                    {selectedMessage.status}
                  </span>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Message</h5>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
