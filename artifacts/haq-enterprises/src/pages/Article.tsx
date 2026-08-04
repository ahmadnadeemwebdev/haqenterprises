import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import articlesData from '@/content/blog/articles.json';

type ArticleType = typeof articlesData[0];

export default function ArticlePage(props: { params?: { slug?: string } }) {
  const [location] = useLocation();
  const slugMatch = location.split('/').pop() || '';
  const article: ArticleType | undefined = (articlesData as any).find((a: any) => a.slug === slugMatch);

  useEffect(() => {
    if (article) {
      document.title = article.seoTitle || article.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', article.metaDescription || article.excerpt || '');
      else {
        const m = document.createElement('meta');
        m.name = 'description';
        m.content = article.metaDescription || article.excerpt || '';
        document.head.appendChild(m);
      }

      // canonical
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = `https://www.haqenterprises.online/blog/${article.slug}`;

      // JSON-LD
      let jd = document.getElementById('article-json-ld');
      if (jd) jd.remove();
      const script = document.createElement('script');
      script.id = 'article-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': article.h1 || article.title,
        'description': article.metaDescription || article.excerpt,
        'datePublished': article.date,
        'author': { '@type': 'Organization', 'name': 'Haq Enterprises' },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://www.haqenterprises.online/blog/${article.slug}` }
      });
      document.head.appendChild(script);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p className="text-sm text-[#1d1d1f]/70">We couldn't find the article you requested.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-24 px-6">
      <p className="text-xs text-[#1d1d1f]/60 mb-2">{article.category} · {article.date}</p>
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">{article.h1 || article.title}</h1>
      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={article.image} alt={article.title} className="w-full h-auto object-cover mb-6 rounded-lg" loading="lazy" width={1200} height={640} />
      )}

      {article.content.split('\n\n').map((p: string, i: number) => (
        <p className="mb-4 text-[#1d1d1f]/85 leading-relaxed" key={i}>{p}</p>
      ))}

      <div className="mt-8">
        <p className="font-semibold">{article.cta}</p>
      </div>
    </article>
  );
}
