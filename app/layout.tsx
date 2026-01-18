import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/Carousel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Carousel/>
        
        {children}
      </body>
    </html>
  );
}
