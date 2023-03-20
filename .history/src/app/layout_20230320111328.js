//THIS FILE DEFINES BASIC HTML FOR WHOLE SITE
//YOU CAN OVERWRITE ANY METADATA IN INDIVIDUAL ROUTES ALSO
"use client";
import { Providers } from "./store/provider";
import "./globals.css";
import Header from "@/components/layout/Header.js";
import Drawer from "@/components/layout/Drawer.js";
import Footer from "@/components/layout/Footer";
import ScreenEmulator from "@/components/layout/ScreenEmulator";

//can't use metadata on files that use client
// export const metadata = {
//   title: "Theme Playground",
//   description: "Theme Playground By Coco",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Coco Theme Playground</title>
      </head>

      <body>
        <Providers>
          <>
            <Header />
            <ScreenEmulator>
              {children}
              <Footer />
            </ScreenEmulator>
          </>
        </Providers>
      </body>
    </html>
  );
}
