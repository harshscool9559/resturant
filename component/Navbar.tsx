// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import styled from "styled-components";
// import { Menu, X } from "lucide-react"; // Mobile menu icons
// import { useEffect } from "react";
// const NavbarContainer = styled.nav`
//   position: fixed;
//   top: 1;
//   left: 0;
//   width: 100%;
//   background-color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   z-index: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px 24px;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   a {
//     text-decoration: none;
//     color: #333;
//     font-weight: 500;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #0070f3;
//     }
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Logo = styled.div`
//   flex-grow: 1;
//   text-align: center;

//   img {
//     height: 40px;
//   }
// `;

// const RightSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const MenuButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;



// const MobileMenu = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== 'isOpen'
// })<{ isOpen: boolean }>`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     position: fixed;
//     top: 0;
//     right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
//     width: 250px;
//     height: 100vh;
//     background: white;
//     box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//     transition: right 0.3s ease-in-out;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     gap: 15px;

//     a {
//       text-decoration: none;
//       color: #333;
//       font-size: 18px;
//       font-weight: 500;

//       &:hover {
//         color: #0070f3;
//       }
//     }
//   }
// `;




// import { useRouter } from "next/navigation";

// export default function Navbar({ username }: { username: string | null }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = async () => {
//     await fetch("/api/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//     router.refresh(); // server se fresh username milega
//   };
 
//   return (
//     <>
//       <NavbarContainer>
//         {/* Left Links */}
//         <NavLinks>
//           <Link href="/">HOMEPAGE</Link>
//           <Link href="/menu">MENU</Link>
//           <Link href="/contact">CONTACT</Link>
//         </NavLinks>

//         {/* Logo */}
//         <Logo>
//           <img
//             src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
//             width="50"
//             height="50"
//             alt="Logo"
//           />
//         </Logo>

//         {/* Right Section */}
//         <RightSection>
//           {username ? (
//             <>
//               <span>Hello, {username}</span>
//               <button onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <Link href="/login">LOGIN</Link>
//           )}
//           {username&&(<Link href="/cart">CART</Link>)}
//         </RightSection>

//         {/* Menu Button */}
//         <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </MenuButton>
//       </NavbarContainer>

//       {/* Mobile Menu */}
//       <MobileMenu isOpen={menuOpen}>
//         <MenuButton onClick={() => setMenuOpen(false)}>
//           <X size={24} />
//         </MenuButton>
//         <Link href="/" onClick={() => setMenuOpen(false)}>
//           HOMEPAGE
//         </Link>
//         <Link href="/menu" onClick={() => setMenuOpen(false)}>
//           MENU
//         </Link>
//         <Link href="/contact" onClick={() => setMenuOpen(false)}>
//           CONTACT
//         </Link>

//         {username ? (
//           <div className="px-4 py-2 text-sm">Hello, {username}</div>
//         ) : (
//           <Link href="/login" onClick={() => setMenuOpen(false)}>
//             LOGIN
//           </Link>
//         )}
        
//               {username &&(
//          <Link href="/cart" onClick={() => setMenuOpen(false)}>
//           CART
//         </Link>
//         ) }
//          {/* <Link href="/cart" onClick={() => setMenuOpen(false)}>
//           CART
//         </Link> */}
//       </MobileMenu>
//     </>
//   );
// }


"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #0070f3;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #dc2626;
  }
`;

const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 250px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    padding: 20px;
    gap: 15px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 18px;
      font-weight: 500;

      &:hover {
        color: #0070f3;
      }
    }
  }
`;

export default function Navbar({ username }: { username: string | null }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });
    router.refresh();
  };

  return (
    <>
      <NavbarContainer>
        <NavLinks>
          <Link href="/">HOMEPAGE</Link>
          <Link href="/menu">MENU</Link>
          <Link href="/contact">CONTACT</Link>
        </NavLinks>

        <Link href="/">
          <Logo>
            <Image
              src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
              width={50}
              height={50}
              alt="Logo"
            />
          </Logo>
        </Link>

        <RightSection>
          {username ? (
            <>
              <span>Hello, {username}</span>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <Link href="/login">LOGIN</Link>
          )}
          {username && <Link href="/cart">CART</Link>}
        </RightSection>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
      </NavbarContainer>

      <MobileMenu isOpen={menuOpen}>
        <MenuButton onClick={() => setMenuOpen(false)}>
          <X size={24} />
        </MenuButton>
        <Link href="/" onClick={() => setMenuOpen(false)}>HOMEPAGE</Link>
        <Link href="/menu" onClick={() => setMenuOpen(false)}>MENU</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>

        {username ? (
          <>
            <div>Hello, {username}</div>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>CART</Link>
          </>
        ) : (
          <Link href="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link>
        )}
      </MobileMenu>
    </>
  );
}
