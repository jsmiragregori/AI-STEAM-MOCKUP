import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  emoji: string;
  color: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
  description: string;
  challenges: number;
  partners: number;
  courses: number;
  keywords: string[];
  fpModules: string[];
  masterTopics: string[];
  featuredPartners: string[];
}

const sectors: Sector[] = [
  {
    id: 'ind',
    name: 'Industria y Manufactura',
    emoji: '⚙️',
    color: 'from-blue-700 to-blue-500',
    borderColor: 'border-blue-600',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    description: 'Aplicación de IA para la automatización, mantenimiento predictivo, control de calidad y optimización de procesos en entornos industriales y de fabricación avanzada. Industria 4.0 y gemelos digitales.',
    challenges: 23,
    partners: 31,
    courses: 14,
    keywords: ['Mantenimiento Predictivo', 'Gemelos Digitales', 'Robótica Colaborativa', 'Control de Calidad por Visión', 'Industria 4.0'],
    fpModules: ['Automatización Industrial con IA', 'Visión Artificial en Línea de Producción', 'Programación de Robots Colaborativos'],
    masterTopics: ['Digital Twins y Simulación Industrial', 'IA para Mantenimiento Predictivo', 'Ciberseguridad OT/IT'],
    featuredPartners: ['TUV.IT', 'JOIST', 'INESC TEC', 'Hochschule Wismar'],
  },
  {
    id: 'sal',
    name: 'Salud y Bienestar',
    emoji: '🏥',
    color: 'from-red-600 to-rose-400',
    borderColor: 'border-red-500',
    tagBg: 'bg-red-100',
    tagText: 'text-red-800',
    description: 'Diagnóstico asistido por IA, gestión hospitalaria inteligente, salud mental, wearables y medicina personalizada. Ética y privacidad de datos clínicos en el marco del RGPD.',
    challenges: 17,
    partners: 24,
    courses: 11,
    keywords: ['Diagnóstico por Imagen', 'NLP Clínico', 'Salud Mental Digital', 'Medicina Personalizada', 'Gestión Hospitalaria IA'],
    fpModules: ['IA Aplicada a Registros Clínicos', 'Wearables y IoT Sanitario', 'Privacidad de Datos en Salud (RGPD)'],
    masterTopics: ['Machine Learning en Diagnóstico Médico', 'Ética en IA Sanitaria', 'Modelos de Lenguaje en Clínica'],
    featuredPartners: ['Ud\'A', 'UVEG', 'Hospital La Fe', 'INCLIVA'],
  },
  {
    id: 'med',
    name: 'Medio Ambiente y Sostenibilidad',
    emoji: '🌿',
    color: 'from-green-700 to-emerald-500',
    borderColor: 'border-green-600',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    description: 'Monitorización ambiental, predicción de fenómenos climáticos, gestión de residuos y economía circular. IA al servicio del Pacto Verde Europeo y los ODS.',
    challenges: 19,
    partners: 28,
    courses: 9,
    keywords: ['Monitorización Ambiental', 'Economía Circular', 'Smart Grid', 'Predicción Climática', 'Biodiversidad y Teledetección'],
    fpModules: ['Sensórica Ambiental e IoT', 'IA para Gestión de Residuos', 'Eficiencia Energética con ML'],
    masterTopics: ['Remote Sensing y Deep Learning', 'Modelos Climáticos con IA', 'Blockchain para Cadena de Custodia Ambiental'],
    featuredPartners: ['Region Värmland', 'PREDA', 'NTNU', 'INESC TEC'],
  },
  {
    id: 'edu',
    name: 'Educación e Investigación',
    emoji: '🎓',
    color: 'from-purple-700 to-violet-500',
    borderColor: 'border-purple-600',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-800',
    description: 'IA para la personalización del aprendizaje, evaluación formativa, analítica del aprendizaje y formación docente. Diseño de entornos educativos aumentados con IA ética.',
    challenges: 21,
    partners: 35,
    courses: 18,
    keywords: ['Aprendizaje Adaptativo', 'Analítica del Aprendizaje', 'Tutores IA', 'Evaluación Automatizada', 'Formación Docente IA'],
    fpModules: ['Introducción a la IA para Docentes', 'Diseño de Experiencias de Aprendizaje con IA', 'Uso Ético de LLMs en el Aula'],
    masterTopics: ['Learning Analytics Avanzado', 'Diseño de Sistemas Tutoriales Inteligentes', 'Políticas Educativas y Gobernanza de la IA'],
    featuredPartners: ['CEICE', 'UVEG', 'UMU', 'HSW', 'FIDIT', 'NTNU'],
  },
  {
    id: 'agr',
    name: 'Agroalimentario',
    emoji: '🌾',
    color: 'from-yellow-600 to-amber-400',
    borderColor: 'border-yellow-500',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-800',
    description: 'Agricultura de precisión, detección de plagas, trazabilidad alimentaria, predicción de cosechas y gestión hídrica inteligente. IA para la soberanía alimentaria y la sostenibilidad rural.',
    challenges: 14,
    partners: 22,
    courses: 8,
    keywords: ['Agricultura de Precisión', 'Computer Vision en Campo', 'Trazabilidad Blockchain', 'Riego Inteligente', 'Predicción de Cosechas'],
    fpModules: ['Drones y Sensores en Agricultura', 'Detección de Plagas por Visión Artificial', 'Sistemas de Riego con IA'],
    masterTopics: ['Deep Learning Aplicado al Campo', 'IA para la Soberanía Alimentaria', 'Mercados Agrícolas y Predicción de Precios'],
    featuredPartners: ['AVA-ASAJA', 'CINK', 'INESC TEC', 'UVEG'],
  },
  {
    id: 'tur',
    name: 'Turismo y Cultura',
    emoji: '🏛️',
    color: 'from-pink-600 to-fuchsia-400',
    borderColor: 'border-pink-500',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-800',
    description: 'Gestión de patrimonio cultural con IA, experiencias turísticas personalizadas, digitalización de colecciones, generación creativa y turismo sostenible.',
    challenges: 12,
    partners: 19,
    courses: 7,
    keywords: ['Patrimonio Digital', 'Recomendación Turística', 'Generación Creativa IA', 'NLP Multilingüe', 'Realidad Aumentada Cultural'],
    fpModules: ['Digitalización de Patrimonio Cultural', 'IA para Guías Turísticos Virtuales', 'Gestión de Contenidos Culturales con IA'],
    masterTopics: ['IA Generativa y Creatividad', 'Turismo Sostenible Inteligente', 'Ética en IA Creativa y Derechos de Autor'],
    featuredPartners: ['LPGA', 'C-LINK', 'KEA', 'ESAD-GV', 'RCE'],
  },
  {
    id: 'adm',
    name: 'Administración Pública',
    emoji: '🏛',
    color: 'from-slate-600 to-gray-500',
    borderColor: 'border-slate-500',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-800',
    description: 'Automatización de trámites, chatbots ciudadanos, análisis de datos públicos, transparencia algorítmica y gobierno abierto. IA al servicio de servicios públicos más eficientes y equitativos.',
    challenges: 10,
    partners: 16,
    courses: 6,
    keywords: ['Tramitación Electrónica', 'Chatbots Ciudadanos', 'Datos Abiertos', 'Transparencia Algorítmica', 'Smart Cities'],
    fpModules: ['Administración Electrónica e IA', 'Protección de Datos y RGPD para AAPP', 'Open Data y Visualización'],
    masterTopics: ['Gobierno Algorítmico y Ética', 'Smart Cities y Gemelos Urbanos', 'Regulación IA en el Sector Público (Reglamento IA UE)'],
    featuredPartners: ['CEICE', 'LC', 'Generalitat Valenciana', 'COGN'],
  },
];

