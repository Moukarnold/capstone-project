import "./globals.css";

export const metadata = {
  title: "Tongue Twister",
  description: "For improove your speaking skills",
  keywords: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
