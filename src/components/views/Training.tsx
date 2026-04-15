import { useState } from 'react';
import { BookOpen, Award, ExternalLink, Clock, Users, Star } from 'lucide-react';

type TrainingLevel = 'Todos' | 'FP' | 'Máster' | 'Docentes';

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

const levelColors: Record<string, string> = {
  FP: 'bg-orange-100 text-orange-800',
  Máster: 'bg-purple-100 text-purple-800',
  Docentes: 'bg-teal-100 text-teal-800',
};

const statusColors: Record<string, string> = {
  Activo: 'text-green-700 bg-green-50',
  Próximamente: 'text-yellow-700 bg-yellow-50',
  Completado: 'text-gray-600 bg-gray-100',
};

const credentialFrameworks = [
  { name: 'European Digital Credentials (EDC)', org: 'Comisión Europea', logo: '🇪🇺' },
  { name: 'Open Badges 3.0', org: 'IMS Global / 1EdTech', logo: '🏅' },
  { name: 'Europass Certificate Supplement', org: 'CEDEFOP', logo: '📋' },
  { name: 'TÜV Thüringen Certification', org: 'TUV.IT – Consorcio AI-SECRETT', logo: '✅' },
];

export default function Training() {
  const [filter, setFilter] = useState<TrainingLevel>('Todos');

  const filtered = filter === 'Todos' ? courses : courses.filter((c) => c.level === filter);

  const totalEnrolled = courses.reduce((a, c) => a + c.enrolled, 0);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold mb-3">Oferta Formativa AI-STEAM</h1>
              <p className="text-white/80 max-w-2xl text-base">
                Cursos, módulos y micro-credenciales para FP, Máster y formación docente. Todos los contenidos están co-diseñados con los socios de la red y disponibles en Aules (Moodle).
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 bg-eu-teal text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-teal-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Acceder a Aules <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">{courses.length}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Módulos Activos</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">{totalEnrolled.toLocaleString()}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Matriculados</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">1.200+</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Micro-credenciales Emitidas</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">12</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">Países</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['Todos', 'FP', 'Máster', 'Docentes'] as TrainingLevel[]).map((l) => (
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
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${statusColors[course.status]}`}>
                    {course.status}
                  </span>
                </div>
                <h3 className="font-bold text-eu-text text-sm mb-2 leading-snug">{course.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{course.description}</p>
                <div className="flex flex-wrap gap-2 text-[10px] text-gray-600 mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.hours}h</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.enrolled} matriculados</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{course.rating}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600">{course.sector}</span>
                  <span className="text-[10px] bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600">{course.modality}</span>
                </div>
              </div>
              <div className="border-t border-eu-border p-3 flex items-center justify-between bg-eu-bg">
                <div className="flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-eu-orange" />
                  <span className="text-[10px] font-bold text-eu-orange">{course.badge}</span>
                </div>
                <button className="text-eu-blue font-bold text-xs bg-transparent border-none cursor-pointer hover:underline">
                  Ver curso →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Framework */}
        <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
          <h2 className="text-xl font-bold text-eu-text mb-2">Marco de Credenciales y Certificación</h2>
          <p className="text-sm text-gray-600 mb-6">
            AI-STEAM Network emite micro-credenciales interoperables reconocidas en todo el Espacio Europeo de Educación. El marco de certificación ha sido diseñado por TUV.IT y COGN en el marco del consorcio AI-SECRETT.
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
          <h2 className="text-xl font-bold text-eu-text mb-6">Itinerarios Formativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FP Path */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-eu-orange rounded-lg flex items-center justify-center text-white text-xs font-extrabold">FP</span>
                Itinerario FP – CEICE
              </h3>
              <ol className="space-y-3">
                {[
                  'Ciclo Formativo de Grado Superior (CFGS)',
                  'Curso de Especialización IA-STEAM',
                  'FCT con empresa de la red',
                  'Micro-credencial Open Badge 3.0',
                  'Acceso al Máster AI-SECRETT (bridge)',
                ].map((step, i) => (
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
                Itinerario Máster AI-SECRETT
              </h3>
              <ol className="space-y-3">
                {[
                  'Admisión (grado universitario o FP + bridge)',
                  'Módulos temáticos por sector (60 ECTS)',
                  'Reto real del Banco de Retos como TFM',
                  'Prácticas internacionales con socio UE',
                  'Certificación TÜV + European Digital Credential',
                ].map((step, i) => (
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
