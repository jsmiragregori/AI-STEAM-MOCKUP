import { useState } from 'react';
import { Search, Plus, Calendar, Users, Tag } from 'lucide-react';

type LevelFilter = 'Todos' | 'Máster' | 'FP';
type StatusFilter = 'Todos' | 'Abierto' | 'En Resolución' | 'Resuelto';
type SectorFilter = 'Todos' | 'Industria' | 'Salud' | 'Medio Ambiente' | 'Educación' | 'Agroalimentario' | 'Turismo y Cultura' | 'Administración';

interface Challenge {
  id: string;
  title: string;
  entity: string;
  entityType: string;
  level: 'Máster' | 'FP';
  status: 'Abierto' | 'En Resolución' | 'Resuelto';
  sector: string;
  description: string;
  posted: string;
  deadline: string;
  teams: number;
  tags: string[];
  country: string;
}

const challenges: Challenge[] = [
  {
    id: 'r1',
    title: 'Optimización energética de museos públicos con IA',
    entity: 'Generalitat Valenciana (CEICE)',
    entityType: 'Administración Pública',
    level: 'FP',
    status: 'Abierto',
    sector: 'Administración',
    description: 'Desarrollo de un modelo predictivo para optimizar el consumo de HVAC en la red de museos públicos valencianos. Se busca reducir el consumo un 25% sin afectar al confort de visitantes.',
    posted: '10 Mar 2026',
    deadline: '30 Jun 2026',
    teams: 0,
    tags: ['HVAC', 'ML Predictivo', 'IoT', 'Eficiencia Energética'],
    country: '🇪🇸',
  },
  {
    id: 'r2',
    title: 'Detección de plagas en cítricos vía Computer Vision',
    entity: 'AVA-ASAJA Cooperativa',
    entityType: 'Empresa Agrícola',
    level: 'Máster',
    status: 'En Resolución',
    sector: 'Agroalimentario',
    description: 'Sistema de detección temprana de la Xylella fastidiosa y cotonet en cultivos de cítricos mediante drones y modelos de visión computacional entrenados con imágenes multiespectrales.',
    posted: '15 Ene 2026',
    deadline: '15 Jul 2026',
    teams: 3,
    tags: ['Computer Vision', 'Drones', 'Deep Learning', 'Xylella'],
    country: '🇪🇸',
  },
  {
    id: 'r3',
    title: 'Mantenimiento predictivo en líneas de embotellado',
    entity: 'Bodegas Murviedro SA',
    entityType: 'PYME Agroalimentaria',
    level: 'FP',
    status: 'Abierto',
    sector: 'Agroalimentario',
    description: 'Reducción de paradas no planificadas en líneas de embotellado de vino mediante sensórica vibratoria y modelos LSTM para la predicción de fallos en rodamientos y motores.',
    posted: '01 Feb 2026',
    deadline: '30 Ago 2026',
    teams: 1,
    tags: ['LSTM', 'Vibración', 'IoT Industrial', 'Industria 4.0'],
    country: '🇪🇸',
  },
  {
    id: 'r4',
    title: 'IA en triaje de urgencias pediátricas',
    entity: 'Hospital Universitario La Fe',
    entityType: 'Institución Sanitaria Pública',
    level: 'Máster',
    status: 'Abierto',
    sector: 'Salud',
    description: 'Modelo de apoyo a la decisión clínica para el triaje en urgencias pediátricas basado en constantes vitales, motivo de consulta (NLP) e historial clínico previo (HL7 FHIR).',
    posted: '05 Mar 2026',
    deadline: '30 Sep 2026',
    teams: 2,
    tags: ['NLP Clínico', 'FHIR', 'Triaje', 'Ética IA'],
    country: '🇪🇸',
  },
  {
    id: 'r5',
    title: 'Digitalización de colecciones patrimoniales con NLP multilingüe',
    entity: 'LPGA – Promoción Las Palmas',
    entityType: 'Administración Pública',
    level: 'Máster',
    status: 'En Resolución',
    sector: 'Turismo y Cultura',
    description: 'Uso de NLP y OCR para catalogar y enriquecer semánticamente 50.000 documentos históricos en español, inglés y neerlandés del archivo colonial de Gran Canaria.',
    posted: '20 Nov 2025',
    deadline: '20 May 2026',
    teams: 4,
    tags: ['NLP', 'OCR', 'Patrimonio Digital', 'Multilingüe'],
    country: '🇪🇸',
  },
  {
    id: 'r6',
    title: 'Predicción de calidad del agua en cuencas fluviales',
    entity: 'Region Värmland',
    entityType: 'Administración Regional',
    level: 'Máster',
    status: 'Abierto',
    sector: 'Medio Ambiente',
    description: 'Modelos de series temporales para predecir la concentración de nitratos y fosfatos en el lago Vänern usando datos de sensores remotos y registros históricos de 15 años.',
    posted: '01 Mar 2026',
    deadline: '30 Sep 2026',
    teams: 1,
    tags: ['Series Temporales', 'Teledetección', 'Calidad Agua', 'GIS'],
    country: '🇸🇪',
  },
  {
    id: 'r7',
    title: 'Sistema de recomendación de itinerarios turísticos sostenibles',
    entity: 'CulturaLink SL',
    entityType: 'Startup',
    level: 'FP',
    status: 'Abierto',
    sector: 'Turismo y Cultura',
    description: 'Motor de recomendación personalizado para turismo cultural en Canarias que integre criterios de sostenibilidad, preferencias de usuario y datos de afluencia en tiempo real.',
    posted: '12 Feb 2026',
    deadline: '12 Ago 2026',
    teams: 2,
    tags: ['Sistemas de Recomendación', 'Turismo Sostenible', 'LLM', 'API REST'],
    country: '🇪🇸',
  },
  {
    id: 'r8',
    title: 'Automatización del proceso de expedientes académicos con IA',
    entity: 'CEICE – Conselleria d\'Educació',
    entityType: 'Administración Pública',
    level: 'FP',
    status: 'Resuelto',
    sector: 'Educación',
    description: 'Sistema de extracción y validación automática de datos en expedientes académicos de la CV mediante OCR + LLM. Reducción del tiempo de tramitación del 70%.',
    posted: '01 Sep 2025',
    deadline: '28 Feb 2026',
    teams: 5,
    tags: ['OCR', 'RPA', 'LLM', 'Tramitación Electrónica'],
    country: '🇪🇸',
  },
  {
    id: 'r9',
    title: 'Detección de desinformación climática en redes sociales',
    entity: 'INESC TEC',
    entityType: 'Centro de Investigación',
    level: 'Máster',
    status: 'Abierto',
    sector: 'Medio Ambiente',
    description: 'Clasificador multilingüe (ES/PT/EN) para identificar narrativas de desinformación sobre cambio climático en Twitter/X y Mastodon usando modelos transformer y grafos de conocimiento.',
    posted: '20 Feb 2026',
    deadline: '20 Oct 2026',
    teams: 0,
    tags: ['NLP', 'Desinformación', 'Transformers', 'Redes Sociales'],
    country: '🇵🇹',
  },
];

const statusStyles: Record<string, string> = {
  'Abierto': 'bg-green-100 text-green-800',
  'En Resolución': 'bg-yellow-100 text-yellow-800',
  'Resuelto': 'bg-gray-100 text-gray-600',
};

const levelStyles: Record<string, string> = {
  FP: 'bg-orange-100 text-orange-800',
  Máster: 'bg-purple-100 text-purple-800',
};

export default function Marketplace() {
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('Todos');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('Todos');
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('Todos');
  const [search, setSearch] = useState('');
  const [showSubmit, setShowSubmit] = useState(false);

  const filtered = challenges.filter((c) => {
    if (levelFilter !== 'Todos' && c.level !== levelFilter) return false;
    if (statusFilter !== 'Todos' && c.status !== statusFilter) return false;
    if (sectorFilter !== 'Todos' && c.sector !== sectorFilter) return false;
    if (search && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.description.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const open = challenges.filter((c) => c.status === 'Abierto').length;
  const inProgress = challenges.filter((c) => c.status === 'En Resolución').length;
  const solved = challenges.filter((c) => c.status === 'Resuelto').length;

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold mb-2">Banco de Retos</h1>
            <p className="text-white/80 max-w-2xl text-base">
              Retos reales aportados por empresas, administraciones y centros de investigación. Los equipos de estudiantes de FP y Máster proponen soluciones usando IA.
            </p>
            <div className="flex gap-5 mt-5">
              <div className="text-center"><p className="text-2xl font-extrabold text-eu-yellow">{open}</p><p className="text-[11px] text-white/70 uppercase font-semibold">Abiertos</p></div>
              <div className="text-center"><p className="text-2xl font-extrabold text-eu-yellow">{inProgress}</p><p className="text-[11px] text-white/70 uppercase font-semibold">En Resolución</p></div>
              <div className="text-center"><p className="text-2xl font-extrabold text-eu-yellow">{solved}</p><p className="text-[11px] text-white/70 uppercase font-semibold">Resueltos</p></div>
            </div>
          </div>
          <button
            onClick={() => setShowSubmit(!showSubmit)}
            className="flex items-center gap-2 bg-eu-orange text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors border-none cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Publicar Reto
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Submit Form */}
        {showSubmit && (
          <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
            <h2 className="text-xl font-bold text-eu-text mb-1">Publicar un Nuevo Reto</h2>
            <p className="text-sm text-gray-600 mb-5">Comparte un desafío real de tu organización con los estudiantes de la red. Es gratuito y los equipos trabajarán con mentorización de la universidad.</p>
            <form className="space-y-4 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[13px] font-bold text-eu-text mb-1">Título del Reto *</label>
                <input type="text" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue" placeholder="Ej. Predicción de fallos en turbinas eólicas" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-eu-text mb-1">Nivel *</label>
                  <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                    <option>FP</option>
                    <option>Máster</option>
                    <option>Ambos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-eu-text mb-1">Sector *</label>
                  <select className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                    <option>Industria y Manufactura</option>
                    <option>Salud y Bienestar</option>
                    <option>Medio Ambiente</option>
                    <option>Educación</option>
                    <option>Agroalimentario</option>
                    <option>Turismo y Cultura</option>
                    <option>Administración Pública</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-eu-text mb-1">Plazo límite *</label>
                  <input type="date" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-eu-text mb-1">Descripción del Reto *</label>
                <textarea rows={4} className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue resize-none" placeholder="Describe el problema, el contexto, los datos disponibles y los resultados esperados..."></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowSubmit(false)} className="px-5 py-2 rounded-md border border-eu-border text-eu-text text-sm font-bold hover:bg-eu-bg transition-colors cursor-pointer">
                  Cancelar
                </button>
                <button type="submit" className="bg-eu-orange text-white px-6 py-2.5 rounded-md font-bold border-none hover:bg-orange-600 transition-colors cursor-pointer">
                  Enviar Reto
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-5 mb-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-50">
              <label className="block text-[12px] font-bold text-gray-500 uppercase mb-1">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border border-eu-border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-eu-blue"
                  placeholder="Buscar por título o descripción..."
                />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-500 uppercase mb-1">Nivel</label>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value as LevelFilter)}
                className="border border-eu-border rounded-md p-2 text-sm bg-white focus:outline-none focus:border-eu-blue"
              >
                <option value="Todos">Todos</option>
                <option value="FP">FP</option>
                <option value="Máster">Máster</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-500 uppercase mb-1">Estado</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                className="border border-eu-border rounded-md p-2 text-sm bg-white focus:outline-none focus:border-eu-blue"
              >
                <option value="Todos">Todos</option>
                <option value="Abierto">Abierto</option>
                <option value="En Resolución">En Resolución</option>
                <option value="Resuelto">Resuelto</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-500 uppercase mb-1">Sector</label>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value as SectorFilter)}
                className="border border-eu-border rounded-md p-2 text-sm bg-white focus:outline-none focus:border-eu-blue"
              >
                <option value="Todos">Todos</option>
                <option>Industria</option>
                <option>Salud</option>
                <option>Medio Ambiente</option>
                <option>Educación</option>
                <option>Agroalimentario</option>
                <option>Turismo y Cultura</option>
                <option>Administración</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">Mostrando <strong>{filtered.length}</strong> de {challenges.length} retos</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ch) => (
            <div key={ch.id} className="bg-white rounded-xl border border-eu-border shadow-sm flex flex-col hover:border-eu-blue transition-colors">
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${levelStyles[ch.level]}`}>
                    Reto {ch.level}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${statusStyles[ch.status]}`}>
                    {ch.status}
                  </span>
                </div>
                <h3 className="font-bold text-eu-text text-sm mb-1 leading-snug">{ch.title}</h3>
                <p className="text-xs text-gray-500 mb-1 font-semibold">{ch.country} {ch.entity}</p>
                <p className="text-[10px] text-gray-400 mb-3">{ch.entityType}</p>
                <p className="text-xs text-gray-600 mb-4 line-clamp-2">{ch.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ch.tags.slice(0, 3).map((t) => (
                    <span key={t} className="flex items-center gap-1 text-[10px] bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">
                      <Tag className="w-2.5 h-2.5" />{t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[10px] text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Plazo: {ch.deadline}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{ch.teams} {ch.teams === 1 ? 'equipo' : 'equipos'}</span>
                </div>
              </div>
              <div className="border-t border-eu-border p-3 flex items-center justify-between bg-eu-bg">
                <span className="text-[10px] font-bold text-eu-teal uppercase bg-eu-teal/10 px-2 py-0.5 rounded">{ch.sector}</span>
                <button className="text-eu-blue font-bold text-xs bg-transparent border-none cursor-pointer hover:underline">
                  Ver y Aplicar →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg font-semibold mb-2">No se encontraron retos con estos filtros</p>
            <p className="text-sm">Prueba a modificar los criterios de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
