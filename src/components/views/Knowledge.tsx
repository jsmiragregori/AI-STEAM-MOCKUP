import { useState } from 'react';
import { FileText, Download, Award, ArrowRight, Search, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

type KnowledgeTab = 'flujo' | 'oer' | 'insignias' | 'repositorio';

interface OERResource {
  id: string;
  title: string;
  type: 'Guía' | 'Manual' | 'Dataset' | 'Vídeo' | 'Plantilla';
  sector: string;
  level: 'FP' | 'Máster' | 'Docentes' | 'Todos';
  license: string;
  author: string;
  date: string;
  downloads: number;
  lang: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  sector: string;
  level: string;
  color: string;
  issued: number;
  criteria: string[];
}

const oerResources: OERResource[] = [
  { id: 'o1', title: 'Guía de Ética en IA para FP', type: 'Guía', sector: 'nts', level: 'FP', license: 'CC-BY-SA 4.0', author: 'CEICE / IF.E', date: 'Mar 2026', downloads: 1420, lang: 'ES / VA' },
  { id: 'o2', title: 'Manual de Gemelos Digitales v2.1', type: 'Manual', sector: 'mfg', level: 'Máster', license: 'CC-BY 4.0', author: 'INESC TEC / HSW', date: 'Feb 2026', downloads: 876, lang: 'EN / ES' },
  { id: 'o3', title: 'Dataset Plagas Cítricos CV (10K imágenes)', type: 'Dataset', sector: 'agr', level: 'Máster', license: 'CC-BY-NC 4.0', author: 'AVA-ASAJA / UVEG', date: 'Ene 2026', downloads: 543, lang: 'ES' },
  { id: 'o4', title: 'Plantilla Análisis de Sesgo en Modelos de IA', type: 'Plantilla', sector: 'Todos', level: 'Todos', license: 'CC-BY-SA 4.0', author: 'COGN / LC', date: 'Dic 2025', downloads: 2105, lang: 'EN / ES / FR' },
  { id: 'o5', title: 'Introducción a ML con Python para FP – Vídeo (12h)', type: 'Vídeo', sector: 'nts', level: 'FP', license: 'CC-BY 4.0', author: 'UMU / CEICE', date: 'Nov 2025', downloads: 3210, lang: 'ES / VA' },
  { id: 'o6', title: 'Guía Reglamento IA UE para la Administración', type: 'Guía', sector: 'nts', level: 'Docentes', license: 'CC-BY-SA 4.0', author: 'LC / CEICE', date: 'Feb 2026', downloads: 789, lang: 'ES / EN' },
  { id: 'o7', title: 'Manual de NLP para Análisis Clínico', type: 'Manual', sector: 'nts', level: 'Máster', license: 'CC-BY-NC-SA 4.0', author: "Ud'A / UVEG", date: 'Mar 2026', downloads: 412, lang: 'IT / EN' },
  { id: 'o8', title: 'Dataset Imágenes Patrimonio Cultural (5K)', type: 'Dataset', sector: 'cci', level: 'Máster', license: 'CC-BY 4.0', author: 'LPGA / ESAD-GV', date: 'Ene 2026', downloads: 298, lang: 'ES / EN' },
];

const badges: Badge[] = [
  { id: 'b1', name: 'AI-Industry Badge', description: 'Competencias en IA aplicada a entornos industriales y mantenimiento predictivo', sector: 'mfg', level: 'FP', color: 'bg-blue-500', issued: 234, criteria: ['Completar módulo IND-FP-01', 'Superar evaluación práctica', 'Resolver 1 reto del Banco'] },
  { id: 'b2', name: 'HealthAI Badge', description: 'Aplicación de ML en diagnóstico y gestión clínica con perspectiva ética', sector: 'nts', level: 'Máster', color: 'bg-red-500', issued: 87, criteria: ['Completar módulo SAL-MST-02', 'Trabajo de investigación clínica', 'Validación TÜV'] },
  { id: 'b3', name: 'EduAI Literacy Badge', description: 'Competencia digital en IA para docentes de FP y educación secundaria', sector: 'nts', level: 'Docentes', color: 'bg-teal-600', issued: 524, criteria: ['Curso online 30h', 'Diseño de unidad didáctica IA', 'Evaluación por pares'] },
  { id: 'b4', name: 'GreenAI Badge', description: 'IA para monitorización ambiental, energía y economía circular', sector: 'ene', level: 'FP', color: 'bg-green-600', issued: 143, criteria: ['Módulo MED-FP-03', 'Proyecto de sensórica ambiental', 'Informe de impacto'] },
  { id: 'b5', name: 'AgroAI Badge', description: 'Técnicas de IA para agricultura de precisión y trazabilidad alimentaria', sector: 'agr', level: 'FP', color: 'bg-yellow-600', issued: 198, criteria: ['Módulo AGR-FP-01', 'Práctica con drones y sensores', 'Reto Banco de Retos'] },
  { id: 'b6', name: 'CreativeAI Badge', description: 'IA generativa aplicada al patrimonio, diseño y turismo cultural', sector: 'cci', level: 'Máster', color: 'bg-pink-600', issued: 72, criteria: ['Módulo TUR-MST-04', 'Proyecto creativo con IA', 'Exposición pública'] },
  { id: 'b7', name: 'GovAI Badge', description: 'IA en servicios públicos: automatización, transparencia y ética', sector: 'nts', level: 'Docentes', color: 'bg-slate-600', issued: 211, criteria: ['Curso GovAI 40h', 'Caso práctico de tramitación', 'Test Reglamento IA UE'] },
  { id: 'b8', name: 'DigitalTwin Badge', description: 'Modelado, simulación y análisis de gemelos digitales industriales', sector: 'mfg', level: 'Máster', color: 'bg-indigo-600', issued: 54, criteria: ['Módulo IND-MST-05', 'Proyecto con plataforma de simulación', 'Validación TÜV'] },
];

const typeIcons: Record<string, string> = {
  'Guía': '📖',
  'Manual': '📋',
  'Dataset': '🗄️',
  'Vídeo': '🎬',
  'Plantilla': '📝',
};

const levelColors: Record<string, string> = {
  FP: 'bg-orange-100 text-orange-800',
  Máster: 'bg-purple-100 text-purple-800',
  Docentes: 'bg-teal-100 text-teal-800',
  Todos: 'bg-gray-100 text-gray-600',
};

const flowSteps = [
  { n: 1, title: 'Reto Detectado', desc: 'Empresa o institución publica un desafío real en el Banco de Retos', icon: '🏭' },
  { n: 2, title: 'Evaluación de la Red', desc: 'El Comité Científico valora la viabilidad y asigna nivel (FP/Máster)', icon: '🔍' },
  { n: 3, title: 'Asignación de Equipo', desc: 'Estudiantes o grupos de investigación se postulan para resolver el reto', icon: '👥' },
  { n: 4, title: 'Prototipo Académico', desc: 'Se desarrolla una solución en colaboración con tutores universitarios', icon: '💻' },
  { n: 5, title: 'Validación Industrial', desc: 'La empresa valida el prototipo y co-certifica los resultados', icon: '✅' },
  { n: 6, title: 'Caso de Éxito OER', desc: 'La solución se publica como recurso abierto en el repositorio de la red', icon: '🌐' },
];

export default function Knowledge() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<KnowledgeTab>('flujo');
  const [oerSearch, setOerSearch] = useState('');

  const getSectorName = (sectorId: string): string => {
    if (sectorId === 'Todos') return 'Todos';
    const sectorNames = t('sectors.sectorNames') as Record<string, string>;
    return sectorNames[sectorId] || sectorId;
  };

  const filteredOER = oerResources.filter((r) =>
    oerSearch === '' || r.title.toLowerCase().includes(oerSearch.toLowerCase()) || getSectorName(r.sector).toLowerCase().includes(oerSearch.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Transferencia de Conocimiento</h1>
          <p className="text-white/80 max-w-3xl text-base">
            El ciclo completo desde el reto industrial hasta el recurso educativo abierto. Recursos OER, micro-credenciales y el repositorio de casos de éxito de la red AI-STEAM.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{oerResources.length}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">Recursos OER</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{badges.reduce((a, b) => a + b.issued, 0).toLocaleString()}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">Insignias Emitidas</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{oerResources.reduce((a, r) => a + r.downloads, 0).toLocaleString()}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">Descargas Totales</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-eu-border mb-8">
          {([
            { id: 'flujo', label: 'Ciclo de Conocimiento' },
            { id: 'oer', label: 'Repositorio OER' },
            { id: 'insignias', label: 'Muro de Insignias' },
            { id: 'repositorio', label: 'Casos de Éxito' },
          ] as { id: KnowledgeTab; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${
                activeTab === t.id
                  ? 'border-eu-blue text-eu-blue bg-transparent'
                  : 'border-transparent text-gray-600 hover:text-eu-text'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Flujo */}
        {activeTab === 'flujo' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">Del Reto Industrial al Recurso Educativo Abierto</h2>
            <p className="text-sm text-gray-600 mb-8 max-w-3xl">
              La red transforma los desafíos reales de las organizaciones en conocimiento educativo de calidad, siguiendo un proceso estructurado de 6 etapas validado por el consorcio AI-SECRETT.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {flowSteps.map((step) => (
                <div key={step.n} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-eu-blue text-white flex items-center justify-center font-extrabold text-sm">{step.n}</div>
                  <span className="text-3xl block mb-3">{step.icon}</span>
                  <h3 className="font-bold text-eu-text mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-eu-bg border border-eu-border rounded-xl p-6">
              <h3 className="font-bold text-eu-text mb-3">Conexión con las plataformas del ecosistema</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg border border-eu-teal/30 p-4">
                  <p className="font-bold text-eu-teal mb-1">Aules (Moodle)</p>
                  <p className="text-gray-600 text-xs">Los recursos OER se publican como módulos en Aules, accesibles para alumnos de FP y del Máster.</p>
                </div>
                <div className="bg-white rounded-lg border border-eu-blue/30 p-4">
                  <p className="font-bold text-eu-blue mb-1">AI-STEAM Network (CMS)</p>
                  <p className="text-gray-600 text-xs">Este portal centraliza los retos, el repositorio OER y los casos de éxito para toda la red.</p>
                </div>
                <div className="bg-white rounded-lg border border-eu-orange/30 p-4">
                  <p className="font-bold text-eu-orange mb-1">ConsensUE (Decidim)</p>
                  <p className="text-gray-600 text-xs">La comunidad vota qué retos y recursos son prioritarios para nutrir el currículo del siguiente curso.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: OER */}
        {activeTab === 'oer' && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-eu-text mb-1">Repositorio de Recursos Educativos Abiertos</h2>
                <p className="text-sm text-gray-600">Todos los recursos están bajo licencias Creative Commons y disponibles en Aules.</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={oerSearch}
                  onChange={(e) => setOerSearch(e.target.value)}
                  className="border border-eu-border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-eu-blue w-64"
                  placeholder="Buscar recurso..."
                />
              </div>
            </div>
            <div className="space-y-3">
              {filteredOER.map((r) => (
                <div key={r.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-4 flex items-center gap-4 hover:border-eu-blue transition-colors group">
                  <span className="text-2xl shrink-0">{typeIcons[r.type]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-eu-text text-sm group-hover:text-eu-blue transition-colors">{r.title}</h3>
                      <span className={`text-sm font-bold px-1.5 py-0.5 rounded ${levelColors[r.level]}`}>{r.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span>{r.type}</span>
                      <span>Sector: {getSectorName(r.sector)}</span>
                      <span>Autor: {r.author}</span>
                      <span>{r.date}</span>
                      <span className="font-mono text-eu-teal">{r.license}</span>
                      <span>🌐 {r.lang}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-extrabold text-eu-teal">{r.downloads.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">descargas</p>
                    <button className="mt-1 flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <Download className="w-3 h-3" /> Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline">
                <ExternalLink className="w-4 h-4" /> Ver todos los recursos en Aules
              </a>
            </div>
          </div>
        )}

        {/* Tab: Insignias */}
        {activeTab === 'insignias' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-eu-text mb-1">Muro de Micro-credenciales e Insignias</h2>
              <p className="text-sm text-gray-600 max-w-2xl">
                Las insignias digitales de AI-STEAM Network siguen el estándar Open Badges 3.0 y son reconocidas como European Digital Credentials. Pueden añadirse al perfil de Europass y LinkedIn.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {badges.map((badge) => (
                <div key={badge.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-5 flex flex-col hover:border-eu-blue transition-colors">
                  <div className={`w-16 h-16 rounded-full ${badge.color} flex items-center justify-center text-white font-extrabold text-lg mb-4 mx-auto shadow-md`}>
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-eu-text text-sm text-center mb-1">{badge.name}</h3>
                  <p className="text-sm text-gray-500 text-center mb-3">{badge.description}</p>
                  <div className="flex justify-center gap-2 mb-3">
                    <span className={`text-sm font-bold px-1.5 py-0.5 rounded ${levelColors[badge.level]}`}>{badge.level}</span>
                    <span className="text-sm bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{getSectorName(badge.sector)}</span>
                  </div>
                  <div className="bg-eu-bg rounded-lg p-3 mb-3">
                    <p className="text-sm font-bold text-gray-500 uppercase mb-1">Criterios</p>
                    <ul className="space-y-1">
                      {badge.criteria.map((c) => (
                        <li key={c} className="text-sm text-gray-600 flex items-start gap-1">
                          <span className="text-eu-teal mt-0.5">✓</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-center text-eu-teal font-extrabold text-lg mt-auto">{badge.issued}</p>
                  <p className="text-center text-sm text-gray-400">insignias emitidas</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Casos de Éxito */}
        {activeTab === 'repositorio' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">Casos de Éxito</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">Retos ya resueltos que se han convertido en recursos educativos abiertos y referentes de la red.</p>
            <div className="space-y-5">
              {[
                {
                  title: 'Automatización de expedientes académicos con IA',
                  org: 'CEICE – Generalitat Valenciana',
                  sector: 'nts',
                  level: 'FP',
                  result: 'Sistema OCR + LLM en producción. Reducción del 70% en tiempo de tramitación. 5 equipos participantes.',
                  oer: 'Guía técnica y dataset publicados bajo CC-BY-SA',
                  year: '2025-2026',
                },
                {
                  title: 'Predicción de fallos en embotelladoras de vino',
                  org: 'Bodegas Murviedro SA',
                  sector: 'agr',
                  level: 'FP',
                  result: 'Modelo LSTM con 92% de precisión. Reducción de paradas del 35%. Implementado en 2 líneas de producción.',
                  oer: 'Notebook Python + dataset vibrómetro publicados en Aules',
                  year: '2024-2025',
                },
                {
                  title: 'Catálogo semántico de museos canarios',
                  org: 'LPGA – Las Palmas de Gran Canaria',
                  sector: 'cci',
                  level: 'Máster',
                  result: '12.000 obras catalogadas automáticamente. Motor de búsqueda semántica desplegado en web municipal.',
                  oer: 'Modelo NLP multilingüe y ontología publicados en HuggingFace + Aules',
                  year: '2024-2025',
                },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 hover:border-eu-blue transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-eu-text text-base mb-0.5">{c.title}</h3>
                      <p className="text-sm text-gray-500">{c.org} · <span className="text-eu-teal font-semibold">{getSectorName(c.sector)}</span></p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`text-sm font-bold px-2 py-0.5 rounded ${levelColors[c.level]}`}>{c.level}</span>
                      <span className="text-sm bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">Resuelto</span>
                      <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded text-gray-600 font-semibold">{c.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{c.result}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <BookOpen className="w-3.5 h-3.5 text-eu-teal" />
                    <span className="text-eu-teal font-semibold">{c.oer}</span>
                  </div>
                  <div className="mt-3 flex gap-3">
                    <button className="flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <FileText className="w-3 h-3" /> Ver caso completo
                    </button>
                    <button className="flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <Download className="w-3 h-3" /> Descargar recursos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
