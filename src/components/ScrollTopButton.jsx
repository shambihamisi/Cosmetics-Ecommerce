import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== "/" || !visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="fixed bottom-6 right-6 z-30 h-12 w-12 rounded-full bg-brown text-white text-xl flex items-center justify-center shadow-lg hover:scale-105 transition"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollTopButton;