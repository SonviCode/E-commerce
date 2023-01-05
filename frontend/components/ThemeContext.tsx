// import React, { createContext, useState } from "react";

// export const ThemeContext = createContext<A>(defaultValue: A);

// export default function ThemeContextProvider(props: any) {
//   const [darkMode, setDarkMode] = useState(false);

//   const changeDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   let colorBackground;
//   let colorText;
//   let colorDeco;
//   let colorFooter;

//   if (darkMode) {
//     document.querySelector("html")!.classList.add("dark");
//     colorBackground = "black";
//     colorText = "white";
//     colorDeco = "blue";
//     colorFooter = "footerBlack";
//   } else {
//     document.querySelector("html")!.classList.remove("dark");
//     colorBackground = "white";
//     colorText = "black";
//     colorDeco = "orange";
//     colorFooter = "footerWhite";
//   }

//   return (
//     <ThemeContext.Provider
//       value={{
//         changeDarkMode,
//         darkMode,
//         colorBackground,
//         colorText,
//         colorFooter,
//         colorDeco,
//       }}
//     >
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }
