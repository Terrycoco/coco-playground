//THIS FILE DEFINES BASIC HTML FOR WHOLE SITE
//YOU CAN OVERWRITE ANY METADATA IN INDIVIDUAL ROUTES ALSO
"use client";
import { Providers } from "@/store/provider";
import { ViewportProvider } from "@/context/ViewportContext";

import "./globals.css";
import Header from "@/components/layout/Header.js";
import Drawer from "@/components/layout/Drawer.js";
import FormController from "@/components/forms/FormController";
import Footer from "@/components/layout/Footer";
import ScreenEmulator from "@/components/layout/ScreenEmulator";
import { fonts } from "@/fonts/allFonts";

//can't use metadata on files that use client
// export const metadata = {
//   title: "Theme Playground",
//   description: "Theme Playground By Coco",
// };

export default function RootLayout({ children }) {
  console.log("allFonts:", fonts);
  return (
    <html lang="en">
      <head>
        <title>Coco Theme Playground</title>
      </head>

      <body>
        <Providers>
          <ViewportProvider>
            <>
              <Header />
              <Drawer>
                <FormController />
              </Drawer>
              <ScreenEmulator>
                {children} {/* page goes here */}
                <Footer />
              </ScreenEmulator>
            </>
          </ViewportProvider>
        </Providers>
      </body>
    </html>
  );
}
