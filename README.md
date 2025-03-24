# DentalCare Pro 🦷

A modern clinic management system for dentists, built with **React**, **TypeScript**, and **styled-components**.
This project showcases professional frontend architecture, advanced state management, and Git workflow — demonstrating senior-level development skills.

---

## 🚀 Tech Stack

- **Frontend Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** styled-components + ThemeProvider
- **Routing:** React Router v6
- **Forms:** React Hook Form + Zod
- **State Management:** Redux Toolkit (or Zustand)
- **HTTP Client:** Axios
- **Authentication:** Firebase / Clerk (planned)
- **Testing:** Vitest, React Testing Library, Cypress (E2E)
- **Documentation:** Storybook (planned)
- **Version Control:** Git + GitHub (branch-based workflow)

---

## 📁 Project Structure

```
src/
├── assets/                # Static assets
├── components/            # Shared UI components
├── features/              # Domain features (appointments, patients...)
├── hooks/                 # Custom React hooks
├── layouts/               # Page layouts and wrappers
├── pages/                 # Routed views
├── router/                # React Router config
├── services/              # Axios instances & API handlers
├── store/                 # Redux or Zustand setup
├── styles/                # Global styles & theme setup
├── types/                 # Shared TypeScript types
├── utils/                 # Helper functions
└── main.tsx               # Entry point
```

---

## ✅ Key Features (MVP)

- Authentication with role-based access (admin / assistant)
- Calendar dashboard to view and manage appointments
- Patient record management + medical history
- Appointment creation and editing
- Payment tracking (with status: paid / pending)
- Reports & statistics (income, appointments, cancellations)
- Fully typed codebase with reusable UI components
- GitHub Flow with branches, PRs, and clean commit messages

---

## 📸 Screenshots (coming soon)

---

## 🛠️ Getting Started

```bash
# Clone the repo
$ git clone https://github.com/your-username/dentalcare-pro.git
$ cd dentalcare-pro

# Install dependencies
$ npm install

# Start the development server
$ npm run dev
```

---

## 📌 Git Workflow

- `main` – stable production-ready code
- `dev` – development branch
- `feature/*` – separate branch per feature
- Pull Requests from `feature/*` → `dev` with linked issues (optional)

---

## 📄 License

This project is open-source and available under the MIT License.

---

> Created with love by Shimon Filler ♥

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
