"use client";
import { Facebook,Twitter ,Instagram} from "lucide-react";
import React from "react";
import styled from "styled-components";

// 📌 Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #111827; /* Tailwind's bg-gray-900 */
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #60a5fa; /* Tailwind's text-blue-400 */
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Navigation Links */}
      <FooterLinks>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </FooterLinks>

      {/* Social Media Icons */}
      <SocialIcons>
      <Facebook className="w-6 h-6 text-blue-500" />
        <Twitter className="w-6 h-6 text-blue-500"/>
        <Instagram className="w-6 h-6 text-blue-500"/>
      </SocialIcons>

      {/* Copyright */}
      <Copyright>© {new Date().getFullYear()} MyWebsite. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
