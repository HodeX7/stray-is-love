import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay is Love",
  description:
    "Welcome to the Stray Animals Hub! A place where you can show your love and affection for stray animals. Join our community, share stories, and find resources to help stray animals in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="root bg-white w-full h-full relative flex justify-center">
          <Navbar />

          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
