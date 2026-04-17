import { useState, useEffect } from 'react';
import { BookOpen, Award, ExternalLink, Clock, Users, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

type TrainingLevel = 'Todos' | 'FP' | 'Máster' | 'Docentes' | 'All' | 'VET' | 'Master' | 'Teachers' | 'Tots' | 'Màster';

interface Course {
  id: string;
  title: string;
  level: 'FP' | 'Máster' | 'Docentes';
  sector: string;
  hours: number;
  enrolled: number;
  rating: number;
  partner: string;
  badge: string;
  description: string;
  modality: 'Online' | 'Presencial' | 'Semipresencial';
  status: 'Activo' | 'Próximamente' | 'Completado';
}

const courses: Course[] = [
  {
    id: 'c1',
    title: 'Inteligencia Artificial Aplicada a la Industria 4.0',
    level: 'FP',
    sector: 'Industria',
    hours: 60,
    enrolled: 312,
    rating: 4.7,
    partner: 'UVEG / CEICE',
    badge: 'AI-Industry Badge',
    description: 'Curso de especialización para técnicos de FP. Abarca mantenimiento predictivo, visión artificial y gemelos digitales con casos prácticos reales de empresas de la red.',
    modality: 'Semipresencial',
    status: 'Activo',
  },
  {
    id: 'c2',
    title: 'Machine Learning para Diagnóstico Clínico',
    level: 'Máster',
    sector: 'Salud',
    hours: 90,
    enrolled: 87,
    rating: 4.9,
    partner: 'Ud\'A / UVEG',
    badge: 'HealthAI Badge',
    description: 'Módulo avanzado del Máster AI-SECRETT. Redes neuronales convolucionales aplicadas a radiología, NLP clínico y sistemas de apoyo a la decisión médica.',
    modality: 'Online',
    status: 'Activo',
  },
  {
    id: 'c3',
    title: 'IA Ética y Uso Responsable en el Aula',
    level: 'Docentes',
    sector: 'Educación',
    hours: 30,
    enrolled: 524,
    rating: 4.8,
    partner: 'CEICE / Inspiring Futures Europe',
    badge: 'EduAI Literacy Badge',
    description: 'Formación para docentes de FP y secundaria. Fundamentos de IA, prompt engineering, detección de sesgos y guías de uso ético de herramientas IA en el contexto educativo.',
    modality: 'Online',
    status: 'Activo',
  },
  {
    id: 'c4',
    title: 'Agricultura de Precisión con IA y Drones',
    level: 'FP',
    sector: 'Agroalimentario',
    hours: 45,
    enrolled: 198,
    rating: 4.6,
    partner: 'AVA-ASAJA / CINK',
    badge: 'AgroAI Badge',
    description: 'Programación de vuelos autónomos, análisis multiespectral con ML y sistemas de riego inteligente. Incluye prácticas en campo con sensores reales.',
    modality: 'Semipresencial',
    status: 'Activo',
  },
  {
    id: 'c5',
    title: 'Gemelos Digitales y Simulación para la Industria',
    level: 'Máster',
    sector: 'Industria',
    hours: 80,
    enrolled: 54,
    rating: 4.8,
    partner: 'INESC TEC / HSW',
    badge: 'DigitalTwin Badge',
    description: 'Modelado, simulación y análisis de gemelos digitales en entornos industriales. Integración con sistemas SCADA, IIoT y plataformas de edge computing.',
    modality: 'Online',
    status: 'Activo',
  },
  {
    id: 'c6',
    title: 'Monitorización Ambiental con IoT e IA',
    level: 'FP',
    sector: 'Medio Ambiente',
    hours: 50,
    enrolled: 143,
    rating: 4.5,
    partner: 'Region Värmland / NTNU',
    badge: 'GreenAI Badge',
    description: 'Redes de sensores ambientales, procesamiento de series temporales y alertas automáticas. Casos reales de monitorización de cuencas hidrográficas y calidad del aire.',
    modality: 'Online',
    status: 'Activo',
  },
  {
    id: 'c7',
    title: 'IA Generativa para Patrimonio Cultural y Turismo',
    level: 'Máster',
    sector: 'Turismo y Cultura',
    hours: 70,
    enrolled: 72,
    rating: 4.7,
    partner: 'KEA / ESAD-GV / LPGA',
    badge: 'CreativeAI Badge',
    description: 'Modelos de difusión, síntesis de voz y lenguaje natural aplicados a museos virtuales, guías turísticos IA y restauración digital de patrimonio.',
    modality: 'Online',
    status: 'Próximamente',
  },
  {
    id: 'c8',
    title: 'Administración Electrónica e IA para el Sector Público',
    level: 'Docentes',
    sector: 'Administración',
    hours: 40,
    enrolled: 211,
    rating: 4.4,
    partner: 'LC / CEICE',
    badge: 'GovAI Badge',
    description: 'Automatización de trámites, chatbots ciudadanos, datos abiertos y reglamento europeo de IA aplicado a los servicios públicos. Dirigido a funcionarios y docentes.',
    modality: 'Online',
    status: 'Activo',
  },
];

const getLevelColor = (level: string): string => {
  const levelColorMap: Record<string, string> = {
    'FP': 'bg-eu-yellow text-eu-purple',
    'VET': 'bg-eu-yellow text-eu-purple',
    'Máster': 'bg-purple-100 text-purple-800',
    'Master': 'bg-purple-100 text-purple-800',
    'Màster': 'bg-purple-100 text-purple-800',
    'Docentes': 'bg-eu-blue/10 text-eu-blue',
    'Teachers': 'bg-eu-blue/10 text-eu-blue',
    'Docents': 'bg-eu-blue/10 text-eu-blue',
  };
  return levelColorMap[level] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status: string): string => {
  const statusColorMap: Record<string, string> = {
    'Activo': 'text-green-700 bg-green-50',
    'Active': 'text-green-700 bg-green-50',
    'Próximamente': 'text-yellow-700 bg-yellow-50',
    'Coming Soon': 'text-yellow-700 bg-yellow-50',
    'Pròximament': 'text-yellow-700 bg-yellow-50',
    'Completado': 'text-gray-600 bg-gray-100',
    'Completed': 'text-gray-600 bg-gray-100',
    'Completat': 'text-gray-600 bg-gray-100',
  };
  return statusColorMap[status] || 'text-gray-600 bg-gray-100';
};

const getLevelLabel = (level: string, t: any): string => {
  const levelLabels = t?.levelLabels as Record<string, string>;
  const langMapping: Record<string, string> = {
    'FP': level,
    'Máster': level,
    'Docentes': level,
    'VET': 'FP',
    'Master': 'Máster',
    'Teachers': 'Docentes',
  };
  const normalizedLevel = langMapping[level] || level;
  return levelLabels?.[normalizedLevel] || level;
};

const getStatusLabel = (status: string, t: any): string => {
  const statusLabels = t?.statusLabels as Record<string, string>;
  const langMapping: Record<string, string> = {
    'Activo': status,
    'Active': 'Activo',
    'Próximamente': status,
    'Coming Soon': 'Próximamente',
    'Pròximament': 'Próximamente',
    'Completado': status,
    'Completed': 'Completado',
    'Completat': 'Completado',
  };
  const normalizedStatus = langMapping[status] || status;
  return statusLabels?.[normalizedStatus] || status;
};

const getModalityLabel = (modality: string, t: any): string => {
  const modalityLabels = t?.modalityLabels as Record<string, string>;
  const langMapping: Record<string, string> = {
    'Online': 'Online',
    'Presencial': 'Presencial',
    'Semipresencial': 'Semipresencial',
    'In-person': 'Presencial',
    'Blended': 'Semipresencial',
  };
  const normalizedModality = langMapping[modality] || modality;
  return modalityLabels?.[normalizedModality] || modality;
};

const getSectorLabel = (sector: string, t: any): string => {
  const sectorLabels = t?.sectorLabels as Record<string, string>;
  return sectorLabels?.[sector] || sector;
};

const credentialFrameworks = [
  { name: 'European Digital Credentials (EDC)', org: 'European Commission', logo: '🇪🇺' },
  { name: 'Open Badges 3.0', org: 'IMS Global / 1EdTech', logo: '🏅' },
  { name: 'Europass Certificate Supplement', org: 'CEDEFOP', logo: '📋' },
  { name: 'TÜV Thüringen Certification', org: 'TUV.IT – AI-SECRETT Consortium', logo: '✅' },
];

export default function Training() {
  const { t, language } = useLanguage();
  const trainingT = t('training');

  const levels = {
    es: ['Todos', 'FP', 'Máster', 'Docentes'] as TrainingLevel[],
    en: ['All', 'VET', 'Master', 'Teachers'] as TrainingLevel[],
    va: ['Tots', 'FP', 'Màster', 'Docents'] as TrainingLevel[],
  };

  const levelList = levels[language as keyof typeof levels];
  const [filter, setFilter] = useState<TrainingLevel>(levelList[0]);

  useEffect(() => {
    setFilter(levelList[0]);
  }, [language]);

  const getCourses = (language: string, trainingT: any): Course[] => {
    const coursesObj = trainingT?.courses || {};
    return Object.values(coursesObj).map((course: any, idx: number) => ({
      id: `c${idx + 1}`,
      title: course.title,
      level: course.level as any,
      sector: course.sector,
      hours: [60, 90, 30, 45, 80, 50, 70, 40][idx],
      enrolled: [312, 87, 524, 198, 54, 143, 72, 211][idx],
      rating: [4.7, 4.9, 4.8, 4.6, 4.8, 4.5, 4.7, 4.4][idx],
      partner: ['UVEG / CEICE', 'Ud\'A / UVEG', 'CEICE / Inspiring Futures Europe', 'AVA-ASAJA / CINK', 'INESC TEC / HSW', 'Region Värmland / NTNU', 'KEA / ESAD-GV / LPGA', 'LC / CEICE'][idx],
      badge: course.badge,
      description: course.desc,
      modality: ['Semipresencial', 'Online', 'Online', 'Semipresencial', 'Online', 'Online', 'Online', 'Online'][idx] as any,
      status: course.status as any,
    }));
  };

  const courses = getCourses(language, trainingT);
  const filtered = filter === levelList[0] ? courses : courses.filter((c) => c.level === filter);

  const totalEnrolled = courses.reduce((a, c) => a + c.enrolled, 0);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold mb-3">{trainingT?.title}</h1>
              <p className="text-white/80 max-w-2xl text-base">
                {trainingT?.description}
              </p>
            </div>
            <a
              href="https://aules.edu.gva.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-eu-teal text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-eu-purple transition-colors"
            >
              <BookOpen className="w-4 h-4" /> {trainingT?.accessAules} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">{courses.length}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.activeModules}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">{totalEnrolled.toLocaleString()}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.enrolled}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">1.200+</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.microCredentialsIssued}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">12</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.countries}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {levelList.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-bold cursor-pointer border transition-colors ${
                filter === l
                  ? 'bg-eu-blue text-white border-eu-blue'
                  : 'bg-white text-eu-text border-eu-border hover:border-eu-blue'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filtered.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border border-eu-border shadow-sm flex flex-col overflow-hidden hover:border-eu-blue transition-colors">
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-extrabold uppercase px-2 py-0.5 rounded ${getLevelColor(course.level)}`}>
                    {getLevelLabel(course.level, trainingT)}
                  </span>
                  <span className={`text-sm font-bold px-2 py-0.5 rounded ${getStatusColor(course.status)}`}>
                    {getStatusLabel(course.status, trainingT)}
                  </span>
                </div>
                <h3 className="font-bold text-eu-text text-sm mb-2 leading-snug">{course.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{course.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.hours}{trainingT?.courseHours}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.enrolled} {trainingT?.courseEnrolledLabel}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{course.rating}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600">{getSectorLabel(course.sector, trainingT)}</span>
                  <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600">{getModalityLabel(course.modality, trainingT)}</span>
                </div>
              </div>
              <div className="border-t border-eu-border p-3 flex items-center justify-between bg-eu-bg">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-eu-orange" />
                  <span className="text-sm font-bold text-eu-orange">{course.badge}</span>
                </div>
                <a
                  href={course.level === 'Máster' ? 'https://valgrai.eu/' : 'https://portal.edu.gva.es/aules/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eu-blue font-bold text-xs bg-transparent cursor-pointer hover:underline inline-flex items-center gap-1"
                >
                  {trainingT?.courseViewMore} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Framework */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
          <h2 className="text-xl font-bold text-eu-text mb-2">{trainingT?.credentialsFramework}</h2>
          <p className="text-sm text-gray-600 mb-6">
            {trainingT?.credentialsDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentialFrameworks.map((cf) => (
              <div key={cf.name} className="bg-eu-bg border border-eu-border rounded-lg p-4">
                <span className="text-2xl block mb-2">{cf.logo}</span>
                <p className="font-bold text-eu-text text-sm mb-1">{cf.name}</p>
                <p className="text-xs text-gray-500">{cf.org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-path Diagram */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
          <h2 className="text-xl font-bold text-eu-text mb-6">{trainingT?.trainingPaths}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FP Path */}
            <div className="bg-eu-yellow/60 border border-eu-yellow rounded-xl p-5">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-eu-orange rounded-lg flex items-center justify-center text-white text-xs font-extrabold">FP</span>
                {trainingT?.fpPath}
              </h3>
              <ol className="space-y-3">
                {(trainingT?.fpPathSteps || []).map((step: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-eu-orange text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            {/* Master Path */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-extrabold">M</span>
                {trainingT?.masterPath}
              </h3>
              <ol className="space-y-3">
                {(trainingT?.masterPathSteps || []).map((step: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

