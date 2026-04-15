import { useState } from 'react';
import { Calendar, ArrowRight, Rss, Tag, MapPin, ExternalLink } from 'lucide-react';

type NewsCategory = 'Todas' | 'Institucional' | 'Formación' | 'Eventos' | 'Retos' | 'Recursos';

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

const news: NewsItem[] = [
  {
    id: 1,
    title: 'AI-SECRETT recibe financiación del programa Europa Digital: 4,2M€ para la red AI-STEAM',
    date: '10 Abr 2026',
    category: 'Institucional',
    excerpt: 'El consorcio liderado por UVEG y CEICE obtiene financiación confirmada del programa Digital Europe para desplegar la red AI-STEAM en 12 países y crear más de 60 módulos formativos para FP y Máster.',
    partner: 'UVEG / CEICE',
    featured: true,
  },
  {
    id: 2,
    title: 'Hackathon "Green AI" 2026: 50 equipos abordan el cambio climático con Inteligencia Artificial',
    date: '02 Abr 2026',
    category: 'Eventos',
    excerpt: 'Más de 50 equipos multidisciplinares formados por estudiantes de FP y Máster compitieron durante 48 horas en la Ciudad Politécnica de la Innovación. El equipo ganador desarrolló un modelo de predicción de sequías para la cuenca del Júcar.',
    sector: 'Medio Ambiente',
    partner: 'UVEG / UPV / CEICE',
  },
  {
    id: 3,
    title: 'CEICE publica el nuevo Curso de Especialización en IA para Ciclos Formativos',
    date: '25 Mar 2026',
    category: 'Formación',
    excerpt: 'La Conselleria d\'Educació lanza el primer Curso de Especialización en Inteligencia Artificial y Automatización, co-diseñado con los socios de la red AI-STEAM para 15 familias profesionales.',
    sector: 'Educación',
    partner: 'CEICE',
  },
  {
    id: 4,
    title: 'Publicado el Manual de Gemelos Digitales v2.1 como recurso OER',
    date: '18 Mar 2026',
    category: 'Recursos',
    excerpt: 'INESC TEC y Hochschule Wismar publican la nueva versión del manual de gemelos digitales bajo licencia CC-BY 4.0, con casos de uso en manufactura, energía y logística. Ya disponible en Aules.',
    sector: 'Industria',
    partner: 'INESC TEC / HSW',
  },
  {
    id: 5,
    title: 'Nuevo reto publicado: IA para triaje de urgencias pediátricas en el Hospital La Fe',
    date: '10 Mar 2026',
    category: 'Retos',
    excerpt: 'El Hospital Universitario La Fe publica en el Banco de Retos un desafío de nivel Máster para desarrollar un modelo de apoyo a la decisión clínica en el triaje pediátrico.',
    sector: 'Salud',
    partner: 'Hospital La Fe',
  },
  {
    id: 6,
    title: 'Acuerdo de adhesión con AVA-ASAJA: la mayor cooperativa agrícola valenciana se une a la red',
    date: '01 Mar 2026',
    category: 'Institucional',
    excerpt: 'AVA-ASAJA se convierte en el primer stakeholder del sector agroalimentario valenciano en adherirse a la red, aportando acceso a 12.000 hectáreas de datos de cultivos para retos de agricultura de precisión.',
    sector: 'Agroalimentario',
    partner: 'AVA-ASAJA',
  },
  {
    id: 7,
    title: 'La red AI-STEAM presenta resultados en el European AI Forum de Bruselas',
    date: '20 Feb 2026',
    category: 'Institucional',
    excerpt: 'Representantes de UVEG, CEICE y The Lisbon Council presentaron el modelo de red de práctica cuádruple hélice ante más de 400 responsables de políticas educativas europeas.',
    partner: 'UVEG / CEICE / LC',
  },
  {
    id: 8,
    title: 'Primeras micro-credenciales emitidas: 234 estudiantes de FP obtienen el AI-Industry Badge',
    date: '10 Feb 2026',
    category: 'Formación',
    excerpt: '234 estudiantes de ciclos formativos de la Comunitat Valenciana han recibido sus primeras micro-credenciales Open Badge 3.0 tras completar el módulo de IA Industrial en Aules.',
    sector: 'Industria',
    partner: 'CEICE / TUV.IT',
  },
];

const events: EventItem[] = [
  { id: 1, dateNum: '15', dateMonth: 'Jun', title: 'Asamblea General de Socios AI-STEAM – Sesión 3', location: 'Conselleria de Educació, Valencia', type: 'Híbrido', register: true },
  { id: 2, dateNum: '25', dateMonth: 'Jun', title: 'Webinar: Reglamento IA UE para Educadores', location: 'Online (Zoom)', type: 'Online', register: true },
  { id: 3, dateNum: '10', dateMonth: 'Jul', title: 'Taller Sectorial: IA y Salud – Co-creación de Retos', location: 'Hospital La Fe, Valencia', type: 'Presencial', register: true },
  { id: 4, dateNum: '18', dateMonth: 'Sep', title: 'Foro Anual AI-STEAM Network 2026', location: 'Ciudad Politécnica de la Innovación, Valencia', type: 'Presencial', register: false },
  { id: 5, dateNum: '02', dateMonth: 'Oct', title: 'Apertura Máster AI-SECRETT – 2ª Edición', location: 'Online (Aules)', type: 'Online', register: false },
  { id: 6, dateNum: '15', dateMonth: 'Oct', title: 'Hackathon AgroAI: IA para la Agricultura Sostenible', location: 'ETSIAMN – UPV, Valencia', type: 'Presencial', register: false },
];

