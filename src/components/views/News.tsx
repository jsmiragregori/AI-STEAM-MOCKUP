import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Rss, Tag, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import NewsDetail from './NewsDetail';

type NewsCategory = 'Todas' | 'Institucional' | 'Formación' | 'Eventos' | 'Retos' | 'Recursos' | 'All' | 'Institutional' | 'Training' | 'Events' | 'Challenges' | 'Resources' | 'Totes' | 'Institucional' | 'Formació' | 'Reptes' | 'Totes';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  sector?: string;
  partner?: string;
  featured?: boolean;
}

interface EventItem {
  id: number;
  dateNum: string;
  dateMonth: string;
  title: string;
  location: string;
  type: 'Presencial' | 'Online' | 'Híbrido';
  register?: boolean;
}

const getNewsAndEvents = (language: string, newsT: any) => {
  const newsItemsObj = newsT?.newsItems || {};
  const eventsObj = newsT?.events || {};

  const news: NewsItem[] = Object.values(newsItemsObj).map((item: any, idx: number) => ({
    id: idx + 1,
    title: item.title,
    date: item.date,
    category: item.category as NewsCategory,
    excerpt: item.excerpt,
    sector: item.sector,
    partner: item.partner,
    featured: item.featured,
  }));

  const events: EventItem[] = Object.values(eventsObj).map((item: any, idx: number) => ({
    id: idx + 1,
    dateNum: item.dateNum,
    dateMonth: item.dateMonth,
    title: item.title,
    location: item.location,
    type: item.type as any,
    register: item.register,
  }));

  return { news, events };
};

const getTypeColor = (type: string): string => {
  const typeColorMap: Record<string, string> = {
    'Presencial': 'bg-blue-100 text-blue-700',
    'Online': 'bg-green-100 text-green-700',
    'Híbrido': 'bg-purple-100 text-purple-700',
    'In-person': 'bg-blue-100 text-blue-700',
    'En-person': 'bg-blue-100 text-blue-700',
    'Hybrid': 'bg-purple-100 text-purple-700',
    'En línia': 'bg-green-100 text-green-700',
    'Híbrid': 'bg-purple-100 text-purple-700',
  };
  return typeColorMap[type] || 'bg-gray-100 text-gray-800';
};

const getCategoryColor = (category: string): string => {
  const categoryColorMap: Record<string, string> = {
    'Institucional': 'text-blue-700',
    'Institutional': 'text-blue-700',
    'Formación': 'text-purple-700',
    'Training': 'text-purple-700',
    'Formació': 'text-purple-700',
    'Eventos': 'text-eu-teal',
    'Events': 'text-eu-teal',
    'Retos': 'text-eu-orange',
    'Challenges': 'text-eu-orange',
    'Reptes': 'text-eu-orange',
    'Recursos': 'text-green-700',
    'Resources': 'text-green-700',
  };
  return categoryColorMap[category] || 'text-gray-700';
};

const getTypeLabel = (type: string, t: any): string => {
  const typeLabels: Record<string, string> = {
    'Presencial': t?.inPerson || 'Presencial',
    'Online': t?.online || 'Online',
    'Híbrido': t?.hybrid || 'Híbrido',
  };
  return typeLabels[type] || type;
};

