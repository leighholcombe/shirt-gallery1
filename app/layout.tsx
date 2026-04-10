import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Leigh's Awesome Shirt Gallery</title>
      </head>
      <body
        className="antialiased font-sans"
      >
        <h1 className="flex px-8 text-3xl">Leigh's Awesome Shirt Gallery</h1>
        {children}
      </body>
    </html>
  );
}
