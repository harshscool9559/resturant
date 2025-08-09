"use client";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "styled-components";
import styled, { createGlobalStyle } from "styled-components";
import Notification from "@/component/Notification";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geist = Geist({ subsets: ["latin"] });

// 🌍 Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${geist.style.fontFamily}, sans-serif;
    background-color: #f3f4f6; /* Tailwind's bg-gray-100 */
    color: #111827; /* Tailwind's text-gray-900 */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
  }
`;

// 🎨 Theme Configuration (Optional)
const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#374151",
    background: "#f3f4f6",
    text: "#111827",
  },
};

// 📌 Styled Components
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  background-color: #3b82f6; /* Tailwind's bg-blue-500 */
  color: white;
  text-align: center;
  padding: 8px 0;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  top: 48px; /* Adjust based on NotificationWrapper height */
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 49;
`;

const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  padding: 24px;
  text-align: center;
  margin-top: 120px; /* ✅ Fix: Prevent overlap with fixed navbar & notification */
`;
import { CartProvider } from "@/context/CartContext";
export default function Layout({ children, username }: { children: React.ReactNode; username: string | null }) {
  return (
    <html lang="en">
      <body>
       <CartProvider>
       <ThemeProvider theme={theme}>
          <GlobalStyle />
          <LayoutWrapper>

            {/* Notification Bar */}
            <NotificationWrapper>
              <Notification />
            </NotificationWrapper>

            {/* Navbar */}
            <NavbarWrapper>
              <Navbar username={username}/>
            </NavbarWrapper>

            {/* Main Content (Now Visible) */}
            <MainContent>{children}</MainContent>

            {/* Footer */}
            <Footer />

          </LayoutWrapper>
        </ThemeProvider>
       </CartProvider>
      </body>
    </html>
  );
}
