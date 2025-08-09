📌 Project Purpose

The Hotel Booking Platform offers users a smooth and reliable experience for browsing, booking, and reviewing hotel rooms. With secure authentication and a user-friendly interface, the platform makes it simple to explore top-rated rooms, manage bookings, and post authentic reviews.

✨ Key Features

🔐 User Authentication

Email/password-based authentication with validation

Social login (Google or GitHub)

Toast/sweet alert after login or registration

🧭 Navigation

Accessible links to Home, Rooms, and My Bookings

My Bookings page protected by private routes

🏠 Home Page

Responsive banner with slider (Title, Description, Button to Rooms page)

Map location using react-leaflet

Featured Rooms section (Top-rated 6 rooms from DB)

Testimonial/Review carousel from real users (latest first)

Special Offers popup/modal

2 additional attractive sections (e.g. Services, Amenities)

🛏️ Rooms Page

Displays all rooms from DB in card view

Click on card to go to Room Details page

Filter rooms by price range (server-side filtering)

🏡 Room Details Page

Shows detailed room info, price, image, status

Room reviews listed (latest first)

Booking modal with:

Room summary

Date selection (single day)

Confirm booking button

Book button redirects to login if not logged in

Room becomes unavailable after booking

📆 My Bookings Page

Lists current user's bookings in table format

Allows:

Cancel Booking (with confirmation & room status update)

Update Date (modal with date picker + toast)

Post Review (modal with rating, comment, timestamp)

⭐ Review System

Users can only review rooms they booked

Modal with:

Read-only username

Rating (1–5), comment

Current timestamp auto-saved

All reviews shown on Room Details page

🔐 JWT Authentication

Token created & stored on login

Private routes protected with token validation

Optional: 401 / 403 responses handled gracefully

🚫 Booking Cancellation

Cancel only allowed until 1 day before booked date

Uses moment.js to compare dates

Room status becomes available again after cancel

📦 Implemented Packages

react-router-dom

axios

react-hot-toast

sweetalert2

react-datepicker

react-icons

react-leaflet

framer-motion

jsonwebtoken

moment

helmet

🌍 404 Page

Creative image/GIF

"Back to Home" button

🔒 Security

Firebase config secured in .env

MongoDB URI hidden in server .env

🧪 Deployment Checklist

Server works perfectly on Vercel/Render

CORS/404/504 issues fixed

Firebase domain added

Private routes persist after refresh

Reloading any route doesn't break

✅ Commit History

Client: 15+ meaningful commits with proper messages

Server: 8+ meaningful commits with proper messages

🧠 Strategy Tips

Use components & routes modularly

Focus on UI/UX consistency (colors, padding, alignment)

Use Toast for success/error feedback

Avoid duplicate designs from previous projects

🔄 This project demonstrates real-world skills: full-stack development, JWT, secure auth, MongoDB data handling, private routing, and conditional logic with clean UI/UX design.