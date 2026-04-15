import { useState } from 'react';
import { Building2, GraduationCap, HeartHandshake, Globe, MapPin, UserPlus } from 'lucide-react';

type NetworkTab = 'socios' | 'stakeholders';
type HelixCategory = 'todos' | 'universidad' | 'empresa' | 'admin' | 'sociedad';

interface Partner {
  id: string;
  name: string;
  acronym: string;
  country: string;
  city: string;
  category: 'universidad' | 'empresa' | 'admin' | 'sociedad';
  sectors: string[];
  role: string;
}

interface Stakeholder {
  id: string;
  name: string;
  type: string;
  sector: string;
  region: string;
  category: 'universidad' | 'empresa' | 'admin' | 'sociedad';
  desc: string;
}

// Socios del Consorcio AI-SECRETT (fijos, no pueden adherirse)
const partners: Partner[] = [
  { id: 'uveg', name: 'Universitat de València', acronym: 'UVEG', country: 'ES', city: 'Valencia', category: 'universidad', sectors: ['Educación', 'Industria'], role: 'Coordinador' },
  { id: 'umu', name: 'Universidad de Murcia', acronym: 'UMU', country: 'ES', city: 'Murcia', category: 'universidad', sectors: ['Salud', 'Educación'], role: 'Socio Beneficiario' },
  { id: 'upv', name: 'Universitat Politècnica de València', acronym: 'UPV', country: 'ES', city: 'Valencia', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'Socio Beneficiario' },
  { id: 'ntnu', name: 'NTNU – Norwegian Univ. of S&T', acronym: 'NTNU', country: 'NO', city: 'Trondheim', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'Socio Beneficiario' },
  { id: 'hsw', name: 'Hochschule Wismar', acronym: 'HSW', country: 'DE', city: 'Wismar', category: 'universidad', sectors: ['Industria', 'Educación'], role: 'Socio Beneficiario' },
  { id: 'fidit', name: 'Univ. de Rijeka – FIDIT', acronym: 'FIDIT', country: 'HR', city: 'Rijeka', category: 'universidad', sectors: ['Educación', 'Administración'], role: 'Socio Beneficiario' },
  { id: 'uda', name: "Univ. Gabriele d'Annunzio", acronym: "Ud'A", country: 'IT', city: 'Chieti-Pescara', category: 'universidad', sectors: ['Salud', 'Industria'], role: 'Socio Beneficiario' },
  { id: 'esad', name: 'ESAD Grenoble-Valence', acronym: 'ESAD-GV', country: 'FR', city: 'Grenoble', category: 'universidad', sectors: ['Turismo y Cultura'], role: 'Socio Beneficiario' },
  { id: 'inesc', name: 'INESC TEC', acronym: 'INESC', country: 'PT', city: 'Porto', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'Socio Beneficiario' },
  { id: 'ceice', name: "Conselleria d'Educació (CEICE)", acronym: 'CEICE', country: 'ES', city: 'Valencia', category: 'admin', sectors: ['Educación', 'Administración'], role: 'Socio Beneficiario' },
  { id: 'lpga', name: 'Promoción Las Palmas de GC', acronym: 'LPGA', country: 'ES', city: 'Las Palmas', category: 'admin', sectors: ['Turismo y Cultura', 'Administración'], role: 'Socio Beneficiario' },
  { id: 'varm', name: 'Region Värmland', acronym: 'VARM', country: 'SE', city: 'Karlstad', category: 'admin', sectors: ['Medio Ambiente', 'Administración'], role: 'Socio Beneficiario' },
  { id: 'preda', name: 'Agencia Desarrollo Prijedor', acronym: 'PREDA', country: 'BA', city: 'Prijedor', category: 'admin', sectors: ['Administración', 'Industria'], role: 'Socio Beneficiario' },
  { id: 'cogn', name: 'Cognito S.R.L.', acronym: 'COGN', country: 'IT', city: 'Massa', category: 'empresa', sectors: ['Industria', 'Educación'], role: 'Socio Beneficiario' },
  { id: 'tuvit', name: 'TÜV Thüringen Italia', acronym: 'TUV.IT', country: 'IT', city: 'Collecchio', category: 'empresa', sectors: ['Industria'], role: 'Certificación' },
  { id: 'joist', name: 'The Factory IKE (JOIST)', acronym: 'JOIST', country: 'GR', city: 'Larissa', category: 'empresa', sectors: ['Industria', 'Turismo y Cultura'], role: 'Socio Beneficiario' },
  { id: 'clink', name: 'CulturaLink SL', acronym: 'C-LINK', country: 'ES', city: 'Las Palmas', category: 'empresa', sectors: ['Turismo y Cultura'], role: 'Socio Beneficiario' },
  { id: 'cink', name: 'CINK Venturing SL', acronym: 'CINK', country: 'ES', city: 'Madrid', category: 'empresa', sectors: ['Industria', 'Agroalimentario'], role: 'Socio Beneficiario' },
  { id: 'lc', name: 'The Lisbon Council', acronym: 'LC', country: 'BE', city: 'Bruselas', category: 'sociedad', sectors: ['Administración', 'Educación'], role: 'Socio Beneficiario' },
  { id: 'kea', name: 'KEA European Affairs', acronym: 'KEA', country: 'BE', city: 'Bruselas', category: 'sociedad', sectors: ['Turismo y Cultura'], role: 'Socio Beneficiario' },
  { id: 'ife', name: 'Inspiring Futures Europe', acronym: 'IF.E', country: 'ES', city: 'Madrid', category: 'sociedad', sectors: ['Educación'], role: 'Socio Beneficiario' },
];

