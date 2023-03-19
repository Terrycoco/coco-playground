//THIS FILE DEFINES BASIC HTML FOR WHOLE SITE
//YOU CAN OVERWRITE ANY METADATA IN INDIVIDUAL ROUTES ALSO

import "./globals.css";
import Header from "@/components/layout/Header.js";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";

export const metadata = {
  title: "Theme Playground",
  description: "Theme Playground By Coco",
};

export default function RootLayout({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <html lang="en">
      <head>
        <title>Coco Theme Playground</title>
      </head>
      <Provider store={store}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
