export function generateMetadata({ title, description, keywords }) {
  return {
    title: `${title} | Santiago Gómez de la Torre Romero Portfolio`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Santiago Gómez de la Torre Romero Portfolio`,
      description,
      type: 'website',
    },
    twitter: {
      title: `${title} | Santiago Gómez de la Torre Romero Portfolio`,
      description,
    },
  };
} 