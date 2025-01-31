"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import BetweenComponent from "./components/BetweenComponent";
import Campaings from "./components/Campaings";
import LoginRegisterComponent from "./components/LoginRegisterComponent";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TuguAnimation from "./components/TuguAnimation";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loggedinUser = useSelector((state) => state.user.user._id);
  const router = useRouter();


  useEffect(() => {
    if (!loggedinUser) {
      router.push("/login");
    }
  }, [loggedinUser, router]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("There is no token");
        }

        const response = await fetch("/api/current-user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Couldn't fetch the user data.");
        }

        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserData();
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <TuguAnimation></TuguAnimation>
      </div>
    );
  }

  if (error) return <p>Hata: {error}</p>;

  return (
    <div>
      <ToastContainer autoClose={3000} position="top-right" />
      <div className="flex flex-col">
        <Header />
        <FeaturedProducts />
        <BetweenComponent />
        <Campaings />
        <LoginRegisterComponent />
      </div>
    </div>
  );
}
