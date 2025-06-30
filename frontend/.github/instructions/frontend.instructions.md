---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.
# Frontend Development Instructions

## Tech Stack
- React (Vite or Create React App)
- shadcn/ui components (https://ui.shadcn.com/)
- Axios or Fetch for API calls
- Use the backend API documented in `doc/api-docs.md`

## Getting Started
1. **Clone the repository and install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Set up shadcn/ui:**
   - Follow the [shadcn/ui installation guide](https://ui.shadcn.com/docs/installation/react) to add the component library to your project.

3. **Configure API Base URL:**
   - If your backend runs on a different port or host, set up a `.env` file in `frontend`:
     ```env
     REACT_APP_API_URL=http://localhost:5000/api
     ```

4. **Review Backend API:**
   - All available endpoints and request/response formats are in `../backend/doc/api-docs.md`.

## Suggested Folder Structure
```
src/
  components/    # Reusable UI components (Navbar, ProductCard, etc.)
  pages/         # Page components (Home, ProductDetail, Cart, Login, Register, Orders)
  api/           # API utility functions (e.g., api/products.js)
  hooks/         # Custom React hooks (optional)
  utils/         # Utility functions (optional)
  App.js
  index.js
```

## Core Features to Implement
- **Authentication:** Register, Login, store JWT in localStorage, attach token to protected requests.
- **Product Listing:** Fetch and display all products on the homepage.
- **Product Detail:** Show product info, add to cart button.
- **Cart:** View, add, and remove items. Sync with backend cart endpoints.
- **Orders:** Place order from cart, view order history.
- **Navigation:** Navbar with links to Home, Cart, Orders, Login/Register or Profile.
- **Responsive Design:** Use shadcn/ui for modern, mobile-friendly UI.

## API Usage Example (with Axios)
```js
import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchProducts = () => API.get('/products');
export const login = (data) => API.post('/auth/login', data);
// ...other endpoints
```

## Tips
- Use React Context or Redux for global state (auth, cart) if needed.
- Protect routes (cart, orders) for authenticated users only.
- Use shadcn/ui components for all forms, lists, and navigation.
- Refer to `../backend/doc/api-docs.md` for all request/response details.

---

**Start by building the authentication and product listing pages, then proceed to cart and orders.**
