import { useState } from 'react';
import { FileSignature, Users, Landmark, ExternalLink, ShieldCheck } from 'lucide-react';

type GovTab = 'estructura' | 'documentos' | 'participar';

const governanceBodies = [
  {
    id: 'ga',
    name: 'Asamblea General',
    abbr: 'GA',
    type: 'Órgano deliberativo',
    members: 'Todos los beneficiarios del consorcio',
    freq: 'Anual + extraordinaria',
    desc: 'Máximo órgano de toma de decisiones estratégicas. Aprueba presupuestos, modificaciones del acuerdo de consorcio y decisiones sobre incumplimientos.',
    color: 'border-blue-600 bg-blue-50',
    iconColor: 'text-blue-700',
  },
  {
    id: 'sc',
    name: 'Comité Directivo',
    abbr: 'SC',
    type: 'Órgano ejecutivo',
    members: 'UVEG (coord.), UMU, CEICE, TUV.IT, LC',
    freq: 'Trimestral',
    desc: 'Gestión operativa del proyecto. Supervisa el plan de trabajo, aprueba los informes internos y toma decisiones sobre la implementación.',
    color: 'border-eu-teal bg-teal-50',
    iconColor: 'text-eu-teal',
  },
  {
    id: 'ab',
    name: 'Consejo Asesor',
    abbr: 'AB',
    type: 'Órgano consultivo',
    members: 'Expertos externos independientes',
    freq: 'Semestral',
    desc: 'Proporciona orientación estratégica externa. Evaluación de calidad científica, pertinencia sectorial y alineamiento con políticas europeas de IA y educación.',
    color: 'border-purple-600 bg-purple-50',
    iconColor: 'text-purple-700',
  },
  {
    id: 'scc',
    name: 'Comité Científico',
    abbr: 'SCC',
    type: 'Órgano de validación',
    members: 'Investigadores senior de UVEG, UMU, NTNU, INESC, Ud\'A',
    freq: 'Bajo demanda',
    desc: 'Valida la calidad científica de los contenidos del máster y los recursos OER. Certifica la adecuación metodológica de los retos seleccionados.',
    color: 'border-indigo-600 bg-indigo-50',
    iconColor: 'text-indigo-700',
  },
  {
    id: 'sn',
    name: 'Red de Stakeholders',
    abbr: 'SN',
    type: 'Órgano participativo',
    members: 'Todos los socios adheridos a la red AI-STEAM',
    freq: 'Semestral + Online continua',
    desc: 'Plataforma participativa donde los socios no-consorcio proponen retos, votan prioridades temáticas y co-diseñan el currículo a través de ConsensUE.',
    color: 'border-eu-orange bg-orange-50',
    iconColor: 'text-eu-orange',
  },
  {
    id: 'sb',
    name: 'Junta Estratégica',
    abbr: 'SB',
    type: 'Enlace institucional',
    members: 'CEICE, LC, KEA, Lisbon Council',
    freq: 'Anual',
    desc: 'Asegura la alineación del proyecto con las políticas europeas (Digital Decade, Reglamento IA UE, EPALE) y con las prioridades educativas de la Generalitat Valenciana.',
    color: 'border-gray-600 bg-gray-50',
    iconColor: 'text-gray-700',
  },
];

const transparencyDocs = [
  { title: 'Acuerdo de Consorcio AI-SECRETT v1.0', date: 'Oct 2025', type: 'Fundacional', icon: '📄' },
  { title: 'Carta de Gobernanza de la Red AI-STEAM', date: 'Ene 2026', type: 'Gobernanza', icon: '🏛️' },
  { title: 'Actas Asamblea General – Sesión 1', date: 'Nov 2025', type: 'Actas', icon: '📋' },
  { title: 'Actas Comité Directivo – Q1 2026', date: 'Mar 2026', type: 'Actas', icon: '📋' },
  { title: 'Plan de Gestión de Datos (DMP)', date: 'Oct 2025', type: 'Técnico', icon: '🗄️' },
  { title: 'Declaración Ética y Conflictos de Interés', date: 'Oct 2025', type: 'Ética', icon: '⚖️' },
  { title: 'Política de Igualdad de Género – HSW', date: 'Nov 2025', type: 'RRHH', icon: '⚧' },
  { title: 'Informe de Progreso Interno Q1 2026', date: 'Apr 2026', type: 'Seguimiento', icon: '📊' },
];

