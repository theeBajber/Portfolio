import "./globals.css";

export const metadata = {
  title: "Faraj | Portfolio",
  description: "Creative developer & designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen w-full text-gray-900 bg-gradient-to-br from-[#174e4f] to-[#f0fe93] flex justify-center items-center overflow-hidden">
        {children}
      </body>
    </html>
  );
}
