import { ArrowRight, Users, BookOpen, Layers, Zap, Globe, Award } from 'lucide-react';
import { Tab } from '../../App';

interface HomeProps {
  setActiveTab: (tab: Tab) => void;
}

const sectors = [
  { id: 'ind', name: 'Industria', color: 'bg-blue-600', emoji: '⚙️' },
  { id: 'sal', name: 'Salud', color: 'bg-red-500', emoji: '🏥' },
  { id: 'med', name: 'Medio Ambiente', color: 'bg-green-600', emoji: '🌿' },
  { id: 'edu', name: 'Educación', color: 'bg-purple-600', emoji: '🎓' },
  { id: 'agr', name: 'Agroalimentario', color: 'bg-yellow-600', emoji: '🌾' },
  { id: 'tur', name: 'Turismo y Cultura', color: 'bg-pink-500', emoji: '🏛️' },
  { id: 'adm', name: 'Administración', color: 'bg-gray-600', emoji: '🏛' },
];

const stats = [
  { id: 1, name: 'Socios Adheridos', value: '142', icon: Users },
  { id: 2, name: 'Retos FP Activos', value: '85', icon: Zap },
  { id: 3, name: 'Retos Máster', value: '42', icon: BookOpen },
  { id: 4, name: 'Micro-credenciales', value: '1.200', icon: Award },
  { id: 5, name: 'Países del Consorcio', value: '12', icon: Globe },
  { id: 6, name: 'Módulos Formativos', value: '68', icon: Layers },
];

const platforms = [
  {
    name: 'Aules',
    subtitle: 'LMS · Moodle',
    desc: 'Cursos, módulos de FP y máster, formación docente y contenidos OER del proyecto.',
    color: 'border-eu-teal',
    iconBg: 'bg-eu-teal',
    tag: 'Formación',
  },
  {
    name: 'AI-STEAM Network',
    subtitle: 'CMS · Este portal',
    desc: 'Repositorio de retos, socios, conocimiento y recursos para nutrir el máster y la FP de CEICE.',
    color: 'border-eu-blue',
    iconBg: 'bg-eu-blue',
    tag: 'Red de Conocimiento',
  },
  {
    name: 'ConsensUE',
    subtitle: 'Participación · Decidim',
    desc: 'Democracia y participación: propuestas, votaciones y co-diseño del currículo con la ciudadanía.',
    color: 'border-eu-orange',
    iconBg: 'bg-eu-orange',
    tag: 'Participación',
  },
];

export default function Home({ setActiveTab }: HomeProps) {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero */}
      <section className="bg-linear-to-br from-eu-blue to-[#003080] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-eu-yellow/20 text-eu-yellow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Digital Europe Programme 2021–2027 · AI-SECRETT
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              IA y STEAM:<br />Motores de la Triple<br />Transición Europea
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Conectamos empresas, centros educativos y administración pública en torno a la Inteligencia Artificial aplicada a los 7 sectores clave de la economía valenciana y europea.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('banco-retos')}
                className="bg-eu-orange text-white px-6 py-3 rounded-md font-bold border-none hover:bg-orange-600 transition-colors flex items-center gap-2"
              >
                Sube tu Reto Industrial <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('red')}
                className="border-2 border-white/50 text-white px-6 py-3 rounded-md font-bold hover:bg-white/10 transition-colors"
              >
                Solicita adhesión a la Red
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="bg-white/10 backdrop-blur rounded-xl p-5 flex flex-col">
                  <Icon className="w-5 h-5 text-eu-yellow mb-2" />
                  <div className="text-3xl font-extrabold text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">{stat.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3-Platform Ecosystem */}
      <section className="px-6 py-12 bg-white border-b border-eu-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-2">El Ecosistema AI-STEAM</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Tres plataformas complementarias para una red de conocimiento e innovación educativa única en Europa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className={`bg-white rounded-xl border-t-4 ${p.color} border border-eu-border p-6 shadow-sm flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${p.iconBg} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                    {p.name.substring(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-eu-text">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 flex-1 mb-4">{p.desc}</p>
                <span className="self-start text-xs font-bold px-2 py-1 bg-eu-bg rounded text-eu-teal">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Sectors */}
      <section className="px-6 py-12 bg-eu-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-eu-text mb-1">7 Sectores Estratégicos</h2>
              <p className="text-gray-600 text-sm">El conocimiento de la red se organiza en torno a sectores clave para la triple transición digital, verde y social.</p>
            </div>
            <button
              onClick={() => setActiveTab('sectores')}
              className="hidden md:flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
            >
              Ver todos los sectores <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab('sectores')}
                className="bg-white rounded-xl border border-eu-border p-4 flex flex-col items-center text-center hover:border-eu-blue hover:shadow-md transition-all group cursor-pointer"
              >
                <span className="text-3xl mb-2">{s.emoji}</span>
                <span className="text-xs font-bold text-eu-text group-hover:text-eu-blue">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Focus */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-2">Foco Educativo Dual</h2>
          <p className="text-gray-600 mb-8 text-sm max-w-2xl">La red alimenta simultáneamente dos niveles de formación reglada coordinados por CEICE.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Master */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm">M</div>
                <div>
                  <h3 className="font-bold text-eu-text text-lg">Máster AI-SECRETT</h3>
                  <p className="text-xs text-purple-600 font-semibold">Coordinado por UVEG</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-5">
                Máster universitario internacional sobre IA aplicada a la creatividad y la triple transición. Contenidos co-creados con los socios de la red en 12 países europeos.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> 2 ediciones anuales (formato blended)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> Certificación TÜV Thüringen (TUV.IT)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> Micro-credenciales European Digital Credentials</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> Retos reales del Banco de Retos como TFM</li>
              </ul>
            </div>

            {/* FP */}
            <div className="bg-linear-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-eu-orange rounded-xl flex items-center justify-center text-white font-extrabold text-sm">FP</div>
                <div>
                  <h3 className="font-bold text-eu-text text-lg">FP y Ciclos Formativos CEICE</h3>
                  <p className="text-xs text-eu-orange font-semibold">Coordinado por CEICE</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-5">
                Los retos y conocimientos de la red nutren directamente los módulos de FP: ciclos formativos y cursos de especialización de la Conselleria d'Educació.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> Cursos de Especialización en IA para sectores STEAM</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> ABP: retos de empresa en el aula</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> FCT tutorizada con socios de la red</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> Materiales OER para docentes (CC-BY-SA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Challenges Preview */}
      <section className="px-6 py-12 bg-eu-bg border-t border-eu-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-eu-text">Últimos Retos Publicados</h2>
            <button
              onClick={() => setActiveTab('banco-retos')}
              className="flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Optimización energética en museos con IA', org: 'Generalitat Valenciana (CEICE)', level: 'FP', sector: 'Administración', status: 'Abierto' },
              { title: 'Detección de plagas en cítricos vía Computer Vision', org: 'AVA-ASAJA Cooperativa', level: 'Máster', sector: 'Agroalimentario', status: 'En Resolución' },
              { title: 'IA en triaje de urgencias pediátricas', org: 'Hospital La Fe – Valencia', level: 'Máster', sector: 'Salud', status: 'Abierto' },
            ].map((ch, i) => (
              <div key={i} className="bg-white rounded-xl border border-eu-border p-5 hover:border-eu-blue transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-extrabold uppercase px-2 py-0.5 rounded ${ch.level === 'FP' ? 'bg-orange-100 text-orange-800' : 'bg-purple-100 text-purple-800'}`}>
                    Reto {ch.level}
                  </span>
                  <span className="text-sm text-eu-teal font-bold">● {ch.status}</span>
                </div>
                <h3 className="font-bold text-eu-text text-sm mb-1 leading-snug">{ch.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{ch.org}</p>
                <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded text-gray-600 font-semibold">{ch.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="px-6 py-10 bg-white border-t border-eu-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Consorcio AI-SECRETT · 21 socios en 12 países</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {['UVEG', 'CEICE', 'UMU', 'UPV', 'NTNU', 'HSW', 'FIDIT', 'INESC', 'TUV.IT', 'JOIST', 'C-LINK', 'LC', 'COGN', 'ESAD-GV', 'IF.E', 'Ud\'A', 'LPGA', 'VARM', 'CINK', 'KEA', 'PREDA'].map((p) => (
              <div key={p} className="bg-eu-bg border border-eu-border rounded px-3 py-1.5 text-sm font-bold text-gray-600">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
