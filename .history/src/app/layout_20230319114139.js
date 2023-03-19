//THIS FILE DEFINES BASIC HTML FOR WHOLE SITE
//YOU CAN OVERWRITE ANY METADATA IN INDIVIDUAL ROUTES ALSO
import css from "./globals.css";

export const metadata = {
  title: "Theme Playground",
  description: "Theme Playground By Coco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Coco Theme Playground</title>
      </head>
      <body className="">{children}</body>
    </html>
  );
}
