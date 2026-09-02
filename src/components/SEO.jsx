import React from 'react';
import { Helmet } from 'react-helmet-async';

const site = {
  title: '626 Bath and Tile',
  description: 'Bathroom renovation experts — Showroom quality workmanship.',
  url: process.env.SITE_URL || 'https://example.com',
  image: (process.env.SITE_URL || 'https://example.com') + '/og-image.jpg'
};

export default function SEO({ title, description, url, image, children }) {
  const seo = {
    title: title ? `${title} | ${site.title}` : site.title,
    description: description || site.description,
    url: url || site.url,
    image: image || site.image
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Helmet>
  );
}
