import { useState } from 'react';
import { Building2, GraduationCap, HeartHandshake, Globe, MapPin, UserPlus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
  role: 'coordinator' | 'beneficiary' | 'certification' | 'associated';
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
  { id: 'uveg', name: 'Universitat de València', acronym: 'UVEG', country: 'ES', city: 'Valencia', category: 'universidad', sectors: ['Educación', 'Industria'], role: 'coordinator' },
  { id: 'umu', name: 'Universidad de Murcia', acronym: 'UMU', country: 'ES', city: 'Murcia', category: 'universidad', sectors: ['Salud', 'Educación'], role: 'beneficiary' },
  { id: 'upv', name: 'Universitat Politècnica de València', acronym: 'UPV', country: 'ES', city: 'Valencia', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'beneficiary' },
  { id: 'ntnu', name: 'NTNU – Norwegian Univ. of S&T', acronym: 'NTNU', country: 'NO', city: 'Trondheim', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'beneficiary' },
  { id: 'hsw', name: 'Hochschule Wismar', acronym: 'HSW', country: 'DE', city: 'Wismar', category: 'universidad', sectors: ['Industria', 'Educación'], role: 'beneficiary' },
  { id: 'fidit', name: 'Univ. de Rijeka – FIDIT', acronym: 'FIDIT', country: 'HR', city: 'Rijeka', category: 'universidad', sectors: ['Educación', 'Administración'], role: 'beneficiary' },
  { id: 'uda', name: "Univ. Gabriele d'Annunzio", acronym: "Ud'A", country: 'IT', city: 'Chieti-Pescara', category: 'universidad', sectors: ['Salud', 'Industria'], role: 'beneficiary' },
  { id: 'esad', name: 'ESAD Grenoble-Valence', acronym: 'ESAD-GV', country: 'FR', city: 'Grenoble', category: 'universidad', sectors: ['Turismo y Cultura'], role: 'beneficiary' },
  { id: 'inesc', name: 'INESC TEC', acronym: 'INESC', country: 'PT', city: 'Porto', category: 'universidad', sectors: ['Industria', 'Medio Ambiente'], role: 'beneficiary' },
  { id: 'ceice', name: "Conselleria d'Educació (CEICE)", acronym: 'CEICE', country: 'ES', city: 'Valencia', category: 'admin', sectors: ['Educación', 'Administración'], role: 'beneficiary' },
  { id: 'lpga', name: 'Promoción Las Palmas de GC', acronym: 'LPGA', country: 'ES', city: 'Las Palmas', category: 'admin', sectors: ['Turismo y Cultura', 'Administración'], role: 'beneficiary' },
  { id: 'varm', name: 'Region Värmland', acronym: 'VARM', country: 'SE', city: 'Karlstad', category: 'admin', sectors: ['Medio Ambiente', 'Administración'], role: 'beneficiary' },
  { id: 'preda', name: 'Agencia Desarrollo Prijedor', acronym: 'PREDA', country: 'BA', city: 'Prijedor', category: 'admin', sectors: ['Administración', 'Industria'], role: 'beneficiary' },
  { id: 'cogn', name: 'Cognito S.R.L.', acronym: 'COGN', country: 'IT', city: 'Massa', category: 'empresa', sectors: ['Industria', 'Educación'], role: 'beneficiary' },
  { id: 'tuvit', name: 'TÜV Thüringen Italia', acronym: 'TUV.IT', country: 'IT', city: 'Collecchio', category: 'empresa', sectors: ['Industria'], role: 'certification' },
  { id: 'joist', name: 'The Factory IKE (JOIST)', acronym: 'JOIST', country: 'GR', city: 'Larissa', category: 'empresa', sectors: ['Industria', 'Turismo y Cultura'], role: 'beneficiary' },
  { id: 'clink', name: 'CulturaLink SL', acronym: 'C-LINK', country: 'ES', city: 'Las Palmas', category: 'empresa', sectors: ['Turismo y Cultura'], role: 'beneficiary' },
  { id: 'cink', name: 'CINK Venturing SL', acronym: 'CINK', country: 'ES', city: 'Madrid', category: 'empresa', sectors: ['Industria', 'Agroalimentario'], role: 'beneficiary' },
  { id: 'lc', name: 'The Lisbon Council', acronym: 'LC', country: 'BE', city: 'Bruselas', category: 'sociedad', sectors: ['Administración', 'Educación'], role: 'beneficiary' },
  { id: 'kea', name: 'KEA European Affairs', acronym: 'KEA', country: 'BE', city: 'Bruselas', category: 'sociedad', sectors: ['Turismo y Cultura'], role: 'beneficiary' },
  { id: 'ife', name: 'Inspiring Futures Europe', acronym: 'IF.E', country: 'ES', city: 'Madrid', category: 'sociedad', sectors: ['Educación'], role: 'beneficiary' },
  { id: 'rce', name: 'Relais Culture Europe', acronym: 'RCE', country: 'FR', city: 'París', category: 'sociedad', sectors: ['Turismo y Cultura'], role: 'associated' },
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
  universidad: { icon: GraduationCap, color: 'text-purple-700', bg: 'bg-purple-100', border: 'border-purple-300' },
  empresa: { icon: Building2, color: 'text-blue-700', bg: 'bg-blue-100', border: 'border-blue-300' },
  admin: { icon: Globe, color: 'text-green-700', bg: 'bg-green-100', border: 'border-green-300' },
  sociedad: { icon: HeartHandshake, color: 'text-pink-700', bg: 'bg-pink-100', border: 'border-pink-300' },
};

