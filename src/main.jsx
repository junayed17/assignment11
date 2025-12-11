import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Router'
import AOS from "aos";
import "aos/dist/aos.css";
import AuthContext from './context/AuthContext'
import { Toaster } from 'react-hot-toast'


function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return <RouterProvider router={router} />;
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <AppWrapper />
      <Toaster />
    </AuthContext>
    {/* <RouterProvider router={router}/> */}
  </StrictMode>
);