export default function Sectors() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const totalChallenges = sectors.reduce((a, s) => a + s.challenges, 0);
  const totalPartners = sectors.reduce((a, s) => a + s.partners, 0);
  const totalCourses = sectors.reduce((a, s) => a + s.courses, 0);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Los 7 Sectores Estratégicos</h1>
          <p className="text-white/80 max-w-3xl text-base mb-8">
            El conocimiento de la red AI-STEAM se organiza en torno a 7 sectores clave para la triple transición digital, verde y social de Europa. Cada sector genera retos, recursos y módulos formativos para el Máster AI-SECRETT y los ciclos formativos de CEICE.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalChallenges}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Retos Totales</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalPartners}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Organizaciones</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalCourses}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Módulos Formativos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Cards */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-4">
        {sectors.map((sector) => {
          const isOpen = expanded === sector.id;
          return (
            <div key={sector.id} className={`bg-white rounded-xl border ${sector.borderColor} border-l-4 shadow-sm overflow-hidden transition-all`}>
              {/* Summary Row */}
              <button
                onClick={() => toggle(sector.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-eu-bg transition-colors"
              >
                <span className="text-4xl">{sector.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-eu-text">{sector.name}</h2>
                  <p className="text-sm text-gray-600 line-clamp-1">{sector.description}</p>
                </div>
                <div className="hidden sm:flex items-center gap-6 shrink-0">
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-teal">{sector.challenges}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Retos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-blue">{sector.partners}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Socios</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-orange">{sector.courses}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">Módulos</p>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>

              {/* Expanded Detail */}
              {isOpen && (
                <div className="border-t border-eu-border px-6 py-6 bg-eu-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Description + keywords */}
                  <div>
                    <p className="text-sm text-gray-700 mb-4">{sector.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.keywords.map((kw) => (
                        <span key={kw} className={`text-sm font-semibold px-2 py-0.5 rounded-full ${sector.tagBg} ${sector.tagText}`}>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FP Modules */}
                  <div className="bg-white rounded-lg border border-eu-border p-4">
                    <h4 className="font-bold text-eu-text text-sm mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-eu-orange inline-block"></span>
                      Módulos FP (CEICE)
                    </h4>
                    <ul className="space-y-2">
                      {sector.fpModules.map((m) => (
                        <li key={m} className="text-xs text-gray-700 flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-eu-orange mt-0.5 shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Master Topics */}
                  <div className="bg-white rounded-lg border border-eu-border p-4">
                    <h4 className="font-bold text-eu-text text-sm mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span>
                      Temas Máster AI-SECRETT
                    </h4>
                    <ul className="space-y-2">
                      {sector.masterTopics.map((t) => (
                        <li key={t} className="text-xs text-gray-700 flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-purple-600 mt-0.5 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-eu-border">
                      <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Socios Destacados</p>
                      <div className="flex flex-wrap gap-1">
                        {sector.featuredPartners.map((p) => (
                          <span key={p} className="text-sm bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-bold">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-eu-blue rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">¿Tu organización trabaja en alguno de estos sectores?</h3>
            <p className="text-white/80 text-sm">La red AI-STEAM está abierta a stakeholders de cualquiera de los 7 sectores. Adhiérete desde la sección <strong>La Red</strong> y empieza a co-crear conocimiento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
