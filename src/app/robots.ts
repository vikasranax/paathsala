import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/profile/', '/arena/'],
      },
    ],
    sitemap: 'https://paathsala.vercel.app/sitemap.xml',
  };
}
