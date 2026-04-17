import { useState, useContext } from 'react';
import {
  FileSignature, Users, Landmark, ExternalLink, ShieldCheck,
  ArrowRight, CheckCircle, AlertCircle, BookOpen, FileText,
  Zap, Shield, GraduationCap, Building2, Globe, ArrowDown,
} from 'lucide-react';
import { LanguageContext } from '../../context/LanguageContext';

type GovTab = 'estructura' | 'dual-track' | 'lbd' | 'documentos' | 'participar';

export default function Governance() {
  const [activeTab, setActiveTab] = useState<GovTab>('estructura');
  const languageContext = useContext(LanguageContext);
  const language = languageContext?.language || 'es';
  const t = languageContext?.translations[language]?.governance || {};

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">{t.title}</h1>
          <p className="text-white/80 max-w-3xl text-base">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { label: t.statBodies, value: t.statValue1 },
              { label: t.statDualTrack, value: t.statValue2 },
              { label: t.statPlatforms, value: t.statValue3 },
              { label: t.statAgreement, value: t.statValue4 },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <p className="text-xl font-extrabold text-eu-yellow leading-tight">{s.value}</p>
                <p className="text-xs text-white/70 font-semibold uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1 border-b border-eu-border mb-8">
          {([
            { id: 'estructura', label: t.tabEstructura },
            { id: 'dual-track', label: t.tabDualTrack },
            { id: 'lbd', label: t.tabLbd },
            { id: 'documentos', label: t.tabDocumentos },
            { id: 'participar', label: t.tabParticipar },
          ] as { id: GovTab; label: string }[]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-eu-blue text-eu-blue'
                  : 'border-transparent text-gray-600 hover:text-eu-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════
            Tab 1: ESTRUCTURA Y ÓRGANOS
        ══════════════════════════════════════════════════ */}
        {activeTab === 'estructura' && (
          <div className="space-y-10">
            {/* Intro y hub */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <h2 className="text-xl font-bold text-eu-text mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-eu-blue" /> {(t.tabContent_estructura as any)?.hubTitle}
              </h2>
              <p className="text-sm text-gray-600 mb-5 max-w-3xl">
                {(t.tabContent_estructura as any)?.hubDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {((t.tabContent_estructura as any)?.nodes || []).map((node: any) => (
                  <div key={node.label} className={`rounded-xl border-2 ${node.border} p-5`}>
                    <div className={`w-8 h-8 rounded-lg ${node.color} text-white flex items-center justify-center mb-3`}>
                      <Globe className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-0.5">{node.label}</p>
                    <p className="font-bold text-eu-text">{node.city}</p>
                    <p className="text-xs text-gray-500 mb-2">{node.org}</p>
                    <p className="text-xs text-gray-600">{node.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dos actores principales */}
            <div>
              <h2 className="text-xl font-bold text-eu-text mb-2">{(t.tabContent_estructura as any)?.actorsTitle}</h2>
              <p className="text-sm text-gray-600 mb-5 max-w-3xl">
                {(t.tabContent_estructura as any)?.actorsDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CEICE */}
                <div className="bg-white rounded-xl border-l-4 border-eu-orange border border-eu-border shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-eu-orange/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-eu-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-eu-text">{(t.tabContent_estructura as any)?.ceiceTitle}</h3>
                      <p className="text-xs text-eu-orange font-bold uppercase">{(t.tabContent_estructura as any)?.ceiceSubtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    {((t.tabContent_estructura as any)?.ceiceRoles || []).map((item: any) => {
                      const icons: any = { 'Representación': Shield, 'Representation': Shield, 'Representació': Shield, 'Contenido (no Máster)': FileText, 'Content (non-Master)': FileText, 'Contingut (no Màster)': FileText, 'Datos de miembros': Users, 'Member Data': Users, 'Dades de membres': Users, 'Infraestructura': Globe, 'Infrastructure': Globe };
                      const Icon = icons[item.label] || Shield;
                      return (
                        <div key={item.label} className="flex items-start gap-2.5">
                          <Icon className="w-4 h-4 text-eu-orange mt-0.5 shrink-0" />
                          <div>
                            <span className="font-bold text-eu-text">{item.label}: </span>
                            <span className="text-gray-600">{item.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* UVEG */}
                <div className="bg-white rounded-xl border-l-4 border-eu-blue border border-eu-border shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-eu-blue/10 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-eu-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-eu-text">{(t.tabContent_estructura as any)?.uvegTitle}</h3>
                      <p className="text-xs text-eu-blue font-bold uppercase">{(t.tabContent_estructura as any)?.uvegSubtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    {((t.tabContent_estructura as any)?.uvegRoles || []).map((item: any) => {
                      const icons: any = { 'Garante académico': GraduationCap, 'Academic Guarantor': GraduationCap, 'Garant acadèmic': GraduationCap, 'Contenido del Máster': FileText, 'Master Content': FileText, 'Contingut del Màster': FileText, 'Datos académicos': Shield, 'Academic Data': Shield, 'Dades acadèmiques': Shield, 'Infraestructura académica': Globe, 'Academic Infrastructure': Globe, 'Infraestructura acadèmica': Globe };
                      const Icon = icons[item.label] || GraduationCap;
                      return (
                        <div key={item.label} className="flex items-start gap-2.5">
                          <Icon className="w-4 h-4 text-eu-blue mt-0.5 shrink-0" />
                          <div>
                            <span className="font-bold text-eu-text">{item.label}: </span>
                            <span className="text-gray-600">{item.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Órganos formales */}
            <div>
              <h2 className="text-xl font-bold text-eu-text mb-2">{(t.tabContent_estructura as any)?.bodiesTitle}</h2>
              <p className="text-sm text-gray-600 mb-6 max-w-3xl">
                {(t.tabContent_estructura as any)?.bodiesDesc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {((t.governanceBodies as any) || []).map((body: any) => (
                  <div key={body.id} className={`rounded-xl border-l-4 border ${body.color} p-6 shadow-sm`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-eu-text">{body.name}</h3>
                        <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${body.iconColor}`}>{body.type}</p>
                      </div>
                      <span className={`text-2xl font-extrabold ${body.iconColor} opacity-20`}>{body.abbr}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{body.desc}</p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <p><span className="font-bold text-gray-700">Miembros:</span> {body.members}</p>
                      <p><span className="font-bold text-gray-700">Frecuencia:</span> {body.freq}</p>
                      <p><span className="font-bold text-gray-700">Quórum:</span> {body.quorum}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ISO 21001 + ENRED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-eu-blue/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-eu-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-eu-text mb-1">{(t.tabContent_estructura as any)?.iso21001Title}</h3>
                  <p className="text-sm text-gray-600">{(t.tabContent_estructura as any)?.iso21001Desc}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-eu-orange/10 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-eu-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-eu-text mb-1">{(t.tabContent_estructura as any)?.enredTitle}</h3>
                  <p className="text-sm text-gray-600">{(t.tabContent_estructura as any)?.enredDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
            Tab 2: ARQUITECTURA DUAL TRACK
        ══════════════════════════════════════════════════ */}
        {activeTab === 'dual-track' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-eu-text mb-2">{(t.tabContent_dualtrack as any)?.title}</h2>
              <p className="text-sm text-gray-600 mb-6 max-w-3xl">
                {(t.tabContent_dualtrack as any)?.desc}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Track A */}
                <div className="bg-white rounded-2xl border-2 border-eu-blue shadow-sm overflow-hidden">
                  <div className="bg-eu-blue text-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-extrabold text-lg">A</div>
                      <div>
                        <h3 className="font-extrabold text-lg">{(t.tabContent_dualtrack as any)?.trackA?.title}</h3>
                        <p className="text-white/70 text-sm">{(t.tabContent_dualtrack as any)?.trackA?.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-blue mb-1">{(t.tabContent_dualtrack as any)?.trackA?.scope_label}</p>
                      <p className="text-sm text-gray-600">{(t.tabContent_dualtrack as any)?.trackA?.scope_desc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-blue mb-1">{(t.tabContent_dualtrack as any)?.trackA?.framework_label}</p>
                      <p className="text-sm text-gray-600">{(t.tabContent_dualtrack as any)?.trackA?.framework_desc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-blue mb-1">{(t.tabContent_dualtrack as any)?.trackA?.limit_label}</p>
                      <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3">
                        <AlertCircle className="w-4 h-4 text-eu-blue mt-0.5 shrink-0" />
                        <p className="text-sm text-eu-blue font-semibold">{(t.tabContent_dualtrack as any)?.trackA?.limit_desc}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-blue mb-2">{(t.tabContent_dualtrack as any)?.trackA?.bodies_label}</p>
                      <div className="flex flex-wrap gap-2">
                        {((t.tabContent_dualtrack as any)?.trackA?.bodies || []).map((o: string) => (
                          <span key={o} className="text-xs bg-eu-blue/10 text-eu-blue font-bold px-2 py-1 rounded">{o}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track B */}
                <div className="bg-white rounded-2xl border-2 border-eu-orange shadow-sm overflow-hidden">
                  <div className="bg-eu-orange text-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-extrabold text-lg">B</div>
                      <div>
                        <h3 className="font-extrabold text-lg">{(t.tabContent_dualtrack as any)?.trackB?.title}</h3>
                        <p className="text-white/70 text-sm">{(t.tabContent_dualtrack as any)?.trackB?.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-orange mb-1">{(t.tabContent_dualtrack as any)?.trackB?.scope_label}</p>
                      <p className="text-sm text-gray-600">{(t.tabContent_dualtrack as any)?.trackB?.scope_desc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-orange mb-1">{(t.tabContent_dualtrack as any)?.trackB?.framework_label}</p>
                      <p className="text-sm text-gray-600">{(t.tabContent_dualtrack as any)?.trackB?.framework_desc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-orange mb-1">{(t.tabContent_dualtrack as any)?.trackB?.limit_label}</p>
                      <div className="flex items-start gap-2 bg-orange-50 rounded-lg p-3">
                        <CheckCircle className="w-4 h-4 text-eu-orange mt-0.5 shrink-0" />
                        <p className="text-sm text-eu-orange font-semibold">{(t.tabContent_dualtrack as any)?.trackB?.limit_desc}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-eu-orange mb-2">{(t.tabContent_dualtrack as any)?.trackB?.bodies_label}</p>
                      <div className="flex flex-wrap gap-2">
                        {((t.tabContent_dualtrack as any)?.trackB?.bodies || []).map((o: string) => (
                          <span key={o} className="text-xs bg-eu-orange/10 text-eu-orange font-bold px-2 py-1 rounded">{o}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zonas de datos */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
                <h3 className="font-bold text-eu-text mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-eu-blue" /> {(t.tabContent_dualtrack as any)?.dataArch?.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5">{(t.tabContent_dualtrack as any)?.dataArch?.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="text-xs font-extrabold uppercase text-eu-blue mb-2">{(t.tabContent_dualtrack as any)?.dataArch?.publicZone?.title}</p>
                    <p className="text-xs text-gray-600 mb-3">{(t.tabContent_dualtrack as any)?.dataArch?.publicZone?.desc}</p>
                    <ul className="space-y-1.5">
                      {((t.tabContent_dualtrack as any)?.dataArch?.publicZone?.items || []).map((i: string) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-eu-blue shrink-0"></span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                    <p className="text-xs font-extrabold uppercase text-purple-700 mb-2">{(t.tabContent_dualtrack as any)?.dataArch?.privateZone?.title}</p>
                    <p className="text-xs text-gray-600 mb-3">{(t.tabContent_dualtrack as any)?.dataArch?.privateZone?.desc}</p>
                    <ul className="space-y-1.5">
                      {((t.tabContent_dualtrack as any)?.dataArch?.privateZone?.items || []).map((i: string) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Acuerdo de Colaboración */}
              <div className="bg-eu-bg rounded-xl border border-eu-border p-6">
                <h3 className="font-bold text-eu-text mb-3 flex items-center gap-2">
                  <FileSignature className="w-5 h-5 text-eu-teal" /> {(t.tabContent_dualtrack as any)?.agreement?.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{(t.tabContent_dualtrack as any)?.agreement?.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {((t.tabContent_dualtrack as any)?.agreement?.items || []).map((c: any) => (
                    <div key={c.title} className="bg-white rounded-lg border border-eu-border p-4">
                      <p className="font-bold text-eu-teal text-sm mb-1">{c.title}</p>
                      <p className="text-xs text-gray-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
            Tab 3: METODOLOGÍA LbD
        ══════════════════════════════════════════════════ */}
        {activeTab === 'lbd' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-eu-text mb-2">{(t.tabContent_lbd as any)?.title}</h2>
              <p className="text-sm text-gray-600 mb-2 max-w-3xl">
                {(t.tabContent_lbd as any)?.intro_desc}
              </p>
              <p className="text-sm text-gray-500 mb-6 max-w-3xl">
                {(t.tabContent_lbd as any)?.diginetDesc}
              </p>

              {/* Flujo LbD */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7 mb-8">
                <h3 className="font-bold text-eu-text mb-6">{(t.tabContent_lbd as any)?.cycleTitle}</h3>
                <div className="space-y-0">
                  {((t.tabContent_lbd as any)?.phases || []).map((phase: any, i: number) => {
                    const phaseColors = { '1': 'bg-eu-orange border-eu-orange', '2': 'bg-eu-blue border-eu-blue', '3': 'bg-eu-teal border-eu-teal' };
                    const [color, border] = (phaseColors[phase.step as keyof typeof phaseColors] || 'bg-eu-gray border-eu-gray').split(' ');
                    return (
                    <div key={phase.step} className="relative">
                      <div className={`flex gap-5 p-5 rounded-xl border-2 ${border} bg-white mb-2`}>
                        <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center font-extrabold text-lg shrink-0`}>
                          {phase.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-xs font-extrabold uppercase px-2 py-0.5 rounded ${color} text-white`}>{phase.track}</span>
                            <span className="text-xs text-gray-400">·</span>
                            <span className="text-xs font-semibold text-gray-500">{phase.platform}</span>
                          </div>
                          <h4 className="font-bold text-eu-text mb-0.5">{phase.title}</h4>
                          <p className="text-xs text-gray-500 font-semibold mb-2">👤 {phase.actor}</p>
                          <p className="text-sm text-gray-600 mb-3">{phase.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.outputs.map((o) => (
                              <span key={o} className="flex items-center gap-1 text-xs bg-eu-bg border border-eu-border px-2 py-1 rounded-full text-gray-700 font-semibold">
                                <CheckCircle className="w-3 h-3 text-eu-teal shrink-0" />{o}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {i < 2 && (
                        <div className="flex justify-center my-1">
                          <ArrowDown className="w-5 h-5 text-gray-300" />
                        </div>
                      )}
                    </div>
                    );
                  })}
                </div>
              </div>

              {/* Las tres plataformas en el flujo LbD */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
                <h3 className="font-bold text-eu-text mb-2">{(t.tabContent_lbd as any)?.platformsTitle}</h3>
                <p className="text-sm text-gray-600 mb-5">{(t.tabContent_lbd as any)?.platformsDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {((t.tabContent_lbd as any)?.platforms || []).map((p: any, i: number) => (
                    <div key={p.name} className="relative">
                      <div className={`rounded-xl border-2 ${p.border} p-5 h-full`}>
                        <div className={`inline-block text-xs font-extrabold uppercase px-2 py-0.5 rounded mb-2 ${p.color} text-white`}>{p.track}</div>
                        <p className="font-bold text-eu-text">{p.name}</p>
                        <p className="text-xs text-gray-400 mb-1">{p.tech}</p>
                        <p className={`text-xs font-bold uppercase ${p.text} mb-2`}>{p.role}</p>
                        <p className="text-xs text-gray-600 mb-3">{p.desc}</p>
                        <p className="text-xs text-gray-500 font-semibold bg-eu-bg rounded px-2 py-1">👤 {p.owner}</p>
                      </div>
                      {i < 2 && (
                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-eu-border rounded-full items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Escalabilidad */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
                <h3 className="font-bold text-eu-text mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-eu-orange" /> Escalabilidad del Modelo LbD
                </h3>
                <p className="text-sm text-gray-600 mb-5">El Dual Track + LbD está diseñado para crecer sin reestructurarse. Cada fase añade capacidad manteniendo la misma lógica de intercambio de valor.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      fase: 'Fase Piloto', rango: '< 50 organizaciones', periodo: '2025–2026', color: 'bg-eu-blue',
                      items: ['Track B gestionado manualmente por CEICE', 'Comité Científico revisa todos los retos', 'ConsensUE con grupos reducidos', 'Todos los retos pasan por revisión completa'],
                    },
                    {
                      fase: 'Fase de Crecimiento', rango: '50–250 organizaciones', periodo: '2026–2027', color: 'bg-eu-teal',
                      items: ['Validación por grupos de trabajo sectoriales (SN)', 'Automatización del enrutamiento de propuestas', 'RBAC (control de acceso por roles) en las 3 plataformas', 'Sistema de reputación para revisores del Track B'],
                    },
                    {
                      fase: 'Fase Estable', rango: '500+ organizaciones', periodo: '2027+', color: 'bg-purple-600',
                      items: ['Delegación de validación Track B a orgs. acreditadas', 'Workflows asíncronos sin reuniones obligatorias', 'IA asistente para pre-validación de retos', 'Sostenibilidad financiera con cuotas + Digital Europe'],
                    },
                  ].map((f) => (
                    <div key={f.fase} className="bg-eu-bg rounded-xl border border-eu-border p-5">
                      <div className={`inline-block px-3 py-0.5 rounded-full text-white text-xs font-extrabold uppercase mb-2 ${f.color}`}>{f.fase}</div>
                      <p className="font-bold text-eu-text text-sm mb-0.5">{f.rango}</p>
                      <p className="text-xs text-gray-400 mb-3">{f.periodo}</p>
                      <ul className="space-y-1.5">
                        {f.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${f.color}`}></span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
            Tab 4: DOCUMENTACIÓN
        ══════════════════════════════════════════════════ */}
        {activeTab === 'documentos' && (
          <div>
            <h2 className="text-xl font-bold text-eu-text mb-2">Documentación de Transparencia</h2>
            <p className="text-sm text-gray-600 mb-7 max-w-2xl">
              Los documentos públicos están disponibles para descarga directa. Los documentos de socios requieren acceso al Área Privada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {((t.transparencyDocs as any) || []).map((doc: any, i: number) => (
                <a key={i} href="#" className="flex items-center p-4 rounded-xl border border-eu-border bg-white hover:border-eu-blue hover:bg-eu-bg transition-colors group">
                  <span className="text-2xl mr-4 shrink-0">{doc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue truncate">{doc.title}</p>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <span className="text-xs text-gray-500">{doc.date}</span>
                      <span className="text-xs bg-eu-bg border border-eu-border px-1.5 py-0.5 rounded text-gray-600 font-semibold">{doc.type}</span>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${doc.access === 'Public' || doc.access === 'Público' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {doc.access === 'Public' || doc.access === 'Público' ? '🔓 Público' : '🔒 Socios'}
                      </span>
                    </div>
                  </div>
                  <FileSignature className="w-4 h-4 text-gray-300 group-hover:text-eu-blue shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
            Tab 5: PARTICIPAR
        ══════════════════════════════════════════════════ */}
        {activeTab === 'participar' && (
          <div className="space-y-8">
            {/* Dos vías de adhesión */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Track B – Stakeholder */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
                <div className="w-12 h-12 bg-eu-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-eu-orange" />
                </div>
                <h2 className="text-xl font-bold text-eu-text mb-1">Adhesión como Stakeholder</h2>
                <p className="text-xs font-bold uppercase text-eu-orange mb-3">Track B · Espacio Ecosistema · Gasto Cero</p>
                <p className="text-sm text-gray-600 mb-4">
                  Cualquier organización pública o privada puede adherirse a la red suscribiendo el <strong>Acuerdo de Colaboración</strong>. La adhesión es gratuita (Regla de Gasto Cero), vigente durante 4 años y renovable.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 mb-5">
                  <p className="text-xs font-bold text-eu-orange uppercase mb-2">Como stakeholder podrás:</p>
                  <ul className="space-y-1.5">
                    {[
                      'Proponer retos reales al Banco de Retos vía ConsensUE',
                      'Votar prioridades temáticas y co-diseñar el currículo',
                      'Acceder al repositorio de recursos OER y casos de éxito',
                      'Participar en grupos de trabajo sectoriales',
                      'Recibir soluciones prototipadas de equipos del Máster AI-SECRETT',
                      'Conectar con los socios del consorcio y la red europea',
                    ].map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-eu-orange mt-0.5 shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mb-4 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
                  Los stakeholders operan exclusivamente en el Track B. No tienen acceso al espacio académico (Aules/Máster) salvo autorización expresa de UVEG.
                </p>
                <a href="#" className="inline-flex items-center gap-2 bg-eu-orange text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors">
                  Solicitar Acuerdo de Colaboración <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* ConsensUE */}
              <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
                <div className="w-12 h-12 bg-eu-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-eu-teal" />
                </div>
                <h2 className="text-xl font-bold text-eu-text mb-1">Participa vía ConsensUE</h2>
                <p className="text-xs font-bold uppercase text-eu-teal mb-3">Track B · Plataforma Decidim · Democracia Participativa</p>
                <p className="text-sm text-gray-600 mb-4">
                  ConsensUE es la plataforma democrática del ecosistema, basada en <strong>Decidim</strong> y gestionada por CEICE. Es el canal principal para que stakeholders y socios del consorcio propongan y debatan contenidos del Track B.
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    { who: 'Para Stakeholders (Track B)', actions: ['Proponer retos al Banco de Retos', 'Votar prioridades del próximo curso', 'Participar en grupos de trabajo sectoriales', 'Consultas sobre políticas de la red'] },
                    { who: 'Para Socios del Consorcio', actions: ['Proponer recursos OER y casos de éxito', 'Debatir modificaciones de gobernanza', 'Convocar consultas a la red', 'Coordinar nodos distribuidos'] },
                  ].map((g) => (
                    <div key={g.who} className="bg-teal-50 rounded-lg p-4">
                      <p className="text-xs font-extrabold uppercase text-eu-teal mb-2">{g.who}</p>
                      <ul className="space-y-1">
                        {g.actions.map((a) => (
                          <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-eu-teal shrink-0"></span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 bg-eu-teal text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-teal-700 transition-colors">
                  Ir a ConsensUE <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Reuniones Red de Stakeholders */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-eu-blue/10 rounded-xl flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-eu-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-eu-text">Red de Stakeholders (SN) – Próximas Reuniones</h2>
                  <p className="text-sm text-gray-500">Coordinada por CEICE · Frecuencia semestral + online continua</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {[
                  { date: '15 Jun 2026', title: 'Asamblea de la Red – Sesión 3', location: 'Conselleria de Educació, Valencia + Streaming' },
                  { date: '10 Jul 2026', title: 'Taller Sectorial: IA y Salud', location: 'Hospital La Fe + Online' },
                  { date: '18 Sep 2026', title: 'Foro Anual AI-STEAM Network', location: 'Ciudad Politécnica de la Innovación, Valencia' },
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-eu-bg rounded-lg border border-eu-border">
                    <div className="bg-eu-blue text-white rounded-lg px-2 py-1 text-center shrink-0 min-w-[3rem]">
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
              <a href="#" className="inline-flex items-center gap-2 bg-eu-blue text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-800 transition-colors">
                Inscribirse a la próxima reunión <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