export default function News() {
  const { t, language } = useLanguage();
  const newsT = t('news');

  const categories = {
    es: ['Todas', 'Institucional', 'Formación', 'Eventos', 'Retos', 'Recursos'] as NewsCategory[],
    en: ['All', 'Institutional', 'Training', 'Events', 'Challenges', 'Resources'] as NewsCategory[],
    va: ['Totes', 'Institucional', 'Formació', 'Events', 'Reptes', 'Recursos'] as NewsCategory[],
  };

  const categoryList = categories[language as keyof typeof categories];
  const [categoryFilter, setCategoryFilter] = useState<NewsCategory>(categoryList[0]);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  useEffect(() => {
    setCategoryFilter(categoryList[0]);
  }, [language]);

  const { news, events } = getNewsAndEvents(language, newsT);

  const firstCategoryValue = categoryList[0];
  const filtered = categoryFilter === firstCategoryValue ? news : news.filter((n) => n.category === categoryFilter);
  const featured = news.find((n) => n.featured);
  const rest = filtered.filter((n) => !n.featured || categoryFilter !== firstCategoryValue);

  if (selectedNewsId !== null) {
    return <NewsDetail onBack={() => setSelectedNewsId(null)} />;
  }

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">{newsT?.title}</h1>
            <p className="text-white/90 max-w-2xl text-base">
              {newsT?.description}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-4 py-2 rounded-lg font-bold text-sm border border-white/20 cursor-pointer">
            <Rss className="w-4 h-4" /> {newsT?.subscribeButton}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categoryList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-bold cursor-pointer border transition-colors ${
                    categoryFilter === cat
                      ? 'bg-eu-blue text-white border-eu-blue'
                      : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured article */}
            {categoryFilter === firstCategoryValue && featured && (
              <article className="bg-eu-blue text-white p-7 rounded-xl mb-5 hover:bg-eu-purple transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-eu-yellow/20 text-eu-yellow px-2 py-0.5 rounded uppercase tracking-wide">{newsT?.featured}</span>
                  <span className="text-xs text-white/60 flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                </div>
                <h2 className="text-xl font-extrabold mb-3 leading-tight">{featured.title}</h2>
                <p className="text-white/80 text-sm mb-4">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/60">{featured.partner}</span>
                  <button onClick={() => setSelectedNewsId(featured.id)} className="inline-flex items-center text-eu-yellow font-bold text-sm hover:underline cursor-pointer">
                    {newsT?.readMore} <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            )}

            {/* News list */}
            <div className="space-y-4">
              {rest.map((item) => (
                <article key={item.id} className="bg-white p-5 rounded-xl border border-eu-border shadow-sm hover:border-eu-blue transition-colors group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      {item.sector && (
                        <span className="flex items-center gap-1 text-sm text-gray-400 font-semibold">
                          <Tag className="w-2.5 h-2.5" /> {item.sector}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-eu-text mb-2 group-hover:text-eu-blue transition-colors leading-snug">
                    <button onClick={() => setSelectedNewsId(item.id)} className="hover:underline cursor-pointer">
                      {item.title}
                    </button>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    {item.partner && <span className="text-sm text-gray-400 font-semibold">{item.partner}</span>}
                    <button onClick={() => setSelectedNewsId(item.id)} className="inline-flex items-center text-sm font-bold text-eu-blue hover:underline ml-auto cursor-pointer">
                      {newsT?.readMore} <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="font-semibold">{newsT?.noNews}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Events */}
            <div>
              <h2 className="text-lg font-bold text-eu-text mb-4">{newsT?.upcomingEvents}</h2>
              <div className="bg-white rounded-xl border border-eu-border shadow-sm overflow-hidden">
                <ul className="divide-y divide-eu-border">
                  {events.map((event) => (
                    <li key={event.id} className="p-4 hover:bg-eu-bg transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="bg-eu-blue text-white rounded-lg p-2 text-center min-w-12.5 shrink-0">
                          <span className="block text-lg font-extrabold leading-none">{event.dateNum}</span>
                          <span className="block text-sm font-semibold uppercase mt-0.5">{event.dateMonth}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-eu-text mb-1 leading-snug">{event.title}</h4>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mb-1.5">
                            <MapPin className="w-3 h-3 shrink-0" /> {event.location}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-bold px-1.5 py-0.5 rounded ${getTypeColor(event.type)}`}>{getTypeLabel(event.type, newsT)}</span>
                            {event.register && (
                              <a href="#" className="text-sm font-bold text-eu-blue hover:underline flex items-center gap-0.5">
                                {newsT?.register} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-eu-bg border-t border-eu-border text-center">
                  <a href="#" className="text-sm font-bold text-eu-blue hover:underline">{newsT?.viewFullCalendar}</a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-linear-to-br from-eu-purple to-eu-blue rounded-xl p-6 text-white shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-eu-yellow">{newsT?.newsletterTitle}</h3>
              <p className="text-sm text-white mb-4">{newsT?.newsletterDesc}</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsT?.newsletterPlaceholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={newsT?.newsletterPlaceholder}
                  className="w-full rounded-md px-3 py-2 text-sm text-eu-text bg-white border border-white/70 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-eu-yellow"
                />
                <button type="submit" className="w-full bg-eu-yellow text-eu-purple font-bold rounded-md py-2 text-sm hover:bg-white transition-colors cursor-pointer border border-eu-yellow">
                  {newsT?.newsletterSubscribe}
                </button>
              </form>
            </div>

            {/* Social / Links */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-5">
              <h3 className="font-bold text-eu-text mb-3">{newsT?.followUs}</h3>
              <div className="space-y-2">
                {[
                  { key: 'linkedin', label: newsT?.socialLinks?.linkedin, url: '#' },
                  { key: 'twitter', label: newsT?.socialLinks?.twitter, url: '#' },
                  { key: 'youtube', label: newsT?.socialLinks?.youtube, url: '#' },
                  { key: 'substack', label: newsT?.socialLinks?.substack, url: '#' },
                ].map((link) => (
                  <a key={link.key} href={link.url} className="flex items-center gap-2 text-sm text-eu-blue hover:underline font-medium">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

