import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
