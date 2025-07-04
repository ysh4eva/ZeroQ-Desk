Here’s a clean and professional **README.md** you can use for your project repository:

---

# 🚀 ZeroQ — AI-Powered Ticket Management System

ZeroQ is an AI-driven ticket creation and management platform designed for both **clients** and **admins**. It helps streamline customer issue handling, reduce resolution time, and provide AI-based policy or SOP recommendations.

---

## ✨ Features

* 📝 **Ticket Creation**: Clients can easily raise tickets linked to their company.
* 🗃️ **Ticket Storage**: All tickets are securely stored in MongoDB with unique tracking IDs.
* 👩‍💻 **Admin Dashboard**: Admins can view, filter, and manage all incoming tickets.
* 🔄 **Status Tracking**: Tickets move through statuses like `unresolved`, `in_progress`, `resolved`, and `rejected`.
* 🤖 **AI Integration (Planned)**: Auto-suggest solutions based on company SOPs, manuals, and policies.

---

## 🛠 Tech Stack

| Frontend           | Backend                      | Database      | Styling                          |
| ------------------ | ---------------------------- | ------------- | -------------------------------- |
| React (Next.js 14) | Node.js (Next.js API Routes) | MongoDB Atlas | CSS / SCSS / Tailwind (optional) |

---

## 🚧 Project Structure

```
/src
 ┣ /app
 ┃ ┣ /api              # API routes (ticket creation, fetching)
 ┃ ┣ /components       # Reusable components (Header, Dropdown, etc.)
 ┃ ┣ /lib              # Dummy data, constants, helpers
 ┃ ┣ /models           # Mongoose models
 ┃ ┣ /styles           # Global & SCSS styles
 ┃ ┣ /pages            # Tickets, Dashboard, etc.
```

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```
   git clone https://github.com/yourusername/zeroq.git
   cd zeroq
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file:

   ```
   MONGO_URI=your-mongodb-connection-string
   ```

4. **Run the Development Server**

   ```
   npm run dev
   ```

5. **Access the App**
   Visit: `http://localhost:3000`

---

## 📄 Sample Users (for future login)

| Role   | Email                                           | Password |
| ------ | ----------------------------------------------- | -------- |
| Admin  | [admin@zeroq.com](mailto:admin@zeroq.com)       | admin123 |
| Client | [john@abc.com](mailto:john@abc.com) (ABC Corp)  | abc123   |
| Client | [sarah@xyz.com](mailto:sarah@xyz.com) (XYZ Ltd) | xyz123   |

---

## 📝 Roadmap

* [x] Ticket creation and storage
* [x] Admin and client views
* [ ] AI-based suggestion engine (OpenAI or local model)
* [ ] Role-based authentication
* [ ] Email notifications

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📧 Contact

Built by **Vyshnavi Mudigonda**
📩 [vyshnavi.mudigonda@gmail.com](mailto:vyshnavi.mudigonda@gmail.com)

---

