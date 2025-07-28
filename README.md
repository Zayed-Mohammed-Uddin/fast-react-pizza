# 🍕 Fast React Pizza Co.

A modern pizza ordering application built with React, Redux Toolkit, and React Router v6. This project demonstrates advanced React patterns, state management, and modern development practices.

## ✨ Features

- **🛒 Shopping Cart**: Add, remove, and manage pizza quantities
- **📋 Order Management**: Create orders with form validation
- **👤 User Management**: Username persistence with Redux
- **🔍 Menu Browsing**: Browse available pizzas with real-time data
- **📍 Geolocation**: Get user's address (optional)
- **⚡ Fast Loading**: Optimized with Vite build tool

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router v6 (Data Router)
- **Styling**: Tailwind CSS v4
- **Forms**: React Router Form Actions
- **Font**: Google Fonts (Roboto)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-pizza
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── features/
│   ├── cart/           # Shopping cart functionality
│   ├── menu/           # Pizza menu and items
│   ├── order/          # Order creation and management
│   └── user/           # User profile and settings
├── services/           # API calls and external services
├── store/              # Redux store configuration
├── ui/                 # Reusable UI components
└── utils/              # Helper functions and utilities
```

## 🎯 Key Features Explained

### Redux State Management
- **Cart Slice**: Manages shopping cart items, quantities, and totals
- **User Slice**: Handles user information and preferences
- **Selectors**: Optimized data extraction from the store

### React Router Data Features
- **Loaders**: Pre-fetch data before route components render
- **Actions**: Handle form submissions and data mutations
- **Error Boundaries**: Graceful error handling per route

### Form Validation
- **Real-time validation**: Client-side and server-side validation
- **Custom validators**: Phone number, name, and address validation
- **Error display**: User-friendly error messages

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern pizza delivery apps
- React Router documentation for data router patterns
- Redux Toolkit for simplified state management
- Tailwind CSS for rapid UI development