export default function Governance() {
  const [activeTab, setActiveTab] = useState<GovTab>('estructura');

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Gobernanza y Transparencia</h1>
          <p className="text-white/80 max-w-3xl text-base">
            Una estructura organizativa abierta, participativa y alineada con los principios éticos de la Unión Europea y el Horizonte Europa. El proyecto AI-SECRETT es coordinado por la Universitat de València (UVEG) con CEICE como socio estratégico para la FP.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-eu-border mb-8">
          {([
            { id: 'estructura', label: 'Estructura de Gobernanza' },
            { id: 'documentos', label: 'Documentación' },
            { id: 'participar', label: 'Participar' },
          ] as { id: GovTab; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${
                activeTab === t.id
                  ? 'border-eu-blue text-eu-blue'
                  : 'border-transparent text-gray-600 hover:text-eu-text'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: Estructura */}
        {activeTab === 'estructura' && (
          <div>
            <p className="text-sm text-gray-600 mb-7 max-w-3xl">
              El proyecto AI-SECRETT cuenta con seis órganos de gobernanza que garantizan la toma de decisiones democrática, la calidad científica y el cumplimiento de los principios éticos de la UE.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {governanceBodies.map((body) => (
                <div key={body.id} className={`rounded-xl border-l-4 border ${body.color} p-6 shadow-sm`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className={`font-bold text-lg text-eu-text`}>{body.name}</h3>
                      <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${body.iconColor}`}>{body.type}</p>
                    </div>
                    <span className={`text-2xl font-extrabold ${body.iconColor} opacity-30`}>{body.abbr}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{body.desc}</p>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p><span className="font-bold text-gray-700">Miembros:</span> {body.members}</p>
                    <p><span className="font-bold text-gray-700">Frecuencia:</span> {body.freq}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ISO 21001 */}
            <div className="mt-8 bg-white rounded-xl border border-eu-border shadow-sm p-6 flex flex-wrap gap-6 items-center">
              <div className="w-14 h-14 rounded-xl bg-eu-blue/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-eu-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-eu-text mb-1">Certificación ISO 21001 – Sistema de Gestión Educativa</h3>
                <p className="text-sm text-gray-600">
                  El consorcio AI-SECRETT opera bajo el marco de calidad ISO 21001 (Educational Organization Management Systems), coordinado por UVEG. Garantiza la alineación de los programas formativos con las necesidades de los estudiantes y las partes interesadas.
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-500">Gestión de calidad</p>
                <p className="font-bold text-eu-blue">UVEG (Coordinador)</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Documentos */}
        {activeTab === 'documentos' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">Documentación de Transparencia</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">Todos los documentos de gobernanza del consorcio AI-SECRETT son accesibles para los socios en el área privada. Los marcados como públicos están disponibles para descarga directa.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transparencyDocs.map((doc, i) => (
                <a key={i} href="#" className="flex items-center p-4 rounded-xl border border-eu-border bg-white hover:border-eu-blue hover:bg-eu-bg transition-colors group">
                  <span className="text-2xl mr-4 shrink-0">{doc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue truncate">{doc.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-500">{doc.date}</span>
                      <span className="text-sm bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{doc.type}</span>
                    </div>
                  </div>
                  <FileSignature className="w-4 h-4 text-gray-300 group-hover:text-eu-blue shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Participar */}
        {activeTab === 'participar' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ConsensUE */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <div className="w-12 h-12 bg-eu-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-eu-orange" />
              </div>
              <h2 className="text-xl font-bold text-eu-text mb-3">Participa vía ConsensUE</h2>
              <p className="text-sm text-gray-600 mb-4">
                ConsensUE es la plataforma de participación democrática del proyecto, basada en Decidim. Cualquier socio de la red puede:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {[
                  'Proponer nuevos retos y temáticas sectoriales',
                  'Votar las prioridades del próximo curso académico',
                  'Co-diseñar módulos formativos con docentes',
                  'Participar en consultas sobre gobernanza',
                  'Unirse a grupos de trabajo temáticos',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-eu-orange mt-1.5 shrink-0 inline-block"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-eu-orange text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors"
              >
                Ir a ConsensUE <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Red de Stakeholders */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <div className="w-12 h-12 bg-eu-teal/10 rounded-xl flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-eu-teal" />
              </div>
              <h2 className="text-xl font-bold text-eu-text mb-3">Red de Stakeholders (SN)</h2>
              <p className="text-sm text-gray-600 mb-4">
                La Red de Stakeholders es el órgano participativo formal del proyecto. Se reúne semestralmente y está coordinada por CEICE. Próximas reuniones:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { date: '15 Jun 2026', title: 'Asamblea de la Red – Sesión 3', location: 'Conselleria de Educació, Valencia + Streaming' },
                  { date: '10 Jul 2026', title: 'Taller Sectorial: IA y Salud', location: 'Hospital La Fe + Online' },
                  { date: '18 Sep 2026', title: 'Foro Anual AI-STEAM Network', location: 'Ciudad Politécnica de la Innovación, Valencia' },
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-eu-bg rounded-lg border border-eu-border">
                    <div className="bg-eu-teal text-white rounded-lg px-2 py-1 text-center shrink-0">
                      <span className="block text-xs font-extrabold leading-none">{e.date.split(' ')[0]}</span>
                      <span className="block text-xs font-semibold uppercase">{e.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-eu-text">{e.title}</p>
                      <p className="text-xs text-gray-500">{e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-eu-teal text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-teal-700 transition-colors"
              >
                Inscribirse a la próxima reunión <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
