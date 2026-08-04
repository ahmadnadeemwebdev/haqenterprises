import { useMemo, useState } from 'react';
import BlogCard, { Article } from '@/components/blog/BlogCard';
import SearchBar from '@/components/blog/SearchBar';
import CategoryFilter from '@/components/blog/CategoryFilter';

import articlesData from '@/content/blog/articles.json';

const sampleArticles: Article[] = (articlesData as unknown) as Article[];

export default function Blog() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  const categories = useMemo(() => Array.from(new Set(sampleArticles.map((a) => a.category))), []);

  const filtered = useMemo(() => {
    return sampleArticles.filter((a) => {
      if (active !== 'All' && a.category !== active) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    });
  }, [query, active]);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#1d1d1f]/60 text-xs font-semibold tracking-widest uppercase mb-3">Insights & Articles</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] tracking-tight">Latest Articles</h2>
          <p className="text-[#1d1d1f]/55 max-w-2xl mx-auto mt-4">Industry tips, packaging best practices and event planning guides from Haq Enterprises.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-10">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <SearchBar value={query} onChange={setQuery} />
              <CategoryFilter categories={categories} active={active} onSelect={setActive} />
              <div className="mt-4 bg-[#f5f5f7] border border-black/6 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Subscribe</p>
                <p className="text-sm text-[#1d1d1f]/70">Get new articles by email. (Placeholder)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="mt-6 text-center text-[#1d1d1f]/60">No articles match your search. Try another keyword.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
