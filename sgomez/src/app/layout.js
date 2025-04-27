import "@/styles/globals.css";

export const metadata = {
  title: "Santiago Gómez de la Torre Romero | Frontend Developer en Santander | Portfolio",
  description: "Frontend Developer especializado en React y Next.js. Desarrollador web con experiencia en proyectos frontend y habilidades técnicas. Portfolio profesional basado en Santander, España.",
  keywords: "desarrollador frontend Santander, frontend developer Santander, desarrollador react, react developer, desarrollador nextjs, nextjs developer, portfolio desarrollador, developer portfolio, santiago gómez de la torre romero, web developer Santander, javascript developer, desarrollador javascript",
  authors: [{ name: "Santiago Gómez de la Torre Romero" }],
  creator: "Santiago Gómez de la Torre Romero",
  publisher: "Santiago Gómez de la Torre Romero",
  openGraph: {
    title: "Santiago Gómez de la Torre Romero | Frontend Developer en Santander | Portfolio",
    description: "Frontend Developer especializado en React y Next.js. Desarrollador web con experiencia en proyectos frontend y habilidades técnicas. Portfolio profesional basado en Santander, España.",
    type: "website",
    locale: "es_ES",
    siteName: "Santiago Gómez de la Torre Romero Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Gómez de la Torre Romero | Frontend Developer en Santander | Portfolio",
    description: "Frontend Developer especializado en React y Next.js. Desarrollador web con experiencia en proyectos frontend y habilidades técnicas. Portfolio profesional basado en Santander, España.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "tu-google-site-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/sgt.png" />
        <link rel="canonical" href="https://sgomez.dev" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}