// Stakeholders adheridos a la red (pueden unirse nuevos)
const stakeholders: Stakeholder[] = [
  { id: 'aesia', name: 'AESIA – Agencia Española de Supervisión de IA', type: 'Agencia estatal regulatoria', sector: 'Transversal', region: 'Nacional', category: 'admin', desc: 'Supervisión regulatoria y ética de la IA en España.' },
  { id: 'ivace', name: 'IVACE+i', type: 'Agencia de Innovación Regional', sector: 'Transversal', region: 'C. Valenciana', category: 'admin', desc: 'Financiación de innovación y enlace con PYMEs.' },
  { id: 'dgtic', name: 'GVA – DGTIC', type: 'Organismo Público', sector: 'Transversal', region: 'C. Valenciana', category: 'admin', desc: 'Dirección General de Tecnologías de la Información y las Comunicaciones de la GVA.' },
  { id: 'lasnaves', name: 'Las Naves', type: 'Centro de Innovación Urbana', sector: 'Industria / Energía', region: 'C. Valenciana', category: 'admin', desc: 'Living lab urbano, misiones 2030 de la ciudad de Valencia.' },
  { id: 'fedacova', name: 'FEDACOVA', type: 'Federación Agroalimentaria', sector: 'Agroalimentario', region: 'C. Valenciana', category: 'empresa', desc: 'Agrupa 30 asociaciones de la industria transformadora agroalimentaria.' },
  { id: 'avaasaja', name: 'AVA-ASAJA', type: 'Asociación de Agricultores', sector: 'Agroalimentario', region: 'C. Valenciana', category: 'empresa', desc: 'Digitalización rural y representación de la base productiva agrícola.' },
  { id: 'femeval', name: 'FEMEVAL', type: 'Federación Metalúrgica', sector: 'Manufactura', region: 'C. Valenciana', category: 'empresa', desc: 'Transformación digital del sector metal valenciano.' },
  { id: 'ascer', name: 'ASCER', type: 'Asoc. Fabricantes de Azulejos', sector: 'Manufactura', region: 'C. Valenciana', category: 'empresa', desc: 'Clúster cerámico, eficiencia energética e IA en diseño.' },
  { id: 'globalomnium', name: 'Global Omnium', type: 'Empresa de Gestión del Agua', sector: 'Medio Ambiente', region: 'C. Valenciana', category: 'empresa', desc: 'IA en ciclo integral del agua y gemelos digitales.' },
  { id: 'brainstorm', name: 'Brainstorm Multimedia', type: 'Empresa Tecnológica', sector: 'Turismo y Cultura', region: 'C. Valenciana', category: 'empresa', desc: 'Gráficos 3D en tiempo real y estudios virtuales con IA.' },
  { id: 'iti', name: 'ITI – Institut Tecnològic d\'Informàtica', type: 'Centro Tecnológico (REDIT)', sector: 'Transversal', region: 'C. Valenciana', category: 'universidad', desc: 'Big Data, IA y coordinador del EDIH valenciano.' },
  { id: 'redit', name: 'REDIT', type: 'Red de Institutos Tecnológicos', sector: 'Transversal', region: 'C. Valenciana', category: 'universidad', desc: 'Coordinación de 11 centros tecnológicos de la Comunitat Valenciana.' },
  { id: 'lafe', name: 'Hospital Universitario La Fe', type: 'Institución Sanitaria Pública', sector: 'Salud', region: 'C. Valenciana', category: 'sociedad', desc: 'Referente en IA clínica y datos de salud.' },
  { id: 'invattur', name: 'INVAT·TUR', type: 'Instituto Tecnologías Turísticas', sector: 'Turismo y Cultura', region: 'C. Valenciana', category: 'admin', desc: 'Turismo inteligente y analítica de destinos.' },
];

