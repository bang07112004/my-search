import Footer from "@/components/Footer";
import TopButton from "@/components/TopButton";
import "./globals.css";

export const metadata = {
  title: "My Search",
  description: "Searching things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}
