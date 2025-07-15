// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Prasanna Patil | Developer • AI Enthusiast • Hackathon Finalist 🧠",
  description:
    "🚀 Passionate Flutter & Full-Stack Developer | Finalist at SIH & GeekVishwa | Built AI-powered fintech and insurance platforms | Solved 350+ DSA problems on LeetCode.",
  openGraph: {
    title: "Prasanna Patil | Developer • AI Enthusiast • Hackathon Finalist 🧠",
    description:
      "🚀 Flutter & React Dev | Built AI Accountant & DigiClaim platforms | Finalist at Smart India Hackathon & GeekVishwa | 3x Hackathon Topper | LeetCode 350+ DSA problems solved.",
    url: "https://prasannapatil.dev",
    siteName: "Prasanna Patil Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prasanna Patil - Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Patil | Developer • AI Enthusiast • Hackathon Finalist 🧠",
    description:
      "AI-powered app builder | Smart India Hackathon Finalist | Built fintech + insurance systems | React, Flutter, LangChain, Node.js | DSA + Innovation Lover.",
    images: ["/og.png"],
    creator: "@prasannazzz",
    site: "@prasannazzz",
  },
  metadataBase: new URL("https://prasannapatil.dev"),
  alternates: {
    canonical: "https://prasannapatil.dev",
  },
  keywords: [
    "Prasanna Patil",
    "Flutter Developer",
    "React Developer",
    "AI Developer",
    "LangChain Developer",
    "Node.js Developer",
    "Smart India Hackathon",
    "DSA LeetCode",
    "Hackathon Finalist",
    "Personal Finance App",
    "Insurance Automation",
    "Full Stack Developer",
    "VIIT Pune",
    "JEE Topper",
    "Tech Community India",
  ],
  authors: [{ name: "Prasanna Patil", url: "https://prasannapatil.dev" }],
  creator: "Prasanna Patil",
  publisher: "Prasanna Patil",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "pinterest-media": "/og.png",
    "pinterest-description":
      "Flutter + React Dev | Finalist at Smart India Hackathon | Built AI-powered platforms | 350+ DSA LeetCode problems solved.",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Prasanna Patil",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/og.png",
    "theme-color": "#000000",
    "msapplication-navbutton-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8CXGRC7T09"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8CXGRC7T09');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import "./globals.css";
// import React from "react";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Prasanna Patil | Passionate Developer. Designer. Hustler. 🤍",
//   description:
//     "🙌 I build & teach AI and Blockchain stuff | ❇️ 3+ years of Tech Experience | 🤖 Teaching Cloud Native + Agentic AI to 1,500+ students, and managing a 30k+ tech community at GIAIC.",

//   openGraph: {
//     title: "Asharib Ali | Passionate Developer. Designer. Manager. 🤍",
//     description:
//       "🙌 I build & teach AI and Blockchain stuff | ❇️ 3+ years of Tech Experience | 🤖 Teaching Cloud Native + Agentic AI to 1,500+ students, and managing a 30k+ tech community at GIAIC.",
//     url: "https://asharib.xyz",
//     siteName: "Asharib Ali Portfolio",
//     images: [
//       {
//         url: "/og.png",
//         width: 1200,
//         height: 630,
//         alt: "Asharib Ali - AI & Blockchain Developer Portfolio",
//         type: "image/png",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//     countryName: "Pakistan",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Asharib Ali | Passionate Developer. Designer. Manager. 🤍",
//     description:
//       "🙌 I build & teach AI and Blockchain stuff | ❇️ 3+ years of Tech Experience | 🤖 Teaching Cloud Native + Agentic AI to 1,500+ students, and managing a 30k+ tech community at GIAIC.",
//     images: ["/og.png"],
//     creator: "@0xAsharib",
//     site: "@0xAsharib",
//   },

//   metadataBase: new URL("https://asharib.xyz"),
//   alternates: {
//     canonical: "https://asharib.xyz",
//   },

//   keywords: [
//     "Asharib Ali",
//     "AI Engineer",
//     "Blockchain Developer",
//     "Full Stack Developer",
//     "Agentic AI",
//     "Cloud Native",
//     "Top Pakistan Developer",
//     "Tech Teacher",
//     "AI Education",
//     "Blockchain Education",
//     "Tech Community",
//     "Programming Instructor",
//     "Open Source",
//     "GIAIC",
//     "PIAIC",
//   ],
//   authors: [{ name: "Asharib Ali", url: "https://asharib.xyz" }],
//   creator: "Asharib Ali",
//   publisher: "Asharib Ali",

//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   other: {
//     "pinterest-media": "/og.png",
//     "pinterest-description":
//       "🙌 I build & teach AI and Blockchain stuff | ❇️ 3+ years of Tech Experience | 🤖 Teaching Cloud Native + Agentic AI to 1,500+ students, and managing a 30k+ tech community at GIAIC.",

//     "apple-mobile-web-app-capable": "yes",
//     "apple-mobile-web-app-status-bar-style": "black-translucent",
//     "apple-mobile-web-app-title": "Asharib Ali",

//     "msapplication-TileColor": "#000000",
//     "msapplication-TileImage": "/og.png",

//     "theme-color": "#000000",
//     "msapplication-navbutton-color": "#000000",
//   },
// };

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <Script
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=G-8CXGRC7T09"
//       ></Script>
//       <Script id="google-analytics">
//         {`
//    window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-8CXGRC7T09');
//   `}
//       </Script>
//       <body>{children}</body>
//     </html>
//   );
// }
