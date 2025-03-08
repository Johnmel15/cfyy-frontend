import { ReactNode } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { FloatingFAQ } from "@/modules/Faq";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <FloatingFAQ />
    </div>
  );
}
