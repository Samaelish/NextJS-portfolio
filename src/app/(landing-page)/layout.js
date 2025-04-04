import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Портфолио Семён NextJS",
  description: "Портфолио Frontend-разработчика Семёна Денисова",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased bg-gray-900 text-slate-50`}
      >
        <Navbar />
        <div className="mt-7 md:mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
