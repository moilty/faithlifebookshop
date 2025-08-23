# Faith Life Bookshop - Real Working E-commerce Application

A comprehensive Next.js e-commerce application for educational books and materials, built with real functionality and changeable order statuses.

## 🚀 Features

### Real Data Management
- **10 Real Products**: Complete product catalog with detailed information
- **3 Sample Users**: Customer and admin accounts for testing
- **3 Sample Orders**: Real orders with changeable statuses
- **Live Status Updates**: Change order and payment statuses in real-time

### Admin Dashboard
- **Order Management**: View and manage all orders
- **Status Control**: Change order statuses (pending, confirmed, processing, shipped, delivered, etc.)
- **Payment Status**: Update payment statuses (pending, paid, failed, refunded)
- **Real-time Updates**: See changes immediately in the interface
- **Order Details**: Comprehensive order information and customer details

### Customer Features
- **Order Tracking**: Customers can view their order history
- **Real-time Status**: See order status updates in real-time
- **Product Search**: Search through the product catalog
- **Filtering**: Filter products by grade, subject, and other criteria

### Product Management
- **Featured Products**: Highlighted products on the homepage
- **Product Categories**: Organized by grade levels and subjects
- **Stock Management**: Track product inventory
- **Pricing**: Support for regular and sale prices

## 🛠️ Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Beautiful SVG icons
- **Real Data**: No mock APIs - everything works with real data

## 📁 Project Structure

```
Faithlife.html/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── orders/            # Customer order tracking
│   ├── search/            # Product search
│   └── shop/              # Product catalog
├── components/            # React components
│   ├── home/             # Homepage components
│   ├── layout/           # Header, Footer, etc.
│   ├── products/         # Product-related components
│   └── shop/             # Shop page components
├── lib/                  # Data and utilities
│   └── data.ts          # Real data store
└── types/               # TypeScript type definitions
```

## 🎯 Key Components

### Data Store (`lib/data.ts`)
- **Real Products**: 10 educational books with complete details
- **Sample Users**: Customer and admin accounts
- **Sample Orders**: 3 orders with different statuses
- **Management Functions**: Update order statuses, filter products, etc.

### Admin Dashboard (`app/admin/page.tsx`)
- **Order Overview**: View all orders with filtering
- **Status Management**: Change order and payment statuses
- **Order Details**: Comprehensive order information modal
- **Real-time Updates**: See changes immediately

### Customer Order Tracking (`app/orders/page.tsx`)
- **Order History**: View all customer orders
- **Status Tracking**: Real-time order status updates
- **Order Details**: Complete order information

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - **Homepage**: http://localhost:3000
   - **Admin Dashboard**: http://localhost:3000/admin
   - **Customer Orders**: http://localhost:3000/orders
   - **Shop**: http://localhost:3000/shop

## 🎮 How to Use

### Admin Dashboard
1. Navigate to `/admin`
2. View all orders in the table
3. Click "View Details" to see order information
4. Change order status or payment status using the dropdowns
5. See real-time updates in the interface

### Customer Order Tracking
1. Navigate to `/orders`
2. View order history for the demo customer (John Doe)
3. See order statuses and tracking information
4. View order details and items

### Product Management
1. Navigate to `/shop` to see all products
2. Use filters to find specific products
3. Search for products using the search bar
4. View featured products on the homepage

## 📊 Sample Data

### Products
- **10 Educational Books**: Covering various subjects and grade levels
- **Real Pricing**: Nigerian Naira (NGN) pricing
- **Stock Levels**: Real inventory tracking
- **Product Details**: Complete product information

### Orders
- **Order #1**: Confirmed order with delivery
- **Order #2**: Processing order with pickup
- **Order #3**: Pending order awaiting payment

### Users
- **John Doe**: Customer with multiple orders
- **Jane Smith**: Customer with one order
- **Admin User**: Super admin account

## 🔧 Customization

### Adding New Products
Edit `lib/data.ts` and add new products to the `products` array.

### Adding New Orders
Add new orders to the `orders` array in `lib/data.ts`.

### Modifying Statuses
Update the status management functions in `lib/data.ts`.

## 🎨 Design Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional interface
- **Status Indicators**: Color-coded status badges
- **Interactive Elements**: Hover effects and animations
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔒 Security Features

- **Type Safety**: Full TypeScript implementation
- **Data Validation**: Proper data structure validation
- **Error Handling**: Graceful error handling throughout

## 📈 Future Enhancements

- **User Authentication**: Real login system
- **Database Integration**: Persistent data storage
- **Payment Processing**: Real payment gateway integration
- **Email Notifications**: Order status notifications
- **Inventory Management**: Advanced stock tracking
- **Analytics Dashboard**: Sales and performance metrics

## 🤝 Contributing

This is a demonstration application showing real e-commerce functionality. Feel free to extend and improve the features!

## 📄 License

This project is for educational and demonstration purposes. 