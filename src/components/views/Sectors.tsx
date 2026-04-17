import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
  stakeholders: number;
  keywords: string[];
  fpModules: string[];
  masterTopics: string[];
  featuredPartners: string[];
}

const sectors: Sector[] = [
  {
    id: 'mfg',
    name: 'Manufacturing',
    emoji: '⚙️',
    color: 'from-blue-700 to-blue-500',
    borderColor: 'border-blue-600',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    description: 'Aplicación de IA para la automatización, mantenimiento predictivo, control de calidad y optimización de procesos en entornos industriales y de fabricación avanzada. Industria 4.0 y gemelos digitales.',
    challenges: 23,
    partners: 23,
    courses: 14,
    stakeholders: 87,
    keywords: ['Mantenimiento Predictivo', 'Gemelos Digitales', 'Robótica Colaborativa', 'Control de Calidad por Visión', 'Industria 4.0'],
    fpModules: ['Automatización Industrial con IA', 'Visión Artificial en Línea de Producción', 'Programación de Robots Colaborativos'],
    masterTopics: ['Digital Twins y Simulación Industrial', 'IA para Mantenimiento Predictivo', 'Ciberseguridad OT/IT'],
    featuredPartners: ['TUV.IT', 'JOIST', 'INESC TEC', 'Hochschule Wismar'],
  },
  {
    id: 'mob',
    name: 'Mobility and Transport',
    emoji: '🚗',
    color: 'from-orange-600 to-amber-500',
    borderColor: 'border-orange-500',
    tagBg: 'bg-orange-100',
    tagText: 'text-orange-800',
    description: 'IA para vehículos autónomos, logística inteligente, optimización de rutas, predicción de tráfico y movilidad urbana sostenible. Conectividad V2X y sistemas de transporte integrados.',
    challenges: 18,
    partners: 20,
    courses: 12,
    stakeholders: 65,
    keywords: ['Vehículos Autónomos', 'Logística Inteligente', 'Optimización de Rutas', 'Predicción de Tráfico', 'Movilidad Urbana Sostenible'],
    fpModules: ['Sistemas de Conducción Autónoma', 'IoT en Vehículos y Logística', 'Análisis de Datos de Tráfico'],
    masterTopics: ['Deep Learning para Conducción Autónoma', 'Smart Mobility y Ciudades Inteligentes', 'Seguridad y Ética en Sistemas Autónomos'],
    featuredPartners: ['NTNU', 'HSW', 'INESC TEC', 'CEICE'],
  },
  {
    id: 'ene',
    name: 'Energy and Environment',
    emoji: '⚡',
    color: 'from-green-700 to-emerald-500',
    borderColor: 'border-green-600',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    description: 'Monitorización ambiental, predicción de fenómenos climáticos, optimización de energías renovables y economía circular. IA al servicio del Pacto Verde Europeo y los ODS.',
    challenges: 19,
    partners: 22,
    courses: 9,
    stakeholders: 102,
    keywords: ['Monitorización Ambiental', 'Economía Circular', 'Smart Grid', 'Energías Renovables', 'Cambio Climático'],
    fpModules: ['Sensórica Ambiental e IoT', 'IA para Gestión de Residuos', 'Eficiencia Energética con ML'],
    masterTopics: ['Remote Sensing y Deep Learning', 'Modelos Climáticos con IA', 'Optimización de Energías Renovables'],
    featuredPartners: ['Region Värmland', 'PREDA', 'NTNU', 'INESC TEC'],
  },
  {
    id: 'agr',
    name: 'Agrifood',
    emoji: '🌾',
    color: 'from-yellow-600 to-amber-400',
    borderColor: 'border-yellow-500',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-800',
    description: 'Agricultura de precisión, detección de plagas, trazabilidad alimentaria, predicción de cosechas y gestión hídrica inteligente. IA para la soberanía alimentaria y la sostenibilidad rural.',
    challenges: 14,
    partners: 22,
    courses: 8,
    stakeholders: 78,
    keywords: ['Agricultura de Precisión', 'Computer Vision en Campo', 'Trazabilidad Blockchain', 'Riego Inteligente', 'Predicción de Cosechas'],
    fpModules: ['Drones y Sensores en Agricultura', 'Detección de Plagas por Visión Artificial', 'Sistemas de Riego con IA'],
    masterTopics: ['Deep Learning Aplicado al Campo', 'IA para la Soberanía Alimentaria', 'Mercados Agrícolas y Predicción de Precios'],
    featuredPartners: ['AVA-ASAJA', 'CINK', 'INESC TEC', 'UVEG'],
  },
  {
    id: 'cci',
    name: 'Cultural and Creative Industries',
    emoji: '🎨',
    color: 'from-pink-600 to-fuchsia-400',
    borderColor: 'border-pink-500',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-800',
    description: 'Gestión de patrimonio cultural con IA, experiencias turísticas personalizadas, digitalización de colecciones, generación creativa y diseño asistido por IA. Turismo sostenible y creativo.',
    challenges: 12,
    partners: 19,
    courses: 7,
    stakeholders: 43,
    keywords: ['Patrimonio Digital', 'Recomendación Turística', 'Generación Creativa IA', 'NLP Multilingüe', 'Realidad Aumentada'],
    fpModules: ['Digitalización de Patrimonio Cultural', 'IA para Guías Turísticos Virtuales', 'Gestión Creativa Asistida por IA'],
    masterTopics: ['IA Generativa y Creatividad', 'Turismo Sostenible Inteligente', 'Ética en IA Creativa y Derechos de Autor'],
    featuredPartners: ['LPGA', 'C-LINK', 'KEA', 'ESAD-GV', 'RCE'],
  },
  {
    id: 'hou',
    name: 'Housing',
    emoji: '🏘️',
    color: 'from-red-600 to-rose-500',
    borderColor: 'border-red-500',
    tagBg: 'bg-red-100',
    tagText: 'text-red-800',
    description: 'Soluciones inteligentes para vivienda sostenible, optimización de consumo energético en edificios, smart homes y ciudades inteligentes. IA para mejorar la calidad de vida residencial.',
    challenges: 15,
    partners: 18,
    courses: 10,
    stakeholders: 91,
    keywords: ['Smart Homes', 'Eficiencia Energética Edificios', 'IoT Residencial', 'Ciudades Inteligentes', 'Sostenibilidad Urbana'],
    fpModules: ['Sistemas IoT para Viviendas', 'Automatización de Edificios', 'Análisis de Consumo Energético'],
    masterTopics: ['Smart Buildings y IA', 'Planificación Urbana Inteligente', 'Sostenibilidad y Eficiencia Residencial'],
    featuredPartners: ['HSW', 'NTNU', 'INESC TEC', 'CEICE'],
  },
  {
    id: 'nts',
    name: 'Non-Touristic Services',
    emoji: '🏢',
    color: 'from-slate-600 to-gray-500',
    borderColor: 'border-slate-500',
    tagBg: 'bg-slate-100',
    tagText: 'text-slate-800',
    description: 'IA en servicios no turísticos: logística, retail, finanzas, seguros y administración. Automatización de procesos, análisis predictivo y mejora de experiencia del cliente en sectores de servicios.',
    challenges: 16,
    partners: 21,
    courses: 11,
    stakeholders: 56,
    keywords: ['Automatización de Procesos', 'Retail Inteligente', 'Análisis Financiero', 'Customer Analytics', 'RPA'],
    fpModules: ['IA en Retail y E-commerce', 'Análisis de Datos Empresariales', 'Automatización de Procesos (RPA)'],
    masterTopics: ['Machine Learning en Finanzas', 'Optimización de Supply Chain', 'IA para Customer Experience'],
    featuredPartners: ['CEICE', 'LC', 'COGN', 'FIDIT'],
  },
];

export default function Sectors() {
  const { t, language } = useLanguage();
  const sectorsT = t('sectors');
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const getSectorName = (sectorId: string): string => {
    const sectorNames = sectorsT?.sectorNames as Record<string, string>;
    return sectorNames?.[sectorId] || sectorId;
  };

  const getSectorDescription = (sectorId: string): string => {
    const descriptions = sectorsT?.sectorDescriptions as Record<string, string>;
    return descriptions?.[sectorId] || '';
  };

  const getSectorKeywords = (sectorId: string): string[] => {
    const keywords = sectorsT?.sectorKeywords as Record<string, string[]>;
    return keywords?.[sectorId] || [];
  };

  const getSectorFpModules = (sectorId: string): string[] => {
    const modules = sectorsT?.sectorFpModules as Record<string, string[]>;
    return modules?.[sectorId] || [];
  };

  const getSectorMasterTopics = (sectorId: string): string[] => {
    const topics = sectorsT?.sectorMasterTopics as Record<string, string[]>;
    return topics?.[sectorId] || [];
  };

  const totalChallenges = sectors.reduce((a, s) => a + s.challenges, 0);
  const totalPartners = 23;
  const totalCourses = sectors.reduce((a, s) => a + s.courses, 0);
  const totalStakeholders = sectors.reduce((a, s) => a + s.stakeholders, 0);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">{t('sectors.title')}</h1>
          <p className="text-white/80 max-w-3xl text-base mb-8">
            {t('sectors.description')}
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalChallenges}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{t('sectors.stats.totalChallenges')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalPartners}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{t('sectors.stats.partners')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalCourses}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{t('sectors.stats.trainingModules')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalStakeholders}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Stakeholders</p>
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
                  <h2 className="text-lg font-bold text-eu-text">{getSectorName(sector.id)}</h2>
                  <p className="text-sm text-gray-600 line-clamp-1">{getSectorDescription(sector.id)}</p>
                </div>
                <div className="hidden sm:flex items-center gap-6 shrink-0">
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-teal">{sector.challenges}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.challenges}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-blue">{sector.partners}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.partners}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-purple-600">{sector.stakeholders}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.stakeholders}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-orange">{sector.courses}</p>
                    <p className="text-sm text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.modules}</p>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>

              {/* Expanded Detail */}
              {isOpen && (
                <div className="border-t border-eu-border px-6 py-6 bg-eu-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Description + keywords */}
                  <div>
                    <p className="text-sm text-gray-700 mb-4">{getSectorDescription(sector.id)}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {getSectorKeywords(sector.id).map((kw) => (
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
                      {sectorsT?.fpModulesLabel}
                    </h4>
                    <ul className="space-y-2">
                      {getSectorFpModules(sector.id).map((m) => (
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
                      {sectorsT?.masterTopicsLabel}
                    </h4>
                    <ul className="space-y-2">
                      {getSectorMasterTopics(sector.id).map((topic) => (
                        <li key={topic} className="text-xs text-gray-700 flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-purple-600 mt-0.5 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-eu-border">
                      <p className="text-sm text-gray-500 font-semibold uppercase mb-1">{sectorsT?.featuredPartnersLabel}</p>
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
            <h3 className="text-xl font-bold mb-2">{sectorsT?.cta}</h3>
            <p className="text-white/80 text-sm" dangerouslySetInnerHTML={{ __html: sectorsT?.ctaDesc || '' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
