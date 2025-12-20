# 📚 BookCourier – Library-to-Home Delivery System (Client)

🔗 **Live Site:** https://your-live-site-link.netlify.app  
🔗 **Server Repository:** https://github.com/your-username/book-courier-server  
🔗 **Client Repository:** https://github.com/your-username/book-courier-client  

---

## 🧠 Project Purpose

**BookCourier** is a modern library-to-home book delivery system that allows users to browse books from libraries, place delivery requests, manage orders, and make payments — all without physically visiting the library.

This project is designed to demonstrate **real-world MERN stack frontend skills**, focusing on:
- Clean UI/UX
- Role-based dashboards
- Secure authentication
- Dynamic data handling
- Production-ready deployment

---

## ✨ Key Features

### 🌐 General Features
- Fully responsive design (mobile, tablet, desktop)
- Light / Dark theme toggle
- Modern UI with consistent spacing & alignment
- Animated sections using AOS
- Skeleton loaders for better UX

---

### 🔐 Authentication
- Email & Password authentication
- Google social login
- Firebase authentication
- Persistent login (no redirect on refresh)
- Protected routes using Firebase JWT token

---

### 🏠 Home Page
- Banner with **3 sliders** (book image, title, description, CTA)
- Latest Books section (last 4–6 added books)
- Coverage section with **interactive map** (React Leaflet)
- “Why Choose BookCourier” section
- Additional custom-designed sections
- Smooth animations

---

### 📚 All Books
- Card-based book listing
- Search books by name
- Sort books by price
- Only **published books** are visible
- Click card → Book Details page

---

### 📖 Book Details
- Complete book information
- Wishlist button
- Rating & review system (only ordered users)
- “Order Now” modal with:
  - Name (readonly)
  - Email (readonly)
  - Phone number
  - Address

---

### 🛒 Order System
- Orders saved with:
  - Order status: `pending`, `shipped`, `delivered`, `cancelled`
  - Payment status: `unpaid`, `paid`

---

## 👤 User Dashboard

- **My Orders**
  - View all orders in table
  - Cancel order (only if pending)
  - Pay Now button for unpaid orders

- **My Wishlist**
  - View wishlisted books

- **Invoices**
  - Payment ID
  - Amount
  - Date
  - Book name (optional)

- **My Profile**
  - View & update name and profile image

---

## 📚 Librarian Dashboard

- **Add Book**
  - Book name, author, image, price
  - Status: published / unpublished

- **My Books**
  - View & edit books
  - Unpublish books (no delete)

- **Orders**
  - View orders for own books
  - Update order status:
    - pending → shipped → delivered
  - Cancel orders if needed

---

## 🛠️ Admin Dashboard

- **All Users**
  - Make Admin / Librarian

- **Manage Books**
  - Publish / unpublish books
  - Delete books (also removes related orders)

- **My Profile**
  - Update admin profile info

---

## 🧪 Technology Stack

### 🚀 Frontend
- **React 19**
- **Vite**
- **React Router v7**
- **Tailwind CSS**
- **DaisyUI**
- **TanStack Query**
- **Axios**
- **Firebase Authentication**
- **React Hook Form**
- **AOS (Animation)**
- **Swiper.js**
- **React Leaflet**
- **Day.js**
- **SweetAlert2**
- **React Hot Toast**
- **Theme Change**

---

## 📦 NPM Packages Used

```json
@tanstack/react-query
axios
firebase
react-router
react-hook-form
react-icons
swiper
aos
react-leaflet
dayjs
sweetalert2
react-hot-toast
theme-change
tailwindcss
daisyui