const getRoleLabel = (roleCode: string, networkT: any): string => {
  const roleMap: Record<string, string> = {
    coordinator: networkT?.coordinator || 'Coordinator',
    beneficiary: networkT?.beneficiary || 'Beneficiary Partner',
    certification: networkT?.certification || 'Certification',
    associated: networkT?.associated || 'Associated Partner',
  };
  return roleMap[roleCode] || roleCode;
};

const getStakeholderType = (type: string, language: string): string => {
  const typeMap: Record<string, Record<string, string>> = {
    'Agencia estatal regulatoria': { es: 'Agencia estatal regulatoria', en: 'State regulatory agency', va: 'Agència estatal reguladora' },
    'Agencia de Innovación Regional': { es: 'Agencia de Innovación Regional', en: 'Regional Innovation Agency', va: 'Agència d\'Innovació Regional' },
    'Organismo Público': { es: 'Organismo Público', en: 'Public Organization', va: 'Organisme Públic' },
    'Centro de Innovación Urbana': { es: 'Centro de Innovación Urbana', en: 'Urban Innovation Center', va: 'Centre d\'Innovació Urbana' },
    'Federación Agroalimentaria': { es: 'Federación Agroalimentaria', en: 'Agrifood Federation', va: 'Federació Agroalimentària' },
    'Asociación de Agricultores': { es: 'Asociación de Agricultores', en: 'Farmers Association', va: 'Associació d\'Agricultors' },
    'Federación Metalúrgica': { es: 'Federación Metalúrgica', en: 'Metalworking Federation', va: 'Federació Metal·lúrgica' },
    'Asoc. Fabricantes de Azulejos': { es: 'Asoc. Fabricantes de Azulejos', en: 'Tile Manufacturers Association', va: 'Assoc. Fabricants d\'Azullejos' },
    'Empresa de Gestión del Agua': { es: 'Empresa de Gestión del Agua', en: 'Water Management Company', va: 'Empresa de Gestió de l\'Aigua' },
    'Empresa Tecnológica': { es: 'Empresa Tecnológica', en: 'Technology Company', va: 'Empresa Tecnològica' },
    'Centro Tecnológico (REDIT)': { es: 'Centro Tecnológico (REDIT)', en: 'Technology Center (REDIT)', va: 'Centre Tecnològic (REDIT)' },
    'Red de Institutos Tecnológicos': { es: 'Red de Institutos Tecnológicos', en: 'Network of Technology Centers', va: 'Xarxa d\'Instituts Tecnològics' },
    'Institución Sanitaria Pública': { es: 'Institución Sanitaria Pública', en: 'Public Health Institution', va: 'Institució Sanitària Pública' },
    'Instituto Tecnologías Turísticas': { es: 'Instituto Tecnologías Turísticas', en: 'Tourism Technology Institute', va: 'Institut Tecnologies Turístiques' },
  };
  return typeMap[type]?.[language] || type;
};

const getRegionLabel = (region: string, language: string): string => {
  const regionMap: Record<string, Record<string, string>> = {
    'Nacional': { es: 'Nacional', en: 'National', va: 'Nacional' },
    'C. Valenciana': { es: 'C. Valenciana', en: 'C. Valenciana', va: 'C. Valenciana' },
  };
  return regionMap[region]?.[language] || region;
};

