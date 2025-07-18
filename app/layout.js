import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gemutly Clone",
  description: "Simple redesign with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-[url('/mainbg.jpg')] opacity-50 fixed -z-10 inset-0" fill />
        {/*header*/}
        <main>{children}</main>

        <footer className="bg-orange-300 py-12 bg-opacity-10">
          <div>
            <p>Made by praneeth</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
