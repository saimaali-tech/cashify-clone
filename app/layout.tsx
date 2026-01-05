import "./globals.css";
import Navbar from "./components/Navbar";
import menu from "./components/Menu"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <Menu/> */}
        {children}
      </body>
    </html>
  );
}
