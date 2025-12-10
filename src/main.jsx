import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Router'
import AOS from "aos";
import "aos/dist/aos.css";


function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return <RouterProvider router={router} />;
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppWrapper/>
    {/* <RouterProvider router={router}/> */}
  </StrictMode>
)
