import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Users, BookOpen, FlaskConical, GraduationCap, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Tab } from '../../App';

interface SectorMeta {
  id: string;
  emoji: string;
  color: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
  challenges: number;
  partners: number;
  courses: number;
  stakeholders: number;
  featuredPartners: string[];
}

const sectorsMeta: SectorMeta[] = [
  { id: 'mfg', emoji: '⚙️', color: 'from-blue-700 to-blue-500', borderColor: 'border-blue-600', tagBg: 'bg-blue-100', tagText: 'text-blue-800', challenges: 23, partners: 23, courses: 14, stakeholders: 87, featuredPartners: ['TUV.IT', 'JOIST', 'INESC TEC', 'Hochschule Wismar'] },
  { id: 'mob', emoji: '🚗', color: 'from-eu-purple to-eu-blue', borderColor: 'border-eu-purple', tagBg: 'bg-eu-yellow', tagText: 'text-eu-purple', challenges: 18, partners: 20, courses: 12, stakeholders: 65, featuredPartners: ['NTNU', 'HSW', 'INESC TEC', 'CEICE'] },
  { id: 'ene', emoji: '⚡', color: 'from-green-700 to-emerald-500', borderColor: 'border-green-600', tagBg: 'bg-green-100', tagText: 'text-green-800', challenges: 19, partners: 22, courses: 9, stakeholders: 102, featuredPartners: ['Region Värmland', 'PREDA', 'NTNU', 'INESC TEC'] },
  { id: 'agr', emoji: '🌾', color: 'from-yellow-600 to-amber-400', borderColor: 'border-yellow-500', tagBg: 'bg-yellow-100', tagText: 'text-yellow-800', challenges: 14, partners: 22, courses: 8, stakeholders: 78, featuredPartners: ['AVA-ASAJA', 'CINK', 'INESC TEC', 'UVEG'] },
  { id: 'cci', emoji: '🎨', color: 'from-pink-600 to-fuchsia-400', borderColor: 'border-pink-500', tagBg: 'bg-pink-100', tagText: 'text-pink-800', challenges: 12, partners: 19, courses: 7, stakeholders: 43, featuredPartners: ['LPGA', 'C-LINK', 'KEA', 'ESAD-GV', 'RCE'] },
  { id: 'hou', emoji: '🏘️', color: 'from-red-600 to-rose-500', borderColor: 'border-red-500', tagBg: 'bg-red-100', tagText: 'text-red-800', challenges: 15, partners: 18, courses: 10, stakeholders: 91, featuredPartners: ['HSW', 'NTNU', 'INESC TEC', 'CEICE'] },
  { id: 'nts', emoji: '🏢', color: 'from-slate-600 to-gray-500', borderColor: 'border-slate-500', tagBg: 'bg-slate-100', tagText: 'text-slate-800', challenges: 16, partners: 21, courses: 11, stakeholders: 56, featuredPartners: ['CEICE', 'LC', 'COGN', 'FIDIT'] },
];

interface SectorsProps {
  setActiveTab?: (tab: Tab) => void;
}

