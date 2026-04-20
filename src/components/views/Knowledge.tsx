import { useState } from 'react';
import { FileText, Download, Search, BookOpen, ExternalLink, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

type KnowledgeTab = 'flujo' | 'oer' | 'casos' | 'evidencia' | 'plantillas';

const typeIcons: Record<string, string> = {
  'Guía': '📖',
  'Manual': '📋',
  'Dataset': '🗄️',
  'Vídeo': '🎬',
  'Plantilla': '📝',
};

const levelColors: Record<string, string> = {
  FP: 'bg-eu-yellow text-eu-purple',
  Máster: 'bg-purple-100 text-purple-800',
  Docentes: 'bg-eu-blue/10 text-eu-blue',
  Todos: 'bg-gray-100 text-gray-600',
  'VET/FP': 'bg-eu-yellow text-eu-purple',
  Master: 'bg-purple-100 text-purple-800',
};

const sectorColors: Record<string, string> = {
  mfg: 'bg-blue-100 text-blue-800',
  nts: 'bg-purple-100 text-purple-800',
  agr: 'bg-yellow-100 text-yellow-800',
  ene: 'bg-green-100 text-green-800',
  mob: 'bg-sky-100 text-sky-800',
  cci: 'bg-pink-100 text-pink-800',
  con: 'bg-orange-100 text-orange-800',
};

const flowIcons = ['🏭', '🔍', '👥', '💻', '✅', '🌐'];

const statusIcon = (status: string) => {
  if (status === 'Completado' || status === 'Completat' || status === 'Completed') return <CheckCircle className="w-4 h-4 text-green-600" />;
  if (status === 'En curso' || status === 'En curs' || status === 'In progress') return <Clock className="w-4 h-4 text-eu-orange" />;
  return <AlertCircle className="w-4 h-4 text-gray-500" />;
};

export default function Knowledge() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<KnowledgeTab>('flujo');
  const [oerSearch, setOerSearch] = useState('');

  const oerData = (t('knowledge.oerResources') as any[]) || [];
  const successCasesData = (t('knowledge.successCases') as any[]) || [];
  const evidenceItems = (t('knowledge.evidenceItems') as any[]) || [];
  const templatesItems = (t('knowledge.templatesItems') as any[]) || [];

  const getSectorName = (sectorId: string): string => {
    if (sectorId === 'Todos' || sectorId === 'All' || sectorId === 'Tots') return sectorId;
    const sectorNames = t('sectors.sectorNames') as Record<string, string>;
    return sectorNames[sectorId] || sectorId;
  };

  const getOERType = (type: string): string => {
    const typeMap: Record<string, string> = {
      'Guía': t('knowledge.oerTypeGuide'),
      'Manual': t('knowledge.oerTypeManual'),
      'Dataset': t('knowledge.oerTypeDataset'),
      'Vídeo': t('knowledge.oerTypeVideo'),
      'Plantilla': t('knowledge.oerTypeTemplate'),
    };
    return typeMap[type] || type;
  };

  const filteredOER = oerData.filter((r) =>
    oerSearch === '' ||
    r.title.toLowerCase().includes(oerSearch.toLowerCase()) ||
    getSectorName(r.sector).toLowerCase().includes(oerSearch.toLowerCase())
  );

  const tabs: { id: KnowledgeTab; label: string }[] = [
    { id: 'flujo', label: t('knowledge.tabFlow') },
    { id: 'oer', label: t('knowledge.tabOER') },
    { id: 'casos', label: t('knowledge.tabCases') },
    { id: 'evidencia', label: t('knowledge.tabEvidence') },
    { id: 'plantillas', label: t('knowledge.tabTemplates') },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-2">{t('knowledge.title')}</h1>
          <p className="text-white/70 text-sm max-w-3xl mb-1">{t('knowledge.description')}</p>
          {t('knowledge.demoNotice') && (
            <p className="text-xs text-eu-yellow/80 italic mt-2">⚠️ {t('knowledge.demoNotice')}</p>
          )}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{oerData.length || 8}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('knowledge.statsOER')}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-eu-yellow">{oerData.reduce((a: number, r: any) => a + (r.downloads || 0), 0).toLocaleString()}</p>
              <p className="text-sm text-white/70 font-semibold uppercase mt-0.5">{t('knowledge.statsDownloads')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-eu-border mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-eu-blue text-eu-blue bg-transparent'
                  : 'border-transparent text-gray-600 hover:text-eu-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Ciclo de Transferencia ── */}
        {activeTab === 'flujo' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">{t('knowledge.flowTitle')}</h2>
            <p className="text-sm text-gray-600 mb-8 max-w-3xl">{t('knowledge.flowDesc')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {(t('knowledge.flowSteps') as any[]).map((step: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-eu-blue text-white flex items-center justify-center font-extrabold text-sm">{idx + 1}</div>
                  <span className="text-3xl block mb-3">{flowIcons[idx]}</span>
                  <h3 className="font-bold text-eu-text mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-eu-bg border border-eu-border rounded-xl p-6">
              <h3 className="font-bold text-eu-text mb-3">{t('knowledge.flowConnection')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg border border-eu-teal/30 p-4">
                  <p className="font-bold text-eu-teal mb-1">Aules (Moodle)</p>
                  <p className="text-gray-600 text-xs">{t('knowledge.aulesPlatform')}</p>
                </div>
                <div className="bg-white rounded-lg border border-eu-blue/30 p-4">
                  <p className="font-bold text-eu-blue mb-1">AI-STEAM Network (CMS)</p>
                  <p className="text-gray-600 text-xs">{t('knowledge.networkPlatform')}</p>
                </div>
                <div className="bg-white rounded-lg border border-eu-orange/30 p-4">
                  <p className="font-bold text-eu-orange mb-1">ConsensUE (Decidim)</p>
                  <p className="text-gray-600 text-xs">{t('knowledge.consensuePlatform')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: OER y Recursos ── */}
        {activeTab === 'oer' && (
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-eu-text mb-1">{t('knowledge.oerTitle')}</h2>
                <p className="text-sm text-gray-600 max-w-2xl">{t('knowledge.oerDesc')}</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={oerSearch}
                  onChange={(e) => setOerSearch(e.target.value)}
                  className="border border-eu-border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-eu-blue w-64"
                  placeholder={t('knowledge.oerSearch')}
                />
              </div>
            </div>
            <div className="space-y-3">
              {filteredOER.map((r: any) => (
                <div key={r.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-4 flex items-center gap-4 hover:border-eu-blue transition-colors group">
                  <span className="text-2xl shrink-0">{typeIcons[r.type] || '📄'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-eu-text text-sm group-hover:text-eu-blue transition-colors">{r.title}</h3>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${levelColors[r.level] || 'bg-gray-100 text-gray-600'}`}>{r.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                      <span>{getOERType(r.type)}</span>
                      <span>{t('knowledge.oerSector')} {getSectorName(r.sector)}</span>
                      <span>{t('knowledge.oerAuthor')} {r.author}</span>
                      {r.route && <span>{t('knowledge.oerRoute') || 'Ruta:'} {r.route}</span>}
                      {r.validationStatus && <span className="text-eu-teal font-semibold">{t('knowledge.oerValidation') || 'Val:'} {r.validationStatus}</span>}
                      <span>{r.date}</span>
                      <span className="font-mono text-eu-teal">{r.license}</span>
                      <span>🌐 {r.lang}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-lg font-extrabold text-eu-teal">{(r.downloads || 0).toLocaleString()}</p>
                    <p className="text-xs text-gray-400">{t('knowledge.oerDownloads')}</p>
                    <button className="mt-1 flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <Download className="w-3 h-3" /> {t('knowledge.oerDownloadBtn')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-eu-blue font-bold text-sm hover:underline">
                <ExternalLink className="w-4 h-4" /> {t('knowledge.oerViewAll')}
              </a>
            </div>
          </div>
        )}

        {/* ── Tab: Casos de Transferencia ── */}
        {activeTab === 'casos' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">{t('knowledge.casesTitle')}</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">{t('knowledge.casesDesc')}</p>
            <div className="space-y-5">
              {successCasesData.map((c: any, i: number) => (
                <div key={i} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 hover:border-eu-blue transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-eu-text text-base mb-0.5">{c.title}</h3>
                      <p className="text-sm text-gray-500">{c.org} · <span className="text-eu-teal font-semibold">{getSectorName(c.sector)}</span></p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${levelColors[c.level] || 'bg-gray-100 text-gray-600'}`}>{c.level}</span>
                      <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">{t('knowledge.casesSolved')}</span>
                      <span className="text-xs bg-eu-bg border border-eu-border px-2 py-0.5 rounded text-gray-600 font-semibold">{c.year}</span>
                    </div>
                  </div>
                  {c.route && (
                    <p className="text-xs text-eu-orange font-semibold mb-2">{t('knowledge.casesRoute') || 'Ruta:'} {c.route}</p>
                  )}
                  <p className="text-sm text-gray-700 mb-3">{c.result}</p>
                  {c.oer && (
                    <div className="flex items-center gap-2 text-xs mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-eu-teal" />
                      <span className="text-eu-teal font-semibold">{c.oer}</span>
                    </div>
                  )}
                  {c.evidence && (
                    <p className="text-xs text-gray-500 italic mb-3">{t('knowledge.casesEvidence') || 'Evidencia:'} {c.evidence}</p>
                  )}
                  <div className="mt-3 flex gap-3">
                    <button className="flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <FileText className="w-3 h-3" /> {t('knowledge.casesViewFull')}
                    </button>
                    <button className="flex items-center gap-1 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <Download className="w-3 h-3" /> {t('knowledge.casesDownloadResources')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab: Evidencias de Piloto ── */}
        {activeTab === 'evidencia' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">{t('knowledge.evidenceTitle')}</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">{t('knowledge.evidenceDesc')}</p>
            {/* Demo notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-7 flex items-start gap-3">
              <span className="text-amber-500 text-lg mt-0.5">⚠️</span>
              <p className="text-xs text-amber-700">{t('knowledge.evidenceDemoLabel') || 'Indicadores demo'} — {t('knowledge.evidenceDesc')}</p>
            </div>
            <div className="space-y-5">
              {evidenceItems.map((ev: any) => (
                <div key={ev.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 hover:border-eu-blue transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-eu-text text-base mb-1">{ev.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${sectorColors[ev.sector] || 'bg-gray-100 text-gray-600'}`}>
                          {t('knowledge.evidenceSector') || 'Sector:'} {getSectorName(ev.sector)}
                        </span>
                        <span className="text-xs bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">
                          {t('knowledge.evidenceRoute') || 'Ruta:'} {ev.route}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {statusIcon(ev.status)}
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        ev.status === 'Completado' || ev.status === 'Completat' || ev.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : ev.status === 'En curso' || ev.status === 'En curs' || ev.status === 'In progress'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}>{ev.status}</span>
                    </div>
                  </div>
                  {ev.participants > 0 && (
                    <p className="text-xs text-gray-500 mb-2">👥 {ev.participants} participantes</p>
                  )}
                  <p className="text-sm text-gray-700 mb-2">{t('knowledge.evidenceOutcome') || 'Evidencia:'} <span className="font-medium">{ev.outcome}</span></p>
                  <p className="text-xs text-eu-blue font-semibold">{ev.partner}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab: Plantillas y Toolkits ── */}
        {activeTab === 'plantillas' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">{t('knowledge.templatesTitle')}</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">{t('knowledge.templatesDesc')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {templatesItems.map((tmpl: any) => (
                <div key={tmpl.id} className="bg-white rounded-xl border border-eu-border shadow-sm p-6 flex flex-col hover:border-eu-blue transition-colors group">
                  <div className="text-4xl mb-4">{tmpl.icon}</div>
                  <h3 className="font-bold text-eu-text text-base mb-2 group-hover:text-eu-blue transition-colors">{tmpl.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{tmpl.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-eu-bg border border-eu-border px-2 py-0.5 rounded text-gray-600 font-semibold">{tmpl.type}</span>
                    <span className="text-xs bg-eu-blue/10 text-eu-blue px-2 py-0.5 rounded font-semibold">{tmpl.route}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-eu-teal">{tmpl.license}</span>
                    <button className="flex items-center gap-1.5 text-eu-blue text-xs font-bold hover:underline cursor-pointer bg-transparent border-none">
                      <Download className="w-3.5 h-3.5" /> {t('knowledge.templatesDownload')}
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