const getStakeholderDesc = (id: string, language: string): string => {
  const descMap: Record<string, Record<string, string>> = {
    'aesia': { es: 'Supervisión regulatoria y ética de la IA en España.', en: 'AI regulatory supervision and ethics in Spain.', va: 'Supervisió regulatòria i ética de la IA a Espanya.' },
    'ivace': { es: 'Financiación de innovación y enlace con PYMEs.', en: 'Innovation funding and liaison with SMEs.', va: 'Finançament d\'innovació i enllaç amb PIMEs.' },
    'dgtic': { es: 'Dirección General de Tecnologías de la Información y las Comunicaciones de la GVA.', en: 'General Directorate of Information and Communication Technologies of the GVA.', va: 'Direcció General de Tecnologies de la Informació i les Comunicacions de la GVA.' },
    'lasnaves': { es: 'Living lab urbano, misiones 2030 de la ciudad de Valencia.', en: 'Urban living lab, 2030 missions of the city of Valencia.', va: 'Living lab urbà, missions 2030 de la ciutat de València.' },
    'fedacova': { es: 'Agrupa 30 asociaciones de la industria transformadora agroalimentaria.', en: 'Groups 30 associations of the agrifood processing industry.', va: 'Agrupa 30 associacions de la indústria transformadora agroalimentària.' },
    'avaasaja': { es: 'Digitalización rural y representación de la base productiva agrícola.', en: 'Rural digitalization and representation of the agricultural productive base.', va: 'Digitalització rural i representació de la base productiva agrícola.' },
    'femeval': { es: 'Transformación digital del sector metal valenciano.', en: 'Digital transformation of the Valencian metal sector.', va: 'Transformació digital del sector metal valencià.' },
    'ascer': { es: 'Clúster cerámico, eficiencia energética e IA en diseño.', en: 'Ceramic cluster, energy efficiency and AI in design.', va: 'Clúster ceràmic, eficiència energètica i IA en disseny.' },
    'globalomnium': { es: 'IA en ciclo integral del agua y gemelos digitales.', en: 'AI in the complete water cycle and digital twins.', va: 'IA en cicle integral de l\'aigua i bessons digitals.' },
    'brainstorm': { es: 'Gráficos 3D en tiempo real y estudios virtuales con IA.', en: 'Real-time 3D graphics and virtual studios with AI.', va: 'Gràfics 3D en temps real i estudis virtuals amb IA.' },
    'iti': { es: 'Big Data, IA y coordinador del EDIH valenciano.', en: 'Big Data, AI and coordinator of the Valencian EDIH.', va: 'Big Data, IA i coordinador de l\'EDIH valencià.' },
    'redit': { es: 'Coordinación de 11 centros tecnológicos de la Comunitat Valenciana.', en: 'Coordination of 11 technology centers in the Valencian Community.', va: 'Coordinació de 11 centres tecnològics de la Comunitat Valenciana.' },
    'lafe': { es: 'Referente en IA clínica y datos de salud.', en: 'Leader in clinical AI and health data.', va: 'Referent en IA clínica i dades de salut.' },
    'invattur': { es: 'Turismo inteligente y analítica de destinos.', en: 'Smart tourism and destination analytics.', va: 'Turisme intel·ligent i analítica de destinacions.' },
  };
  return descMap[id]?.[language] || '';
};

