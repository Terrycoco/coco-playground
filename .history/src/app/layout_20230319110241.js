export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
