# 🛒 Product Management System

A simple **Product Management System** built with **Laravel 12**, **Inertia.js**, **React**, and **TailwindCSS**.  
This project demonstrates how to build a modern CRUD application with pagination, flash messages, and a clean UI.

---

## 🚀 Features

- ✅ Create, Read, Update, and Delete (CRUD) products  
- ✅ Responsive product listing table  
- ✅ Flash messages for success & error feedback  
- ✅ Pagination for handling large data sets  
- ✅ Clean UI using TailwindCSS  
- ✅ Built with Laravel + React (Inertia.js)  

---

## 🛠️ Tech Stack

- **Backend**: [Laravel 12](https://laravel.com/)  
- **Frontend**: [React](https://reactjs.org/) via [Inertia.js](https://inertiajs.com/)  
- **Styling**: [TailwindCSS](https://tailwindcss.com/)  
- **Database**: MySQL (can be swapped with PostgreSQL/SQLite)  

---

## 📂 Installation

### 1. Clone the repository
git clone https://github.com/athumaniMfaume/Product-management-system.git
cd product-management-system


2. Install dependencies
bash
Copy code
composer install
npm install && npm run dev


3. Configure environment
Copy .env.example to .env and update your database credentials:
cp .env.example .env
php artisan key:generate


4. Run migrations
php artisan migrate

5. Start the development servers
php artisan serve
npm run dev


📌 Roadmap
 Add product search & filtering

 Add authentication & role-based access

 Add product categories

 Add API endpoints for external integration

🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

