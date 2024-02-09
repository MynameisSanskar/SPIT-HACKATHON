import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuthContext } from "../hooks/useAuthContext";

function Page() {
  const {user}=useAuthContext();
  return (
    <div >
      <Navbar style={{ position: "sticky", zIndex: 50 }} />
      <Outlet />
     {(user && !user.userType==="Admin") && <Footer />}
    </div>
  );
}

export default Page;
