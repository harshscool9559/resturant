// "use client";

// import { menu } from "@/data";
// import Link from "next/link";
// import React from "react";
// import styled from "styled-components";
// // type Category = {
// //   id: string | number;
// //   slug: string;
// //   img: string;
// //   color: string;
// //   title: string;
// //   desc: string;
// // };
// const MenuContainer = styled.div`
//   padding: 16px;
//   height: calc(100vh - 6rem);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
//   text-decoration:none;

//   @media (min-width: 768px) {
//     height: calc(100vh - 9rem);
//     flex-direction: row;
//     justify-content: center;
//   }
// `;

// const CategoryCard = styled(Link)<{ bgImage: string }>`
//   width: 100%;
//   height: 33vh;
//   background-image: url(${(props) => props.bgImage});
//   background-size: cover;
//   background-position: center;
//   padding: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   transition: transform 0.3s ease-in-out;
//  text-decoration:none;
//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (min-width: 768px) {
//     height: 50vh;
//   }
// `;

// const CategoryContent = styled.div<{ textColor: string }>`
//   width: 50%;
//   color: ${(props) => props.textColor};
// `;

// const CategoryTitle = styled.h1`
//   text-transform: uppercase;
//   font-weight: bold;
//   font-size: 24px;
//  text-decoration:none;
//   @media (min-width: 1280px) {
//     font-size: 32px;
//   }
// `;

// const CategoryDesc = styled.p`
//   font-size: 14px;
//   margin: 16px 0;
// `;

// const ExploreButton = styled.button<{ bgColor: string; textColor: string }>`
//   background-color: ${(props) => props.bgColor};
//   color: ${(props) => props.textColor};
//   padding: 8px 16px;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.3s ease;

//   &:hover {
//     opacity: 0.8;
//   }

//   @media (max-width: 768px) {
//     padding: 6px 12px; /* Adjust padding for smaller screens */
//     font-size: 12px;
//   }
// `;


// const MenuPage = () => {
//   return (
//     <MenuContainer>
//       {menu.map((category) => (
//         <CategoryCard 
//           href={`/menu/${category.slug}`} 
//           key={category.id} 
//           bgImage={category.img}
//         >
//           <CategoryContent textColor={category.color}>
//             <CategoryTitle>{category.title}</CategoryTitle>
//             <CategoryDesc>{category.desc}</CategoryDesc>
//             <ExploreButton 
//               bgColor={category.color} 
//               textColor={category.color === "black" ? "white" : "red"}
//             >
//               Explore
//             </ExploreButton>
//           </CategoryContent>
//         </CategoryCard>
//       ))}
//     </MenuContainer>
//   );
// };

// export default MenuPage;

"use client";

import { menu } from "@/data";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

// // Define a type for category items
// type Category = {
//   id: number;
//   slug: string;
//   title: string;
//   desc?: string;
//   img: string; // Not optional here
//   color: string;
// };


const MenuContainer = styled.div`
  padding: 16px;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-decoration:none;

  @media (min-width: 768px) {
    height: calc(100vh - 9rem);
    flex-direction: row;
    justify-content: center;
  }
`;

const CategoryCard = styled(Link)<{ bgImage: string }>`
  width: 100%;
  height: 33vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;
  text-decoration:none;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 50vh;
  }
`;

const CategoryContent = styled.div<{ textColor: string }>`
  width: 50%;
  color: ${(props) => props.textColor};
`;

const CategoryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  text-decoration:none;

  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;

const CategoryDesc = styled.p`
  font-size: 14px;
  margin: 16px 0;
`;

const ExploreButton = styled.button<{ bgColor: string; textColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 6px 12px; /* Adjust padding for smaller screens */
    font-size: 12px;
  }
`;

type Category = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;  // make img optional
  color: string;
};
const MenuPage: React.FC = () => {
  return (
    <MenuContainer>
      {menu.map((category: Category) => (
        <CategoryCard 
          href={`/menu/${category.slug}`} 
           key={category.id} 
           bgImage={category.img ?? '/default-image.png'}>
          
          <CategoryContent textColor={category.color}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryDesc>{category.desc}</CategoryDesc>
            <ExploreButton 
              bgColor={category.color} 
              textColor={category.color === "black" ? "white" : "red"} 
            >
              Explore
            </ExploreButton>
          </CategoryContent>
        </CategoryCard>
      ))}
    </MenuContainer>
  );
};

export default MenuPage;
