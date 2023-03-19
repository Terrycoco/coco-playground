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
      <body>{children}</body>
    </html>
  );
}