export default function Sectors({ setActiveTab }: SectorsProps) {
  const { t } = useLanguage();
  const sectorsT = t('sectors');
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);
  const openStakeholderForm = () => {
    window.location.hash = 'stakeholder-form';
    setActiveTab?.('red');
  };

  const get = (key: string, sectorId: string): any => {
    const obj = sectorsT?.[key] as Record<string, any> | undefined;
    return obj?.[sectorId];
  };

  const totalPartners = 23;
  const totalChallenges = sectorsMeta.reduce((a, s) => a + s.challenges, 0);
  const totalCourses = sectorsMeta.reduce((a, s) => a + s.courses, 0);

  const chainIcons = [
    <Users className="w-4 h-4" />,
    <BookOpen className="w-4 h-4" />,
    <Lightbulb className="w-4 h-4" />,
    <FlaskConical className="w-4 h-4" />,
    <GraduationCap className="w-4 h-4" />,
  ];
  const chainColors = [
    'bg-eu-blue/10 text-eu-blue border-eu-blue/20',
    'bg-eu-orange/10 text-eu-orange border-eu-orange/20',
    'bg-blue-50 text-blue-700 border-blue-200',
    'bg-green-50 text-green-700 border-green-200',
    'bg-purple-50 text-purple-700 border-purple-200',
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">{sectorsT?.title}</h1>
          <p className="text-white/80 max-w-3xl text-base mb-8">{sectorsT?.description}</p>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalChallenges}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{sectorsT?.stats?.totalChallenges}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalPartners}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{sectorsT?.stats?.partners}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4 text-center">
              <p className="text-3xl font-extrabold text-eu-yellow">{totalCourses}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{sectorsT?.stats?.trainingModules}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Cards */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-4">
        {sectorsMeta.map((sector) => {
          const isOpen = expanded === sector.id;
          const name = get('sectorNames', sector.id) || sector.id;
          const description = get('sectorDescriptions', sector.id) || '';
          const keywords: string[] = get('sectorKeywords', sector.id) || [];
          const fpSkills: string[] = get('sectorFpModules', sector.id) || [];
          const masterBridge: string[] = get('sectorMasterTopics', sector.id) || [];
          const stakeholderTypes: string[] = get('sectorStakeholderTypes', sector.id) || [];
          const teacherRelevance: string = get('sectorTeacherRelevance', sector.id) || '';
          const exampleChallenge: string = get('sectorExampleChallenge', sector.id) || '';

          const chainLabels = sectorsT?.transferChainLabels as Record<string, string> | undefined;
          const chainItems = [
            { label: chainLabels?.stakeholderNeed, value: stakeholderTypes[0] || '—' },
            { label: chainLabels?.fpSkill, value: fpSkills[0] || '—' },
            { label: chainLabels?.teacherUse, value: teacherRelevance },
            { label: chainLabels?.evidence, value: exampleChallenge },
            { label: chainLabels?.masterBridge, value: masterBridge[0] || '—' },
          ];

          return (
            <div key={sector.id} className={`bg-white rounded-xl border ${sector.borderColor} border-l-4 shadow-sm overflow-hidden transition-all`}>
              {/* Summary Row */}
              <button
                onClick={() => toggle(sector.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-eu-bg transition-colors"
              >
                <span className="text-4xl">{sector.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-eu-text">{name}</h2>
                  <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
                </div>
                <div className="hidden sm:flex items-center gap-6 shrink-0">
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-teal">{sector.challenges}</p>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.challenges}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-eu-blue">{sector.partners}</p>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.partners}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-extrabold text-purple-600">{sector.stakeholders}</p>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{sectorsT?.sectorLabels?.stakeholders}</p>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>

              {/* Expanded Detail */}
              {isOpen && (
                <div className="border-t border-eu-border px-6 py-6 bg-eu-bg space-y-6">

                  {/* Transfer Chain */}
                  <div className="bg-white rounded-xl border border-eu-border p-5">
                    <h4 className="font-bold text-eu-text text-sm mb-4">{sectorsT?.transferChainTitle}</h4>
                    <div className="flex flex-wrap items-start gap-2">
                      {chainItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <div className={`flex flex-col gap-1 border rounded-lg px-3 py-2 min-w-32.5 max-w-50 ${chainColors[i]}`}>
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide">
                              {chainIcons[i]}
                              {item.label}
                            </div>
                            <p className="text-xs leading-snug">{item.value}</p>
                          </div>
                          {i < chainItems.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400 mt-3 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Three-column detail grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Stakeholders + description + keywords */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg border border-eu-border p-4">
                        <h4 className="font-bold text-eu-text text-sm mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-eu-blue" />
                          {sectorsT?.stakeholderTypesLabel}
                        </h4>
                        <ul className="space-y-1">
                          {stakeholderTypes.map((s) => (
                            <li key={s} className="text-xs text-gray-700 flex items-start gap-1.5">
                              <ArrowRight className="w-3 h-3 text-eu-blue mt-0.5 shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg border border-eu-border p-4">
                        <p className="text-xs text-gray-700 mb-3">{description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {keywords.map((kw) => (
                            <span key={kw} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${sector.tagBg} ${sector.tagText}`}>
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* FP/VET Skills */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg border border-eu-border p-4">
                        <h4 className="font-bold text-eu-text text-sm mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-eu-orange" />
                          {sectorsT?.fpModulesLabel}
                        </h4>
                        <ul className="space-y-2">
                          {fpSkills.map((m) => (
                            <li key={m} className="text-xs text-gray-700 flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-eu-orange mt-0.5 shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg border border-eu-border p-4">
                        <h4 className="font-bold text-eu-text text-sm mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-blue-600" />
                          {sectorsT?.teacherRelevanceLabel}
                        </h4>
                        <p className="text-xs text-gray-700">{teacherRelevance}</p>
                      </div>
                    </div>

                    {/* Academic Bridge + Partners + Example */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg border border-purple-100 p-4">
                        <h4 className="font-bold text-eu-text text-sm mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-purple-600" />
                          {sectorsT?.masterTopicsLabel}
                        </h4>
                        <ul className="space-y-2">
                          {masterBridge.map((topic) => (
                            <li key={topic} className="text-xs text-gray-700 flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-purple-600 mt-0.5 shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-eu-border">
                          <p className="text-xs text-gray-500 font-semibold uppercase mb-1.5">{sectorsT?.featuredPartnersLabel}</p>
                          <div className="flex flex-wrap gap-1">
                            {sector.featuredPartners.map((p) => (
                              <span key={p} className="text-xs bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-bold">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="bg-amber-50 rounded-lg border border-amber-200 p-4">
                        <h4 className="font-bold text-amber-800 text-xs mb-1.5 flex items-center gap-1.5">
                          <FlaskConical className="w-3.5 h-3.5" />
                          {sectorsT?.exampleChallengeLabel}
                        </h4>
                        <p className="text-xs text-amber-700 italic">{exampleChallenge}</p>
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
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-2">{sectorsT?.cta}</h3>
            <p className="text-white/80 text-sm" dangerouslySetInnerHTML={{ __html: sectorsT?.ctaDesc || '' }} />
          </div>
          <button
            onClick={openStakeholderForm}
            className="bg-eu-orange text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-eu-purple transition-colors border-none cursor-pointer shrink-0"
          >
            {sectorsT?.ctaButton}
          </button>
        </div>
      </div>
    </div>
  );
}