const categoryMeta = {
  universidad: { label: 'Educación Superior e I+D', icon: GraduationCap, color: 'text-purple-700', bg: 'bg-purple-100', border: 'border-purple-300' },
  empresa: { label: 'Empresa e Innovación', icon: Building2, color: 'text-blue-700', bg: 'bg-blue-100', border: 'border-blue-300' },
  admin: { label: 'Administración Pública', icon: Globe, color: 'text-green-700', bg: 'bg-green-100', border: 'border-green-300' },
  sociedad: { label: 'Sociedad Civil y ONG', icon: HeartHandshake, color: 'text-pink-700', bg: 'bg-pink-100', border: 'border-pink-300' },
};

const countryFlag: Record<string, string> = {
  ES: '🇪🇸', IT: '🇮🇹', DE: '🇩🇪', NO: '🇳🇴', FR: '🇫🇷',
  HR: '🇭🇷', PT: '🇵🇹', SE: '🇸🇪', BE: '🇧🇪', GR: '🇬🇷', BA: '🇧🇦',
};

export default function Network() {
  const [activeTab, setActiveTab] = useState<NetworkTab>('socios');
  const [activeCategory, setActiveCategory] = useState<HelixCategory>('todos');
  const [showForm, setShowForm] = useState(false);

  const filteredPartners = activeCategory === 'todos'
    ? partners
    : partners.filter((p) => p.category === activeCategory);

  const filteredStakeholders = activeCategory === 'todos'
    ? stakeholders
    : stakeholders.filter((s) => s.category === activeCategory);

  const partnerCounts = {
    universidad: partners.filter((p) => p.category === 'universidad').length,
    empresa: partners.filter((p) => p.category === 'empresa').length,
    admin: partners.filter((p) => p.category === 'admin').length,
    sociedad: partners.filter((p) => p.category === 'sociedad').length,
  };

  const stakeholderCounts = {
    universidad: stakeholders.filter((s) => s.category === 'universidad').length,
    empresa: stakeholders.filter((s) => s.category === 'empresa').length,
    admin: stakeholders.filter((s) => s.category === 'admin').length,
    sociedad: stakeholders.filter((s) => s.category === 'sociedad').length,
  };

  const countries = [...new Set(partners.map((p) => p.country))];

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">El Ecosistema AI-STEAM</h1>
          <p className="text-white/80 max-w-3xl text-base mb-6">
            Una red de innovación cuádruple hélice que conecta universidades, empresas, administraciones y sociedad civil. El consorcio AI-SECRETT impulsa la red, abierta a la adhesión de stakeholders de toda España y Europa.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{partners.length}</p>
              <p className="text-[11px] text-white/70 font-semibold uppercase mt-0.5">Socios Consorcio</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{stakeholders.length}</p>
              <p className="text-[11px] text-white/70 font-semibold uppercase mt-0.5">Stakeholders Red</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{countries.length}</p>
              <p className="text-[11px] text-white/70 font-semibold uppercase mt-0.5">Países</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{partners.length + stakeholders.length}</p>
              <p className="text-[11px] text-white/70 font-semibold uppercase mt-0.5">Total Organizaciones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Quadruple Helix */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
          <h2 className="text-xl font-bold text-eu-text mb-2">Modelo de Cuádruple Hélice</h2>
          <p className="text-sm text-gray-600 mb-5 max-w-3xl">
            La red se organiza según el modelo de innovación de cuádruple hélice, que reconoce el papel de la sociedad civil junto con la universidad, la empresa y la administración como motor de la innovación responsable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => {
              const Icon = meta.icon;
              const total = partnerCounts[key] + stakeholderCounts[key];
              return (
                <div key={key} className={`${meta.bg} ${meta.border} border rounded-xl p-4 text-center`}>
                  <Icon className={`w-6 h-6 ${meta.color} mx-auto mb-2`} />
                  <p className={`font-bold text-sm ${meta.color}`}>{meta.label}</p>
                  <p className="text-2xl font-extrabold text-gray-800 mt-1">{total}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{partnerCounts[key]} socios · {stakeholderCounts[key]} stakeholders</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs: Socios / Stakeholders */}
        <div className="flex gap-1 border-b border-eu-border mb-6">
          <button
            onClick={() => { setActiveTab('socios'); setActiveCategory('todos'); }}
            className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'socios' ? 'border-eu-blue text-eu-blue' : 'border-transparent text-gray-600 hover:text-eu-text'}`}
          >
            Socios del Consorcio AI-SECRETT ({partners.length})
          </button>
          <button
            onClick={() => { setActiveTab('stakeholders'); setActiveCategory('todos'); }}
            className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'stakeholders' ? 'border-eu-blue text-eu-blue' : 'border-transparent text-gray-600 hover:text-eu-text'}`}
          >
            Stakeholders de la Red ({stakeholders.length})
          </button>
        </div>

        {/* SOCIOS TAB */}
        {activeTab === 'socios' && (
          <>
            <p className="text-sm text-gray-600 mb-5 max-w-3xl">
              Los socios del consorcio AI-SECRETT son los <strong>21 beneficiarios</strong> del proyecto europeo, seleccionados en la convocatoria inicial. Su composición es fija durante la vida del proyecto.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setActiveCategory('todos')} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === 'todos' ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                Todos ({partners.length})
              </button>
              {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => (
                <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === key ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                  {meta.label} ({partnerCounts[key]})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
              {filteredPartners.map((p) => {
                const meta = categoryMeta[p.category];
                const Icon = meta.icon;
                return (
                  <div key={p.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-4 hover:border-eu-blue transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-lg ${meta.bg} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${meta.color}`} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{countryFlag[p.country] ?? '🌍'}</span>
                        <span className="text-[9px] bg-eu-blue/10 text-eu-blue font-bold px-1.5 py-0.5 rounded">CONSORCIO</span>
                      </div>
                    </div>
                    <p className="font-bold text-eu-text text-sm leading-snug mb-0.5">{p.name}</p>
                    <p className="text-[11px] font-mono text-gray-500 mb-2">{p.acronym} · {p.city}</p>
                    <p className="text-[10px] text-eu-teal font-semibold mb-2">{p.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.sectors.map((s) => (
                        <span key={s} className="text-[9px] bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Geographic Coverage */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-xl font-bold text-eu-text mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-eu-teal" /> Cobertura Geográfica del Consorcio
              </h2>
              <div className="flex flex-wrap gap-3">
                {countries.map((c) => {
                  const count = partners.filter((p) => p.country === c).length;
                  return (
                    <div key={c} className="bg-eu-bg border border-eu-border rounded-lg px-4 py-2.5 flex items-center gap-2">
                      <span className="text-xl">{countryFlag[c] ?? '🌍'}</span>
                      <div>
                        <p className="font-bold text-xs text-eu-text">{c}</p>
                        <p className="text-[10px] text-gray-500">{count} {count === 1 ? 'socio' : 'socios'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* STAKEHOLDERS TAB */}
        {activeTab === 'stakeholders' && (
          <>
            <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-600 max-w-3xl">
                  Los stakeholders son organizaciones adheridas voluntariamente a la red AI-STEAM. Su adhesión es <strong>gratuita</strong> (acuerdo de gasto cero) y les permite publicar retos, acceder a recursos formativos y participar en la gobernanza a través de ConsensUE.
                </p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 bg-eu-orange text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors border-none cursor-pointer shrink-0"
              >
                <UserPlus className="w-4 h-4" />
                {showForm ? 'Cerrar formulario' : 'Solicitar adhesión'}
              </button>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setActiveCategory('todos')} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === 'todos' ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                Todos ({stakeholders.length})
              </button>
              {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => (
                stakeholderCounts[key] > 0 && (
                  <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === key ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                    {meta.label} ({stakeholderCounts[key]})
                  </button>
                )
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {filteredStakeholders.map((s) => {
                const meta = categoryMeta[s.category];
                const Icon = meta.icon;
                return (
                  <div key={s.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-4 hover:border-eu-blue transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-lg ${meta.bg} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${meta.color}`} />
                      </div>
                      <span className="text-[9px] bg-eu-orange/10 text-eu-orange font-bold px-1.5 py-0.5 rounded">STAKEHOLDER</span>
                    </div>
                    <p className="font-bold text-eu-text text-sm leading-snug mb-0.5">{s.name}</p>
                    <p className="text-[11px] text-gray-500 mb-1">{s.type}</p>
                    <p className="text-[10px] text-eu-teal font-semibold mb-2">📍 {s.region}</p>
                    <p className="text-[11px] text-gray-600 mb-2">{s.desc}</p>
                    <span className="text-[9px] bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{s.sector}</span>
                  </div>
                );
              })}
            </div>

            {/* Adhesion Form — solo para stakeholders */}
            {showForm && (
              <div className="bg-white rounded-xl border-2 border-eu-orange shadow-sm overflow-hidden">
                <div className="bg-eu-orange/10 border-b border-eu-orange/30 px-6 py-4 flex items-center gap-3">
                  <UserPlus className="w-5 h-5 text-eu-orange" />
                  <div>
                    <h2 className="text-lg font-bold text-eu-text">Formulario de Adhesión como Stakeholder</h2>
                    <p className="text-xs text-gray-600 mt-0.5">Adhesión bajo el Acuerdo de Gasto Cero · Plazo abierto · Solo para organizaciones externas al consorcio</p>
                  </div>
                </div>
                <div className="p-6 bg-eu-bg">
                  <p className="text-sm text-gray-600 mb-6 max-w-2xl">
                    Al adherirte como stakeholder podrás publicar retos al Banco de Retos, acceder a recursos formativos, participar en la gobernanza vía ConsensUE y conectar con los socios del consorcio AI-SECRETT.
                  </p>
                  <form className="space-y-5 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Nombre de la Entidad *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="Ej. FEDACOVA, Hospital La Fe, Cluster Energía CV..." />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Categoría (Cuádruple Hélice) *</label>
                        <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                          <option>Educación Superior / Centro I+D</option>
                          <option>Empresa / PYME / Clúster</option>
                          <option>Administración Pública</option>
                          <option>ONG / Sociedad Civil</option>
                          <option>Centro de Formación Profesional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Sector Principal *</label>
                        <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                          <option>Industria y Manufactura</option>
                          <option>Salud y Bienestar</option>
                          <option>Medio Ambiente y Sostenibilidad</option>
                          <option>Educación e Investigación</option>
                          <option>Agroalimentario</option>
                          <option>Turismo y Cultura</option>
                          <option>Administración Pública</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Persona de Contacto *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="Nombre y apellidos" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">País *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" defaultValue="España" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Correo Electrónico Institucional *</label>
                        <input type="email" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="correo@entidad.com" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">Descripción breve y motivación para unirse</label>
                        <textarea rows={3} className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white resize-none" placeholder="Describa brevemente su entidad y su interés en la red AI-STEAM..."></textarea>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="gdpr" className="rounded border-eu-border" />
                      <label htmlFor="gdpr" className="text-xs text-gray-600">Acepto la <a href="#" className="text-eu-blue hover:underline">política de privacidad</a> y el tratamiento de mis datos según el RGPD</label>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-eu-orange text-white px-6 py-2.5 rounded-md font-bold border-none hover:bg-orange-600 transition-colors cursor-pointer">
                        Enviar solicitud de adhesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
