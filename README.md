# ShopNest — Full-Stack E-commerce Application

A modern Trello-assignment style e-commerce app built with React/Vite, Node.js/Express and MongoDB.

## Real features
- Product catalog with search, category filters and sorting
- Product stock visibility and low-stock states
- Registration/login with hashed passwords and JWT
- Persistent cart using localStorage
- Coupon `SAVE10` with 10% discount
- Checkout and order creation with COD
- Optional real Stripe Checkout integration via server-side secret key
- Orders stored in MongoDB with status lifecycle
- Admin product CRUD/archive and order status APIs
- Product reviews and aggregate ratings
- Responsive mobile-first UI
- Secure server-side price/stock calculation

## Run locally
### Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set MongoDB + JWT secret.
4. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. `npm run dev`

Open `http://localhost:5173`.

## Demo catalog
After backend starts, call `POST /api/seed` once to create sample products. The sample images use Unsplash URLs.

## Stripe
Set `STRIPE_SECRET_KEY` on the backend and choose `paymentMethod: stripe` from a custom checkout client. Stripe Checkout is created server-side so the secret key is never exposed to the browser.

## Suggested production deployment
Frontend: Vercel. Backend: Render. Database: MongoDB Atlas. Set `VITE_API_URL`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, and Stripe secrets in the hosting provider's environment variables.
