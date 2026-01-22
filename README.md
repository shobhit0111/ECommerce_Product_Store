# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Data Source
Product data is fetched from a public dummy API and sanitized on the frontend
to remove all branding, logos, and real product identifiers.

## Live Features
🧩 Core Functionality
 
1. Product listing with category switching

2. Smooth auto-scroll to product section

3. Add / Remove products from cart

4. Cart dropdown with live updates

5. Cart badge showing total items

6. Button state sync (Add to Cart ↔ Added)

7. Sticky header with scroll effect

8. Responsive footer & header

✨ UI / UX Highlights (USP)

## Sticky Header

1. Stays visible on scroll

2. Search input, brand title, cart & auth CTA

3. Responsive mobile layout

## Animated Hero Section

1. Clickable category cards

2. Smooth auto-scroll to product grid

## Cart System (Context API)

1. Centralized cart state

2. Quantity management

3. Real-time cart badge

4. Dropdown cart preview

5. Remove items instantly

## Fashion Image Slider

1. Smooth infinite horizontal animation

2. Uses local assets (no external dependency)

## Background Visuals

1. Subtle fashion background / animation layer

2. Foreground content stays readable

## Fully Responsive

1. Desktop / Tablet / Mobile optimized

2. CSS Grid + Flexbox

3. Mobile-first adjustments

## Tech Stack

1. React 18

2. Vite

3. Context API (Global Cart State)

4. CSS3 (Grid, Flexbox, Animations)

5. DummyJSON API (Sanitized product data)

## Installation & Setup
1️⃣ Clone the Repository
- git clone <your-repo-url>
- cd frontend-assignment-react

2️⃣ Install Dependencies
- npm install

3️⃣ Environment Variables

- Create a .env file in the root directory:

- VITE_API_BASE_URL=https://dummyjson.com


⚠️ Note: In Vite, environment variables must start with VITE_

4️⃣ Run the Development Server
- npm run dev


## App will run on:

http://localhost:5173

📁 Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── FashionSlider.jsx
│   ├── FashionBackground.jsx
│   ├── Skeleton.jsx
│   └── EmptyState.jsx
│
├── context/
│   └── CartContext.jsx
│
├── assets/
│   └── fashion/ (local images)
│
├── css/
│   └── *.css
│
├── App.jsx
├── main.jsx
└── index.css

🔗 Data Source

- Product data is fetched from DummyJSON API:

- Category-based products

- Sanitized on frontend

- No branding, no logos, no real product identity

Example endpoint:

/products/category/womens-dresses

🧠 State Management

Cart state handled via React Context API

Single source of truth

Automatic UI sync across:

Header

Product Cards

Cart Dropdown

📱 Responsive Design
Device	Support
Desktop	✅
Tablet	✅
Mobile	✅
🔒 API Safety

API base URL stored in .env

No hardcoded endpoints

Easily switchable for backend integration

📈 Future Enhancements (Optional)

Product detail page

Cart page with checkout flow

Authentication

Persistent cart (localStorage)

Payment gateway integration

Search & filter functionality

👨‍💻 Author

Shobhit Bhatnagar
Frontend Developer – React / React Native
