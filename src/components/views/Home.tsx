import { ArrowRight, Users, CheckCircle, Award, Lightbulb } from 'lucide-react';
import { Tab } from '../../App';

interface HomeProps {
  setActiveTab: (tab: Tab) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const stats = [
    { id: 1, name: 'Socios Adheridos', value: '142' },
    { id: 2, name: 'Retos FP Resueltos', value: '85' },
    { id: 3, name: 'Retos Máster', value: '42' },
    { id: 4, name: 'Micro-credenciales', value: '1.2k' },
  ];

  return (
    <div className="animate-in fade-in duration-300 p-6 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 h-full max-w-7xl mx-auto">
        {/* Hero Card */}
        <div className="bg-white rounded-xl p-10 border-b-4 border-eu-teal flex flex-col justify-center">
          <h1 className="text-[42px] leading-[1.1] mb-5 text-eu-blue font-bold">
            IA y STEAM: Motores de la Triple Transición Europea
          </h1>
          <p className="text-lg text-eu-text mb-8">
            Conectando la Formación Profesional y la Universidad con los retos reales de la industria 4.0 y la agricultura sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => setActiveTab('marketplace')}
              className="bg-eu-orange text-white px-7 py-3.5 rounded-md font-bold border-none hover:bg-orange-600 transition-colors"
            >
              Sube tu Reto Industrial
            </button>
            <button 
              onClick={() => setActiveTab('red')}
              className="border-2 border-eu-blue text-eu-blue px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
            >
              Únete como Socio
            </button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-rows-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg p-4 shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col justify-center">
              <div className="text-[28px] font-extrabold text-eu-teal leading-none mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.5px] opacity-70 font-semibold">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
