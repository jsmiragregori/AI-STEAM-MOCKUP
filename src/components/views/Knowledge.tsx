import { ArrowRight, FileText, Download, ShieldCheck } from 'lucide-react';

export default function Knowledge() {
  return (
    <div className="animate-in fade-in duration-300 p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-eu-text mb-6">Transferencia de Conocimiento</h2>
      
      {/* LbD Flow */}
      <div className="flex flex-wrap items-center justify-around bg-white p-10 rounded-xl mt-5 shadow-sm">
        <div className="text-center w-[140px]">
          <div className="w-[60px] h-[60px] bg-eu-bg border-2 border-eu-blue rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-eu-blue">1</div>
          <p className="text-sm font-semibold">Reto Detectado</p>
        </div>
        
        <div className="w-10 h-0.5 bg-eu-border relative hidden md:block">
          <div className="absolute right-0 top-[-4px] border-[5px] border-transparent border-l-eu-border"></div>
        </div>
        
        <div className="text-center w-[140px]">
          <div className="w-[60px] h-[60px] bg-eu-bg border-2 border-eu-blue rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-eu-blue">2</div>
          <p className="text-sm font-semibold">Evaluación Red</p>
        </div>
        
        <div className="w-10 h-0.5 bg-eu-border relative hidden md:block">
          <div className="absolute right-0 top-[-4px] border-[5px] border-transparent border-l-eu-border"></div>
        </div>

        <div className="text-center w-[140px]">
          <div className="w-[60px] h-[60px] bg-eu-bg border-2 border-eu-blue rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-eu-blue">3</div>
          <p className="text-sm font-semibold">Prototipo Académico</p>
        </div>
        
        <div className="w-10 h-0.5 bg-eu-border relative hidden md:block">
          <div className="absolute right-0 top-[-4px] border-[5px] border-transparent border-l-eu-border"></div>
        </div>

        <div className="text-center w-[140px]">
          <div className="w-[60px] h-[60px] bg-eu-bg border-2 border-eu-blue rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-eu-blue">4</div>
          <p className="text-sm font-semibold">Caso de Éxito</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {/* OER */}
        <div className="bg-white rounded-xl p-5 border-b-4 border-eu-teal shadow-sm">
          <h4 className="font-bold text-lg mb-3">Recursos OER</h4>
          <ul className="text-[13px] space-y-2 list-none">
            <li className="flex items-center gap-2">📄 Guía de Ética en IA para FP (CC-BY-SA)</li>
            <li className="flex items-center gap-2">📄 Manual de Gemelos Digitales v2.1</li>
          </ul>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-xl p-5 border-b-4 border-eu-teal shadow-sm">
          <h4 className="font-bold text-lg mb-3">Muro de Insignias</h4>
          <div className="flex gap-2.5 mt-2.5">
            <div className="w-10 h-10 bg-eu-orange rounded-full"></div>
            <div className="w-10 h-10 bg-eu-teal rounded-full"></div>
            <div className="w-10 h-10 bg-eu-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