const typeColors: Record<string, string> = {
  Presencial: 'bg-blue-100 text-blue-700',
  Online: 'bg-green-100 text-green-700',
  Híbrido: 'bg-purple-100 text-purple-700',
};

const categoryColors: Record<string, string> = {
  Institucional: 'text-blue-700',
  Formación: 'text-purple-700',
  Eventos: 'text-eu-teal',
  Retos: 'text-eu-orange',
  Recursos: 'text-green-700',
};

export default function News() {
  const [categoryFilter, setCategoryFilter] = useState<NewsCategory>('Todas');

  const filtered = categoryFilter === 'Todas' ? news : news.filter((n) => n.category === categoryFilter);
  const featured = news.find((n) => n.featured);
  const rest = filtered.filter((n) => !n.featured || categoryFilter !== 'Todas');

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">Actualidad y Agenda</h1>
            <p className="text-white/80 max-w-2xl text-base">
              Noticias, eventos y novedades del proyecto AI-SECRETT y la red AI-STEAM. Mantente al día de los avances del consorcio europeo.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-4 py-2 rounded-lg font-bold text-sm border border-white/20 cursor-pointer">
            <Rss className="w-4 h-4" /> Suscribirse al boletín
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['Todas', 'Institucional', 'Formación', 'Eventos', 'Retos', 'Recursos'] as NewsCategory[]).map((cat) => (
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
            {categoryFilter === 'Todas' && featured && (
              <article className="bg-eu-blue text-white p-7 rounded-xl mb-5 hover:bg-blue-900 transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-eu-yellow/20 text-eu-yellow px-2 py-0.5 rounded uppercase tracking-wide">Destacado</span>
                  <span className="text-xs text-white/60 flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                </div>
                <h2 className="text-xl font-extrabold mb-3 leading-tight">{featured.title}</h2>
                <p className="text-white/80 text-sm mb-4">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/60">{featured.partner}</span>
                  <a href="#" className="inline-flex items-center text-eu-yellow font-bold text-sm hover:underline">
                    Leer más <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </article>
            )}

            {/* News list */}
            <div className="space-y-4">
              {rest.map((item) => (
                <article key={item.id} className="bg-white p-5 rounded-xl border border-eu-border shadow-sm hover:border-eu-blue transition-colors group cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${categoryColors[item.category] ?? 'text-gray-600'}`}>
                        {item.category}
                      </span>
                      {item.sector && (
                        <span className="flex items-center gap-1 text-[10px] text-gray-400 font-semibold">
                          <Tag className="w-2.5 h-2.5" /> {item.sector}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-eu-text mb-2 group-hover:text-eu-blue transition-colors leading-snug">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    {item.partner && <span className="text-[11px] text-gray-400 font-semibold">{item.partner}</span>}
                    <a href="#" className="inline-flex items-center text-sm font-bold text-eu-blue hover:underline ml-auto">
                      Leer más <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="font-semibold">No hay noticias en esta categoría</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Events */}
            <div>
              <h2 className="text-lg font-bold text-eu-text mb-4">Próximos Eventos</h2>
              <div className="bg-white rounded-xl border border-eu-border shadow-sm overflow-hidden">
                <ul className="divide-y divide-eu-border">
                  {events.map((event) => (
                    <li key={event.id} className="p-4 hover:bg-eu-bg transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="bg-eu-blue text-white rounded-lg p-2 text-center min-w-12.5 shrink-0">
                          <span className="block text-lg font-extrabold leading-none">{event.dateNum}</span>
                          <span className="block text-[10px] font-semibold uppercase mt-0.5">{event.dateMonth}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-eu-text mb-1 leading-snug">{event.title}</h4>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mb-1.5">
                            <MapPin className="w-3 h-3 shrink-0" /> {event.location}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${typeColors[event.type]}`}>{event.type}</span>
                            {event.register && (
                              <a href="#" className="text-[10px] font-bold text-eu-blue hover:underline flex items-center gap-0.5">
                                Inscribirse <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-eu-bg border-t border-eu-border text-center">
                  <a href="#" className="text-sm font-bold text-eu-blue hover:underline">Ver calendario completo</a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-eu-orange rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Boletín AI-STEAM</h3>
              <p className="text-sm text-white/90 mb-4">Recibe cada mes las novedades del proyecto, nuevos retos y recursos formativos.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input
                  type="email"
                  placeholder="Tu correo institucional"
                  className="w-full rounded-md px-3 py-2 text-sm text-eu-text focus:outline-none"
                />
                <button type="submit" className="w-full bg-white text-eu-orange font-bold rounded-md py-2 text-sm hover:bg-orange-50 transition-colors cursor-pointer border-none">
                  Suscribirme
                </button>
              </form>
            </div>

            {/* Social / Links */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-5">
              <h3 className="font-bold text-eu-text mb-3">Síguenos</h3>
              <div className="space-y-2">
                {[
                  { label: 'LinkedIn – AI-SECRETT Project', url: '#' },
                  { label: 'Twitter/X – @AISTEAMNetwork', url: '#' },
                  { label: 'YouTube – Canal AI-STEAM', url: '#' },
                  { label: 'Zenodo – Repositorio Publicaciones', url: '#' },
                ].map((link) => (
                  <a key={link.label} href={link.url} className="flex items-center gap-2 text-sm text-eu-blue hover:underline font-medium">
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
