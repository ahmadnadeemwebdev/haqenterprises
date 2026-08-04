import React from 'react';
import { Link } from 'wouter';

export type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  slug: string;
};

export default function BlogCard({ article }: { article: Article }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-black/6 hover:shadow-lg transition-shadow duration-200">
      {article.image && (
          <img src={article.image} alt={article.title} className="w-full h-56 object-cover" width={1200} height={640} loading="lazy" decoding="async" />
      )}
      <div className="p-5">
        <p className="text-xs text-[#1d1d1f]/60 mb-2">{article.category} · {article.date}</p>
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 leading-snug">{article.title}</h3>
        <p className="text-sm text-[#1d1d1f]/70 mb-4">{article.excerpt}</p>
          <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-[#1d1d1f] hover:underline">Read article →</Link>
      </div>
    </article>
  );
}
