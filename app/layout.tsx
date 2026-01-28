import "./globals.css";
import Navbar from "./components/Navbar/navbar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
