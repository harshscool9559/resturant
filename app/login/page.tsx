// "use client";

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import Link from "next/link";
// // 📌 Styled Components
// const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f3f4f6;
// `;

// const LoginBox = styled.div`
//   background: white;
//   padding: 32px;
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 16px;
// `;

// const InputField = styled.div`
//   position: relative;
//   margin-bottom: 16px;
//   width: 100%;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   border-radius: 6px;
//   border: 1px solid #d1d5db;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//     border-color: #0070f3;
//   }
// `;

// const PasswordToggle = styled.span`
//   position: absolute;
//   right: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const RememberForgot = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 14px;
//   margin-bottom: 16px;

//   a {
//     color: #0070f3;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #0070f3;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #005bb5;
//   }
// `;

// const SocialLogin = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const SocialButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   width: 100%;
//   padding: 12px;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background 0.3s ease;
//   color: white;

//   &:hover {
//     opacity: 0.9;
//   }

//   &.google {
//     background-color: #ffffff;
//     color: black;
//     border: 1px solid #d1d5db;
//   }

//   &.facebook {
//     background-color: #1877f2;
//   }
// `;
// import { useRouter } from 'next/navigation';
// const LoginPage = () => {
//   const router = useRouter();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const data={ email, password };
//   // console.log(data);
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//        credentials: 'include',
//     });

//     const data = await res.json();

//     if (res.ok) {
//       router.push('/');
//       router.refresh();
//     } else {
//       alert(data.message || 'Login failed');
//     }
//   };

//   return (
//     <LoginContainer>
//       <LoginBox>
//         <Title>Login</Title>
//         <form onSubmit={handleLogin}>
//           <InputField>
//             <Input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </InputField>

//           <InputField>
//             <Input
//               type={passwordVisible ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <PasswordToggle onClick={() => setPasswordVisible(!passwordVisible)} type="button">
//               {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
//             </PasswordToggle>
//           </InputField>

//           <RememberForgot>
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </RememberForgot>

//           <Button type="submit">Login</Button>

//           <SocialLogin>
//             <SocialButton className="google" type="button">
//               <FcGoogle size={20} /> Login with Google
//             </SocialButton>
//             <SocialButton className="facebook" type="button">
//               <FaFacebook size={20} /> Login with Facebook
//             </SocialButton>

//             <Button type="button">
//               <Link href="/signup">Signup</Link>
//             </Button>
//           </SocialLogin>
//         </form>
//       </LoginBox>
//     </LoginContainer>
//   );
// };

// export default LoginPage;
"use client";

import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Styled Components (same as your code)
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

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
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

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
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
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <PasswordToggle
              type="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputField>

          <RememberForgot>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </RememberForgot>

          <Button type="submit">Login</Button>

          <SocialLogin>
            <SocialButton className="google" type="button">
              <FcGoogle size={20} /> Login with Google
            </SocialButton>
            <SocialButton className="facebook" type="button">
              <FaFacebook size={20} /> Login with Facebook
            </SocialButton>

            <Button type="button">
              <Link href="/signup">Signup</Link>
            </Button>
          </SocialLogin>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

