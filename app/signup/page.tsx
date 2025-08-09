"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

// 📌 Styled Components
const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

const SignupBox = styled.div`
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

const SignupPage = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: 'include',
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid JSON response");
      }

      const data = await res.json();
     
      if (res.ok) {
        router.push("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong!");
    }
  }; // ← ✅ CLOSE handleSignup properly

  return (
    <SignupContainer>
      <SignupBox>
        <Title>Create Account</Title>
        <form onSubmit={handleSignup}>
          <InputField>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </InputField>

          <InputField>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </InputField>

          <InputField>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </InputField>

          <InputField>
            <Input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <PasswordToggle
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputField>

          <Button type="submit">Sign Up</Button>

          <SocialLogin>
            <SocialButton type="button" className="google">
              <FcGoogle size={20} /> Sign up with Google
            </SocialButton>
            <SocialButton type="button" className="facebook">
              <FaFacebook size={20} /> Sign up with Facebook
            </SocialButton>
          </SocialLogin>
        </form>
      </SignupBox>
    </SignupContainer>
  );
};

export default SignupPage;
