import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthContext from "./contextProviders/AuthContext";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return <RouterProvider router={router} />;
}
const queryClint=new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClint}>
        <AppWrapper />
      </QueryClientProvider>
      <Toaster />
    </AuthContext>
  </StrictMode>
);
