import { ArrowRight, Users, BookOpen, Layers, Zap, Globe, Award, CheckCircle, XCircle, Link2 } from 'lucide-react';
import { Tab } from '../../App';
import { useLanguage } from '../../context/LanguageContext';

interface HomeProps {
  setActiveTab: (tab: Tab) => void;
}

const sectors = [
  { id: 'ind', emoji: '⚙️' },
  { id: 'sal', emoji: '🏥' },
  { id: 'med', emoji: '🌿' },
  { id: 'edu', emoji: '🎓' },
  { id: 'agr', emoji: '🌾' },
  { id: 'tur', emoji: '🏛️' },
  { id: 'adm', emoji: '🏛' },
];

export default function Home({ setActiveTab }: HomeProps) {
  const { t } = useLanguage();

  const stats = [
    { id: 1, name: t('home.stats.stakeholders'), value: '142', icon: Users },
    { id: 2, name: t('home.stats.totalChallenges'), value: '127', icon: Zap },
    { id: 3, name: t('home.stats.consortiumMembers'), value: '23', icon: BookOpen },
    { id: 4, name: t('home.stats.microCredentials'), value: '1.200', icon: Award },
    { id: 5, name: t('home.stats.countries'), value: '12', icon: Globe },
    { id: 6, name: t('home.stats.trainingModules'), value: '68', icon: Layers },
  ];

  const isNotBlock = t('home.isNotBlock') as any;
  const enredBlock = t('home.enredBlock') as any;

  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero */}
      <section className="bg-linear-to-br from-eu-blue to-eu-purple text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-eu-yellow/20 text-eu-yellow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {t('home.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              {t('home.title')}
            </h1>
            <p className="text-lg font-semibold text-eu-yellow mb-4">
              {t('home.subtitle')}
            </p>
            <p className="text-base text-white/90 mb-4 max-w-xl leading-relaxed border-l-4 border-eu-yellow/60 pl-4">
              {t('home.heroTagline')}
            </p>
            <p className="text-sm text-white/70 mb-8 max-w-xl">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('banco-retos')}
                className="bg-eu-orange text-white px-6 py-3 rounded-md font-bold border-none hover:bg-eu-purple transition-colors flex items-center gap-2"
              >
                {t('home.uploadChallenge')} <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('red')}
                className="border-2 border-white/50 text-white px-6 py-3 rounded-md font-bold hover:bg-white/10 transition-colors"
              >
                {t('home.requestJoin')}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="bg-white/10 backdrop-blur rounded-xl p-5 flex flex-col">
                    <Icon className="w-5 h-5 text-eu-yellow mb-2" />
                    <div className="text-3xl font-extrabold text-white leading-none mb-1">{stat.value}</div>
                    <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">{stat.name}</div>
                  </div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Is / Is Not Block */}
      <section className="px-6 py-12 bg-white border-b border-eu-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-8">{isNotBlock?.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-800 text-lg">{isNotBlock?.isTitle}</h3>
              </div>
              <ul className="space-y-3">
                {(isNotBlock?.isItems || []).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800 text-lg">{isNotBlock?.isNotTitle}</h3>
              </div>
              <ul className="space-y-3">
                {(isNotBlock?.isNotItems || []).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* From ENRED to AI-STEAM */}
      <section className="px-6 py-12 bg-eu-bg border-b border-eu-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-6">{enredBlock?.heading}</h2>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            <div className="flex-1 bg-white rounded-xl border border-eu-border p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{enredBlock?.enredLabel}</p>
              <div className="flex flex-wrap gap-2">
                {(enredBlock?.enredTags || []).map((tag: string) => (
                  <span key={tag} className="text-xs bg-eu-bg border border-eu-border rounded px-2 py-1 text-gray-600">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 shrink-0 py-4">
              <Link2 className="w-6 h-6 text-eu-blue/50" />
              <span className="text-xs font-bold text-eu-blue/50 uppercase tracking-wider hidden md:block" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{enredBlock?.synergyLabel}</span>
            </div>
            <div className="flex-1 bg-white rounded-xl border-2 border-eu-blue p-6 shadow-md">
              <p className="text-xs font-bold uppercase tracking-widest text-eu-blue mb-3">{enredBlock?.networkLabel}</p>
              <div className="flex flex-wrap gap-2">
                {(enredBlock?.networkTags || []).map((tag: string) => (
                  <span key={tag} className="text-xs bg-eu-blue/10 border border-eu-blue/30 rounded px-2 py-1 text-eu-blue font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 max-w-3xl leading-relaxed">{enredBlock?.desc}</p>
        </div>
      </section>

      {/* 3-Platform Ecosystem */}
      <section className="px-6 py-12 bg-white border-b border-eu-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-2">{t('home.ecosystem')}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            {t('home.ecosystemDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aules */}
            <a href="https://aules.edu.gva.es/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl border-t-4 border-eu-teal border border-eu-border p-6 shadow-sm flex flex-col hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-eu-teal rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  AU
                </div>
                <div>
                  <p className="font-bold text-eu-text">{t('home.platforms.aules.name')}</p>
                  <p className="text-xs text-gray-500">{t('home.platforms.aules.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-1 mb-4">{t('home.platforms.aules.desc')}</p>
              <span className="self-start text-xs font-bold px-2 py-1 bg-eu-bg rounded text-eu-teal">{t('home.platforms.aules.tag')}</span>
            </a>

            {/* Network */}
            <div className="bg-white rounded-xl border-t-4 border-eu-blue border border-eu-border p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-eu-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <div>
                  <p className="font-bold text-eu-text">{t('home.platforms.network.name')}</p>
                  <p className="text-xs text-gray-500">{t('home.platforms.network.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-1 mb-4">{t('home.platforms.network.desc')}</p>
              <span className="self-start text-xs font-bold px-2 py-1 bg-eu-bg rounded text-eu-teal">{t('home.platforms.network.tag')}</span>
            </div>

            {/* ConsensUE */}
            <div className="bg-white rounded-xl border-t-4 border-eu-orange border border-eu-border p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-eu-orange rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  CO
                </div>
                <div>
                  <p className="font-bold text-eu-text">{t('home.platforms.consensUE.name')}</p>
                  <p className="text-xs text-gray-500">{t('home.platforms.consensUE.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-1 mb-4">{t('home.platforms.consensUE.desc')}</p>
              <span className="self-start text-xs font-bold px-2 py-1 bg-eu-bg rounded text-eu-teal">{t('home.platforms.consensUE.tag')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Sectors */}
      <section className="px-6 py-12 bg-eu-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-eu-text mb-1">{t('home.sectors')}</h2>
              <p className="text-gray-600 text-sm">{t('home.sectorsDesc')}</p>
            </div>
            <button
              onClick={() => setActiveTab('sectores')}
              className="hidden md:flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
            >
              {t('home.viewAllSectors')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab('sectores')}
                className="bg-white rounded-xl border border-eu-border p-4 flex flex-col items-center text-center hover:border-eu-blue hover:shadow-md transition-all group cursor-pointer"
              >
                <span className="text-3xl mb-2">{s.emoji}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Focus */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-eu-text mb-2">{t('home.dualFocus')}</h2>
          <p className="text-gray-600 mb-8 text-sm max-w-2xl">{t('home.dualFocusDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FP */}
            <div className="bg-linear-to-br from-orange-50 to-orange-100/50 border border-eu-yellow rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-eu-orange rounded-xl flex items-center justify-center text-white font-extrabold text-sm">FP</div>
                <div>
                  <h3 className="font-bold text-eu-text text-lg">{t('home.fp.title')}</h3>
                  <p className="text-xs text-eu-orange font-semibold">{t('home.fp.coordinator')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-5">
                {t('home.fp.desc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> {t('home.fp.item1')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> {t('home.fp.item2')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> {t('home.fp.item3')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-eu-orange rounded-full inline-block"></span> {t('home.fp.item4')}</li>
              </ul>
            </div>

            {/* Master */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-extrabold text-sm">M</div>
                <div>
                  <h3 className="font-bold text-eu-text text-lg">{t('home.master.title')}</h3>
                  <p className="text-xs text-purple-600 font-semibold">{t('home.master.coordinator')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-5">
                {t('home.master.desc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> {t('home.master.item1')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> {t('home.master.item2')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> {t('home.master.item3')}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block"></span> {t('home.master.item4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Challenges Preview */}
      <section className="px-6 py-12 bg-eu-bg border-t border-eu-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-eu-text">{t('home.latestChallenges')}</h2>
            <button
              onClick={() => setActiveTab('banco-retos')}
              className="flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline bg-transparent border-none cursor-pointer"
            >
              {t('home.viewAll')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(t('home.latestChallengesData') as any || []).map((ch: any, i: number) => {
              const statusTranslationKey = ch.status === 'Abierto' || ch.status === 'Open' || ch.status === 'Obert'
                ? 'open'
                : ch.status === 'En Resolución' || ch.status === 'In Progress' || ch.status === 'En Resolució'
                ? 'inProgress'
                : 'resolved';
              const statusLabel = t(`marketplace.${statusTranslationKey}`);

              const sectorNames = t('marketplace.sectorNames') as any;
              const sectorLabel = sectorNames?.[ch.sectorCode] || ch.sectorCode;

              return (
                <div key={i} className="bg-white rounded-xl border border-eu-border p-5 hover:border-eu-blue transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-extrabold uppercase px-2 py-0.5 rounded ${ch.level === 'FP' ? 'bg-eu-yellow text-eu-purple' : 'bg-purple-100 text-purple-800'}`}>
                      {t('home.challengeLabel')} {ch.level}
                    </span>
                    <span className="text-sm text-eu-teal font-bold">● {statusLabel}</span>
                  </div>
                  <h3 className="font-bold text-eu-text text-sm mb-1 leading-snug">{ch.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{ch.org}</p>
                  <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded text-gray-600 font-semibold">{sectorLabel}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="px-6 py-10 bg-white border-t border-eu-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{t('home.consortium')} 23 {t('home.members')} 12 {t('home.countries2')}</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {['UVEG', 'CEICE', 'UMU', 'UPV', 'NTNU', 'HSW', 'FIDIT', 'INESC', 'TUV.IT', 'JOIST', 'C-LINK', 'LC', 'COGN', 'ESAD-GV', 'IF.E', 'Ud\'A', 'LPGA', 'VARM', 'CINK', 'KEA', 'PREDA', 'RCE'].map((p) => (
              <div key={p} className="bg-eu-bg border border-eu-border rounded px-3 py-1.5 text-sm font-bold text-gray-600">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
