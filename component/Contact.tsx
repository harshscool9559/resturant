"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

// 📌 Styled Components
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

const LoginBox = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputField = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 16px;

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  color: white;

  &:hover {
    opacity: 0.9;
  }

  &.google {
    background-color: #ffffff;
    color: black;
    border: 1px solid #d1d5db;
  }

  &.facebook {
    background-color: #1877f2;
  }
`;
const Input1= styled.input`
  width: 100%;
  padding: 12px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;


const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 8px;
`;

import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fname, lname, email, msg }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("Failed to submit form");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Contact us</Title>
        <form onSubmit={handleLogin}>
          <InputField>
            <Input
              type="text"
              placeholder="First-name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </InputField>
          <InputField>
            <Input
              type="text"
              placeholder="Last-name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </InputField>
          <InputField>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputField>
          <InputField>
            <Label>Message</Label>
            <Input1
              type="text"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </InputField>
          <Button type="submit">Submit</Button>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
