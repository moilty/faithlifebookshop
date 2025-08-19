# Faith Life Bookshop

Official bookstore for Faith Life School - A comprehensive e-commerce platform for textbooks and learning materials from Creche to Primary 6.

## 🎯 Project Overview

Faith Life Bookshop is a modern, full-stack e-commerce website designed specifically for educational institutions. It provides a seamless shopping experience for parents, teachers, and school administrators to purchase textbooks, workbooks, and learning materials.

### Key Features

- **Multi-role User System**: Customer, School Admin, Shop Staff, and Super Admin roles
- **Grade-based Navigation**: Easy browsing by grade level (Creche to Primary 6)
- **Class Booklists**: Order complete booklists for specific classes
- **Flexible Delivery**: School pickup, home delivery, and courier options
- **Admin Dashboard**: Comprehensive inventory and order management
- **Mobile-First Design**: Fully responsive across all devices
- **Payment Integration**: Multiple payment methods (Card, Bank Transfer, Mobile Money)
- **Real-time Inventory**: Stock management and low-stock alerts
- **Email & SMS Notifications**: Order updates and reminders

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **State Management**: React Query, Context API
- **Authentication**: JWT with role-based access control
- **Database**: PostgreSQL (recommended)
- **Payment**: Stripe/Paystack/Flutterwave
- **Email**: SendGrid/Mailgun
- **SMS**: Twilio
- **Deployment**: Vercel/Netlify + managed backend

## 📁 Project Structure

```
faith-life-bookshop/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage components
│   ├── products/         # Product-related components
│   ├── auth/             # Authentication components
│   ├── admin/            # Admin dashboard components
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── api/                  # API routes
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Payment gateway account (Stripe/Paystack)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/faith-life-bookshop.git
   cd faith-life-bookshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/faithlife_bookshop"
   
   # Authentication
   JWT_SECRET="your-jwt-secret"
   
   # Payment Gateway
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   
   # Email
   SENDGRID_API_KEY="your-sendgrid-key"
   
   # SMS
   TWILIO_ACCOUNT_SID="your-twilio-sid"
   TWILIO_AUTH_TOKEN="your-twilio-token"
   ```

4. **Database Setup**
   ```bash
   # Run migrations
   npm run db:migrate
   
   # Seed initial data
   npm run db:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📋 Features Breakdown

### Customer Features
- **User Registration & Login**: Email verification, password reset
- **Product Browsing**: Filter by grade, subject, format, price
- **Shopping Cart**: Persistent cart, guest checkout
- **Order Management**: Track orders, view history
- **Wishlist**: Save items for later
- **Address Management**: Multiple delivery addresses
- **Payment**: Multiple payment methods
- **Notifications**: Email and SMS updates

### Admin Features
- **Dashboard**: Sales analytics, inventory overview
- **Product Management**: CRUD operations, bulk import/export
- **Order Processing**: Status updates, shipping labels
- **Inventory Management**: Stock alerts, purchase orders
- **Class Booklists**: Upload and manage official booklists
- **Customer Management**: View profiles, order history
- **Reports**: Sales reports, inventory valuation
- **Marketing**: Coupon management, email campaigns

### School Admin Features
- **Booklist Management**: Upload and approve class booklists
- **Bulk Ordering**: Coordinate class-wide purchases
- **Teacher Discounts**: Manage educator benefits

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Trust and professionalism
- **Secondary**: Gray (#64748b) - Neutral and clean
- **Accent**: Yellow (#eab308) - Attention and highlights
- **Success**: Green (#22c55e) - Positive actions
- **Warning**: Orange (#f59e0b) - Cautions
- **Error**: Red (#ef4444) - Errors and alerts

### Typography
- **Primary Font**: Inter - Clean and readable
- **Display Font**: Poppins - Headings and emphasis

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Product cards, info cards
- **Forms**: Input fields, validation, error states
- **Navigation**: Header, footer, breadcrumbs

## 🔒 Security Features

- **HTTPS Enforcement**: All traffic encrypted
- **JWT Authentication**: Secure token-based auth
- **Role-Based Access Control**: Granular permissions
- **Input Validation**: Server-side validation
- **Rate Limiting**: API endpoint protection
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Content Security Policy
- **CSRF Protection**: Cross-site request forgery prevention

## 📱 Mobile Responsiveness

The application is built with a mobile-first approach:
- **Breakpoints**: 320px, 375px, 768px, 1024px, 1440px
- **Touch-Friendly**: Optimized for touch interactions
- **Performance**: Optimized images, lazy loading
- **Accessibility**: WCAG 2.1 AA compliance

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Railway/Heroku)
```bash
# Set environment variables
# Deploy database
# Deploy API
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: React Query caching, CDN
- **Bundle Analysis**: Webpack bundle analyzer
- **Lighthouse Score**: Target 90+ performance

## 🧪 Testing

```bash
# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

## 📈 Analytics & Monitoring

- **Google Analytics 4**: User behavior tracking
- **Error Monitoring**: Sentry integration
- **Performance Monitoring**: Core Web Vitals
- **Uptime Monitoring**: Health checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: faithlifebookshop@gmail.com
- **Phone**: +234 813 062 1314
- **WhatsApp**: +234 813 062 1314

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Basic e-commerce functionality
- ✅ User authentication
- ✅ Product catalog
- ✅ Shopping cart
- ✅ Checkout process

### Phase 2 (Next)
- 🔄 Advanced admin dashboard
- 🔄 Mobile app (React Native)
- 🔄 Advanced analytics
- 🔄 Multi-language support

### Phase 3 (Future)
- 📋 AI-powered recommendations
- 📋 Voice search
- 📋 AR book preview
- 📋 Blockchain integration

---

**Built with ❤️ for Faith Life School** 