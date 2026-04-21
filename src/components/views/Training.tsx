import { useState, type ReactNode } from 'react';
import { BookOpen, Award, ExternalLink, Clock, Users, Star, CheckCircle, AlertTriangle, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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

const courseHours = [60, 90, 30, 45, 80, 50, 70, 40];
const courseEnrolled = [312, 87, 524, 198, 54, 143, 72, 211];
const courseRating = [4.7, 4.9, 4.8, 4.6, 4.8, 4.5, 4.7, 4.4];
const coursePartners = ['UVEG / CEICE', "Ud'A / UVEG", 'CEICE / Inspiring Futures Europe', 'AVA-ASAJA / CINK', 'INESC TEC / HSW', 'Region Värmland / NTNU', 'KEA / ESAD-GV / LPGA', 'LC / CEICE'];
const courseModalities: Array<'Semipresencial' | 'Online'> = ['Semipresencial', 'Online', 'Online', 'Semipresencial', 'Online', 'Online', 'Online', 'Online'];

const getStatusColor = (status: string) => {
  if (status === 'Activo') return 'text-green-700 bg-green-50';
  if (status === 'Próximamente') return 'text-yellow-700 bg-yellow-50';
  return 'text-gray-600 bg-gray-100';
};

const credentialFrameworks = [
  { name: 'European Digital Credentials (EDC)', org: 'European Commission', logo: '🇪🇺' },
  { name: 'Open Badges 3.0', org: 'IMS Global / 1EdTech', logo: '🏅' },
  { name: 'Europass Certificate Supplement', org: 'CEDEFOP', logo: '📋' },
  { name: 'TÜV Thüringen Certification', org: 'TUV.IT – AI-SECRETT Consortium', logo: '✅' },
];

type Tab = 'fp' | 'teacher' | 'master';

export default function Training() {
  const { t } = useLanguage();
  const trainingT = t('training');
  const [activeTab, setActiveTab] = useState<Tab>('fp');

  const getCourses = (): Course[] => {
    const coursesObj = trainingT?.courses || {};
    return Object.values(coursesObj).map((course: any, idx: number) => ({
      id: `c${idx + 1}`,
      title: course.title,
      level: course.level as 'FP' | 'Máster' | 'Docentes',
      sector: course.sector,
      hours: courseHours[idx],
      enrolled: courseEnrolled[idx],
      rating: courseRating[idx],
      partner: coursePartners[idx],
      badge: course.badge,
      description: course.desc,
      modality: courseModalities[idx],
      status: course.status as 'Activo' | 'Próximamente' | 'Completado',
    }));
  };

  const courses = getCourses();
  const fpCourses = courses.filter((c) => c.level === 'FP');
  const teacherCourses = courses.filter((c) => c.level === 'Docentes');
  const masterCourses = courses.filter((c) => c.level === 'Máster');

  const getStatusLabel = (status: string) => {
    const labels = trainingT?.statusLabels as Record<string, string> | undefined;
    return labels?.[status] || status;
  };
  const getLevelLabel = (level: string) => {
    const labels = trainingT?.levelLabels as Record<string, string> | undefined;
    return labels?.[level] || level;
  };
  const getModalityLabel = (modality: string) => {
    const labels = trainingT?.modalityLabels as Record<string, string> | undefined;
    return labels?.[modality] || modality;
  };
  const getSectorLabel = (sector: string) => {
    const labels = trainingT?.sectorLabels as Record<string, string> | undefined;
    return labels?.[sector] || sector;
  };

  const CourseCard = ({ course, isMaster: isMasterProp }: { course: Course; key?: string; isMaster?: boolean }) => {
    const isMaster = isMasterProp || course.level === 'Máster';
    return (
      <div className="bg-white rounded-xl border border-eu-border shadow-sm flex flex-col overflow-hidden hover:border-eu-blue transition-colors">
        <div className="p-5 flex-1">
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-extrabold uppercase px-2 py-0.5 rounded bg-eu-yellow text-eu-purple">
                {getLevelLabel(course.level)}
              </span>
              {isMaster && <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded font-bold">Track A</span>}
            </div>
            <span className={`text-sm font-bold px-2 py-0.5 rounded ${getStatusColor(course.status)}`}>
              {getStatusLabel(course.status)}
            </span>
          </div>
          <h3 className="font-bold text-eu-text text-sm mb-2 leading-snug">{course.title}</h3>
          <p className="text-xs text-gray-500 mb-3">{course.description}</p>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.hours}{trainingT?.courseHours}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.enrolled} {trainingT?.courseEnrolledLabel}</span>
            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{course.rating}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600 whitespace-nowrap">{getSectorLabel(course.sector)}</span>
            <span className="text-sm bg-eu-bg border border-eu-border px-2 py-0.5 rounded font-semibold text-gray-600 whitespace-nowrap">{getModalityLabel(course.modality)}</span>
          </div>
        </div>
        <div className="border-t border-eu-border p-3 flex items-center justify-between bg-eu-bg">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <Award className="w-3 h-3 text-eu-orange shrink-0" />
            <span className="text-sm font-bold text-eu-orange truncate">{course.badge}</span>
          </div>
          <a
            href={isMaster ? 'https://valgrai.eu' : 'https://portal.edu.gva.es/aules/'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-eu-blue font-bold text-xs bg-transparent cursor-pointer hover:underline inline-flex items-center gap-1 shrink-0 ml-2"
          >
            {isMaster ? 'Ver' : trainingT?.courseViewMore} <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  };

  const tabs: { key: Tab; label: string; icon: ReactNode }[] = [
    { key: 'fp', label: trainingT?.tabFpVet, icon: <Briefcase className="w-4 h-4" /> },
    { key: 'teacher', label: trainingT?.tabTeacherTraining, icon: <BookOpen className="w-4 h-4" /> },
    { key: 'master', label: trainingT?.tabMasterBridge, icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-eu-blue text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold mb-3">{trainingT?.title}</h1>
              <p className="text-white/80 max-w-2xl text-base">{trainingT?.description}</p>
            </div>
            <a
              href="https://aules.edu.gva.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-lg border-none bg-eu-orange px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-eu-purple focus:outline-none focus:ring-2 focus:ring-eu-yellow focus:ring-offset-2 focus:ring-offset-eu-blue"
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
              <p className="text-2xl font-extrabold text-eu-yellow">{courses.reduce((a, c) => a + c.enrolled, 0).toLocaleString()}</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.enrolled}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">6</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.microCredentialsPilots}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-4">
              <p className="text-2xl font-extrabold text-eu-yellow">12</p>
              <p className="text-xs text-white/70 font-semibold uppercase mt-1">{trainingT?.countries}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main pathway tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-eu-border pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-colors ${
                activeTab === tab.key
                  ? 'bg-eu-blue text-white shadow-sm'
                  : 'bg-white text-eu-text border border-eu-border hover:border-eu-blue'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: FP/VET */}
        {activeTab === 'fp' && (
          <div>
            {/* Skills grid */}
            <div className="bg-eu-yellow/20 border border-eu-yellow rounded-xl p-6 mb-8">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-eu-orange" />
                {trainingT?.tabFpVet}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(trainingT?.fpSkills || []).map((skill: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-eu-yellow shadow-sm text-sm text-eu-text font-medium">
                    <CheckCircle className="w-4 h-4 text-eu-orange shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            {/* FP course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {fpCourses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
            {/* FP path steps */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6">
              <h3 className="font-bold text-eu-text mb-4">{trainingT?.fpPath}</h3>
              <div className="flex flex-wrap items-center gap-2">
                {(trainingT?.fpPathSteps || []).map((step: string, i: number, arr: string[]) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-eu-bg border border-eu-border rounded-lg px-3 py-2">
                      <span className="w-5 h-5 rounded-full bg-eu-orange text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-sm text-eu-text">{step}</span>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Teacher Training */}
        {activeTab === 'teacher' && (
          <div>
            {/* CEFIRE note + topics */}
            <div className="bg-eu-blue/5 border border-eu-blue/20 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-eu-blue" />
                {trainingT?.tabTeacherTraining}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(trainingT?.teacherTopics || []).map((topic: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-eu-border shadow-sm text-sm text-eu-text font-medium">
                    <CheckCircle className="w-4 h-4 text-eu-blue shrink-0" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
            {/* Teacher course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {teacherCourses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </div>
        )}

        {/* Tab: Master Bridge */}
        {activeTab === 'master' && (
          <div>
            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">{trainingT?.masterBridgeDisclaimer}</p>
            </div>
            {/* Bridge items */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-bold text-eu-text mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-700" />
                {trainingT?.tabMasterBridge}
              </h2>
              <div className="space-y-3">
                {(trainingT?.masterBridgeItems || []).map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 bg-white rounded-lg px-4 py-3 border border-purple-100 shadow-sm text-sm text-eu-text font-medium">
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Master-level course cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {masterCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} isMaster={true} />
                </div>
              ))}
            </div>
            {/* Master path */}
            <div className="bg-white rounded-xl border border-eu-border shadow-sm p-6">
              <h3 className="font-bold text-eu-text mb-4">{trainingT?.masterPath}</h3>
              <div className="flex flex-wrap items-center gap-2">
                {(trainingT?.masterPathSteps || []).map((step: string, i: number, arr: string[]) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-eu-bg border border-eu-border rounded-lg px-3 py-2">
                      <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-sm text-eu-text">{step}</span>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
