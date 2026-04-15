import { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';

type Level = 'Todos' | 'Máster' | 'FP';

interface Challenge {
  id: string;
  title: string;
  entity: string;
  level: 'Máster' | 'FP';
  status: 'Abierto' | 'En Resolución';
  description: string;
}

export default function Marketplace() {
  const [filter, setFilter] = useState<Level>('Todos');

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Optimización energética de museos con IA',
      entity: 'Generalitat Valenciana (CEICE)',
      level: 'FP',
      status: 'Abierto',
      description: 'Desarrollo de un modelo predictivo para optimizar el consumo de HVAC en la red de museos públicos.'
    },
    {
      id: '2',
      title: 'Detección de plagas en cítricos vía Computer Vision',
      entity: 'AVA-ASAJA Cooperativa',
      level: 'Máster',
      status: 'En Resolución',
      description: 'Implementación de sensores IoT y actuadores para un sistema de riego inteligente de bajo coste.'
    },
    {
      id: '3',
      title: 'Mantenimiento Predictivo en Líneas de Embotellado',
      entity: 'PYME Sector Agroalimentario',
      level: 'FP',
      status: 'Abierto',
      description: 'Uso de NLP y Visión Computacional para catalogar documentos manuscritos del siglo XIX.'
    }
  ];

  const filteredChallenges = filter === 'Todos' 
    ? challenges 
    : challenges.filter(c => c.level === filter);

  return (
    <div className="animate-in fade-in duration-300 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-eu-text">Banco de Retos</h2>
        <div className="flex gap-2">
          {(['Todos', 'FP', 'Máster'] as Level[]).map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold cursor-pointer border-none transition-colors ${
                filter === l
                  ? 'bg-eu-blue text-white'
                  : 'bg-[#E5E7EB] text-eu-text hover:bg-gray-300'
              }`}
            >
              {l === 'Todos' ? 'Todos' : `Reto ${l}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredChallenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-[10px] border border-eu-border overflow-hidden flex flex-col">
            <div className="p-4 flex-1">
              <span className={`inline-block px-2 py-1 rounded text-[10px] font-extrabold uppercase mb-3 ${
                challenge.level === 'FP' ? 'bg-[#FFEDD5] text-[#9A3412]' : 'bg-[#F3E8FF] text-[#6B21A8]'
              }`}>
                Reto {challenge.level}
              </span>
              <h3 className="text-base font-bold text-eu-text mt-0 mb-2 leading-[1.3]">{challenge.title}</h3>
              <p className="text-xs text-gray-600 mb-3">{challenge.entity}</p>
              <div className="text-[11px] font-semibold text-eu-teal flex items-center gap-1">
                ● {challenge.status}
              </div>
            </div>
            <div className="border-t border-[#EEE] p-3 text-center">
              <button className="text-eu-blue font-bold text-[13px] bg-transparent border-none cursor-pointer hover:underline">
                Ver detalles y aplicar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
