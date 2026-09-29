import { MetadataRoute } from 'next';
import { exams } from '@/data/exams';

const BASE_URL = 'https://paathsala.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/leaderboard', '/arena', '/privacy', '/terms', '/login'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const examRoutes = exams.flatMap((exam) => [
    { url: `${BASE_URL}/exams/${exam.id}`, lastModified: new Date() },
    { url: `${BASE_URL}/exams/${exam.id}/notes`, lastModified: new Date() },
    { url: `${BASE_URL}/exams/${exam.id}/current-affairs`, lastModified: new Date() },
    { url: `${BASE_URL}/exams/${exam.id}/cutoff`, lastModified: new Date() },
  ]);

  return [...staticRoutes, ...examRoutes];
}
