import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ExternalAnchor from '../common/ExternalAnchor';

interface NewsDetailProps {
  onBack: () => void;
}

export default function NewsDetail({ onBack }: NewsDetailProps) {
  const { t } = useLanguage();
  const newsT = t('news');
  const detail = newsT?.newsDetail;

  if (!detail) return null;

  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-eu-blue to-blue-900 text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a Noticias
          </button>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold bg-eu-yellow/20 text-eu-yellow px-3 py-1 rounded-full uppercase tracking-wide">
              {detail.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {detail.title}
          </h1>

          <p className="text-xl text-white/90 mb-6 max-w-3xl leading-relaxed">
            {detail.hero_subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{detail.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{detail.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12 pb-12 border-b border-eu-border">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {detail.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12 mb-12">
          {detail.sections?.map((section: any, idx: number) => (
            <article key={idx} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-eu-text mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-eu-blue/10 rounded-full flex items-center justify-center text-eu-blue font-bold">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-eu-blue/5 to-eu-teal/5 border border-eu-border rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-eu-text mb-3">
            ¿Listo para unirte a la red?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            La Xarxa AI-STEAM está abierta a nuevas organizaciones interesadas en colaborar, proponer retos y formar parte del ecosistema de innovación europeo.
          </p>
          <ExternalAnchor
            href={detail.cta_link}
            className="inline-flex items-center gap-2 bg-eu-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
          >
            {detail.cta_button}
          </ExternalAnchor>
        </div>

        {/* Related News */}
        {detail.related_news && detail.related_news.length > 0 && (
          <div className="pt-8 border-t border-eu-border">
            <h3 className="text-2xl font-bold text-eu-text mb-6 flex items-center gap-2">
              <Tag className="w-5 h-5" /> Noticias Relacionadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.related_news.map((related: string, idx: number) => (
                <button
                  key={idx}
                  className="text-left p-4 bg-white border border-eu-border rounded-lg hover:border-eu-blue hover:bg-eu-bg transition-colors group"
                >
                  <p className="font-bold text-eu-text group-hover:text-eu-blue transition-colors leading-snug">
                    {related}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-eu-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-semibold">Compartir esta noticia</span>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-eu-blue/10 hover:bg-eu-blue/20 text-eu-blue rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