export default function Network() {
  const { t, language } = useLanguage();
  const networkT = t('network');
  const [activeTab, setActiveTab] = useState<NetworkTab>('socios');
  const [activeCategory, setActiveCategory] = useState<HelixCategory>('todos');
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filteredPartners = partners.filter((p) => {
    const matchCategory = activeCategory === 'todos' || p.category === activeCategory;
    const matchCountry = filterCountry === null || p.country === filterCountry;
    return matchCategory && matchCountry;
  });

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
          <h1 className="text-3xl font-extrabold mb-3">{t('network.title')}</h1>
          <p className="text-white/80 max-w-3xl text-base mb-6">
            {t('network.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{partners.length}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('network.stats.consortiumPartners')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{stakeholders.length}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('network.stats.stakeholdersNetwork')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{countries.length}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('network.stats.countries')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{partners.length + stakeholders.length}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('network.stats.totalOrganizations')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Quadruple Helix */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
          <h2 className="text-xl font-bold text-eu-text mb-2">{networkT?.helixTitle}</h2>
          <p className="text-sm text-gray-600 mb-5 max-w-3xl">
            {networkT?.helixDesc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => {
              const Icon = meta.icon;
              const total = partnerCounts[key] + stakeholderCounts[key];
              const categoryLabel = networkT?.categoryLabels?.[key as keyof typeof networkT.categoryLabels] || key;
              return (
                <div key={key} className={`${meta.bg} ${meta.border} border rounded-xl p-4 text-center`}>
                  <Icon className={`w-6 h-6 ${meta.color} mx-auto mb-2`} />
                  <p className={`font-bold text-sm ${meta.color}`}>{categoryLabel}</p>
                  <p className="text-2xl font-extrabold text-gray-800 mt-1">{total}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{partnerCounts[key]} {networkT?.sociosLabel} · {stakeholderCounts[key]} {networkT?.stakeholdersLabel}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs: Socios / Stakeholders */}
        <div className="flex gap-1 border-b border-eu-border mb-6">
          <button
            onClick={() => { setActiveTab('socios'); setActiveCategory('todos'); setFilterCountry(null); }}
            className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'socios' ? 'border-eu-blue text-eu-blue' : 'border-transparent text-gray-600 hover:text-eu-text'}`}
          >
            {networkT?.partnersTabTitle} ({partners.length})
          </button>
          <button
            onClick={() => { setActiveTab('stakeholders'); setActiveCategory('todos'); setFilterCountry(null); }}
            className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'stakeholders' ? 'border-eu-blue text-eu-blue' : 'border-transparent text-gray-600 hover:text-eu-text'}`}
          >
            {networkT?.stakeholdersTabTitle} ({stakeholders.length})
          </button>
        </div>

        {/* SOCIOS TAB */}
        {activeTab === 'socios' && (
          <>
            <p className="text-sm text-gray-600 mb-5 max-w-3xl" dangerouslySetInnerHTML={{ __html: networkT?.partnersDesc || '' }} />

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setActiveCategory('todos')} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === 'todos' ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                {networkT?.filterAll} ({partners.length})
              </button>
              {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => {
                const categoryLabel = networkT?.categoryLabels?.[key as keyof typeof networkT.categoryLabels] || key;
                return (
                  <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === key ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                    {categoryLabel} ({partnerCounts[key]})
                  </button>
                );
              })}
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
                        <img
                          src={`https://flagcdn.com/20x15/${p.country.toLowerCase()}.png`}
                          alt={networkT?.countryNames?.[p.country as keyof typeof networkT.countryNames] ?? p.country}
                          className="rounded-sm"
                        />
                        <span className="text-xs bg-eu-blue/10 text-eu-blue font-bold px-1.5 py-0.5 rounded">{networkT?.consortium}</span>
                      </div>
                    </div>
                    <p className="font-bold text-eu-text text-sm leading-snug mb-0.5">{p.name}</p>
                    <p className="text-sm font-mono text-gray-500 mb-2">{p.acronym} · {p.city}</p>
                    <p className="text-sm text-eu-teal font-semibold mb-2">{getRoleLabel(p.role, networkT)}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.sectors.map((s) => (
                        <span key={s} className="text-xs bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Geographic Coverage */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-eu-text flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-eu-teal" /> {networkT?.geographicCoverage}
                </h2>
                {filterCountry && (
                  <button
                    onClick={() => { setFilterCountry(null); setActiveCategory('todos'); }}
                    className="text-xs font-bold text-eu-blue hover:underline cursor-pointer bg-transparent border-none"
                  >
                    {networkT?.clearFilter}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {countries.map((c) => {
                  const count = partners.filter((p) => p.country === c).length;
                  const isActive = filterCountry === c;
                  return (
                    <button
                      key={c}
                      onClick={() => { setFilterCountry(isActive ? null : c); setActiveCategory('todos'); }}
                      className={`rounded-xl p-4 flex flex-col items-center gap-2 border-2 transition-all cursor-pointer text-center ${
                        isActive
                          ? 'bg-eu-blue border-eu-blue shadow-md'
                          : 'bg-eu-bg border-eu-border hover:border-eu-blue hover:shadow-sm'
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/48x36/${c.toLowerCase()}.png`}
                        alt={networkT?.countryNames?.[c as keyof typeof networkT.countryNames] ?? c}
                        className="w-10 h-auto rounded-sm shadow-sm"
                      />
                      <p className={`font-bold text-xs leading-tight ${isActive ? 'text-white' : 'text-eu-text'}`}>
                        {networkT?.countryNames?.[c as keyof typeof networkT.countryNames] ?? c}
                      </p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-eu-blue/10 text-eu-blue'
                      }`}>
                        {count} {count === 1 ? networkT?.member : networkT?.members}
                      </span>
                    </button>
                  );
                })}
              </div>
              {filterCountry && (
                <p className="text-xs text-gray-500 mt-4">
                  {networkT?.filteringPartners} <strong>{networkT?.countryNames?.[filterCountry as keyof typeof networkT.countryNames]}</strong>. {networkT?.resultsMessage}
                </p>
              )}
            </div>
          </>
        )}

        {/* STAKEHOLDERS TAB */}
        {activeTab === 'stakeholders' && (
          <>
            <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-600 max-w-3xl" dangerouslySetInnerHTML={{ __html: networkT?.stakeholdersDesc || '' }} />
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 bg-eu-orange text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-eu-purple transition-colors border-none cursor-pointer shrink-0"
              >
                <UserPlus className="w-4 h-4" />
                {showForm ? networkT?.closeForm : networkT?.requestMembership}
              </button>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-5">
              <button onClick={() => setActiveCategory('todos')} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === 'todos' ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                {networkT?.stakeholdersFilterAll} ({stakeholders.length})
              </button>
              {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta[keyof typeof categoryMeta]][]).map(([key, meta]) => (
                stakeholderCounts[key] > 0 && (
                  <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${activeCategory === key ? 'bg-eu-blue text-white border-eu-blue' : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'}`}>
                    {networkT?.categoryLabels?.[key as keyof typeof networkT.categoryLabels] || key} ({stakeholderCounts[key]})
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
                      <span className="text-xs bg-eu-orange/10 text-eu-orange font-bold px-1.5 py-0.5 rounded">{networkT?.stakeholderBadge}</span>
                    </div>
                    <p className="font-bold text-eu-text text-sm leading-snug mb-0.5">{s.name}</p>
                    <p className="text-sm text-gray-500 mb-1">{getStakeholderType(s.type, language)}</p>
                    <p className="text-sm text-eu-teal font-semibold mb-2">📍 {getRegionLabel(s.region, language)}</p>
                    <p className="text-sm text-gray-600 mb-2">{getStakeholderDesc(s.id, language)}</p>
                    <span className="text-xs bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{s.sector}</span>
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
                    <h2 className="text-lg font-bold text-eu-text">{networkT?.formTitle}</h2>
                    <p className="text-xs text-gray-600 mt-0.5">{networkT?.formSubtitle}</p>
                  </div>
                </div>
                <div className="p-6 bg-eu-bg">
                  <p className="text-sm text-gray-600 mb-6 max-w-2xl">
                    {networkT?.formDescription}
                  </p>
                  <form className="space-y-5 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.entityName} *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="Ej. FEDACOVA, Hospital La Fe, Cluster Energía CV..." />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.category} *</label>
                        <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                          <option>{networkT?.categoryOptions?.university}</option>
                          <option>{networkT?.categoryOptions?.company}</option>
                          <option>{networkT?.categoryOptions?.admin}</option>
                          <option>{networkT?.categoryOptions?.civil}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.sector} *</label>
                        <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                          <option>{networkT?.sectorOptions?.manufacturing}</option>
                          <option>{networkT?.sectorOptions?.mobility}</option>
                          <option>{networkT?.sectorOptions?.energy}</option>
                          <option>{networkT?.sectorOptions?.agrifood}</option>
                          <option>{networkT?.sectorOptions?.cci}</option>
                          <option>{networkT?.sectorOptions?.housing}</option>
                          <option>{networkT?.sectorOptions?.services}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.contact} *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="Nombre y apellidos" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.country} *</label>
                        <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" defaultValue="España" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.email} *</label>
                        <input type="email" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white" placeholder="correo@entidad.com" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[13px] font-bold text-eu-text mb-1">{networkT?.formFields?.description}</label>
                        <textarea rows={3} className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue bg-white resize-none" placeholder="Describa brevemente su entidad y su interés en la red AI-STEAM..."></textarea>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="gdpr" className="rounded border-eu-border" />
                      <label htmlFor="gdpr" className="text-xs text-gray-600">{networkT?.acceptTerms} <a href="#" className="text-eu-blue hover:underline">{networkT?.privacyPolicy}</a> {networkT?.rgpd}</label>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="bg-eu-orange text-white px-6 py-2.5 rounded-md font-bold border-none hover:bg-eu-purple transition-colors cursor-pointer">
                        {networkT?.submitBtn}
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

