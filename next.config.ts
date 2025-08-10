// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   reactStrictMode: true,
// //   compiler: {
// //     styledComponents: true,
// //   },
// // };

// // export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["png.pngtree.com"],
  },
};

module.exports = nextConfig;
