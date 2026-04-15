import { FileSignature, Users, Landmark, ExternalLink } from 'lucide-react';

export default function Governance() {
  return (
    <div className="animate-in fade-in duration-300 p-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-eu-text mb-4">Gobernanza y Transparencia</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Una estructura organizativa abierta, participativa y alineada con los principios éticos de la Unión Europea.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Bicameral Structure */}
        <div className="bg-white p-8 rounded-xl border border-eu-border shadow-sm">
          <div className="w-12 h-12 bg-eu-bg rounded-full flex items-center justify-center mb-5 border-2 border-eu-blue">
            <Landmark className="w-5 h-5 text-eu-blue" />
          </div>
          <h2 className="text-xl font-bold text-eu-text mb-3">Comité Directivo</h2>
          <p className="text-sm text-gray-600 mb-5">
            Órgano ejecutivo formado por representantes de la Generalitat Valenciana (CEICE) y la Universitat de València (UVEG). Encargado de la estrategia a largo plazo y la gestión de fondos.
          </p>
          <ul className="space-y-2 text-sm text-eu-text font-medium">
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-blue rounded-full mr-2"></div> Aprobación de presupuestos</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-blue rounded-full mr-2"></div> Relaciones institucionales UE</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-blue rounded-full mr-2"></div> Supervisión ética y legal</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl border border-eu-border shadow-sm">
          <div className="w-12 h-12 bg-eu-bg rounded-full flex items-center justify-center mb-5 border-2 border-eu-teal">
            <Users className="w-5 h-5 text-eu-teal" />
          </div>
          <h2 className="text-xl font-bold text-eu-text mb-3">Asamblea de la Red</h2>
          <p className="text-sm text-gray-600 mb-5">
            Órgano consultivo y participativo donde tienen voz todos los socios adheridos (IES, PYMEs, ONGs). Se reúne semestralmente para definir prioridades temáticas.
          </p>
          <ul className="space-y-2 text-sm text-eu-text font-medium">
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-teal rounded-full mr-2"></div> Propuesta de nuevos retos</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-teal rounded-full mr-2"></div> Evaluación de impacto</li>
            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-eu-teal rounded-full mr-2"></div> Networking y sinergias</li>
          </ul>
        </div>
      </div>

      {/* Transparency & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-eu-border shadow-sm p-8">
          <h3 className="text-lg font-bold text-eu-text mb-5">Documentación de Transparencia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-4 rounded-lg border border-eu-border hover:border-eu-blue hover:bg-eu-bg transition-colors group">
              <FileSignature className="w-5 h-5 text-gray-400 group-hover:text-eu-blue mr-3" />
              <div>
                <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue">Carta de Gobernanza</p>
                <p className="text-xs text-gray-500">Actualizada Ene 2024</p>
              </div>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg border border-eu-border hover:border-eu-blue hover:bg-eu-bg transition-colors group">
              <FileSignature className="w-5 h-5 text-gray-400 group-hover:text-eu-blue mr-3" />
              <div>
                <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue">Actas de Reunión</p>
                <p className="text-xs text-gray-500">Última: Marzo 2024</p>
              </div>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg border border-eu-border hover:border-eu-blue hover:bg-eu-bg transition-colors group">
              <FileSignature className="w-5 h-5 text-gray-400 group-hover:text-eu-blue mr-3" />
              <div>
                <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue">Declaración de Conflictos</p>
                <p className="text-xs text-gray-500">Registro público</p>
              </div>
            </a>
            <a href="#" className="flex items-center p-4 rounded-lg border border-eu-border hover:border-eu-blue hover:bg-eu-bg transition-colors group">
              <FileSignature className="w-5 h-5 text-gray-400 group-hover:text-eu-blue mr-3" />
              <div>
                <p className="font-semibold text-sm text-eu-text group-hover:text-eu-blue">Auditoría Anual</p>
                <p className="text-xs text-gray-500">Ejercicio 2023</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-eu-orange rounded-xl shadow-sm p-8 text-white flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold mb-3">Tu voz importa</h3>
          <p className="mb-6 text-sm text-white/90">Participa en la definición de los próximos retos estratégicos de la red.</p>
          <button className="inline-flex items-center px-5 py-2.5 bg-white text-eu-orange rounded font-bold hover:bg-gray-100 transition-colors text-sm">
            Participa en ConsensUE
            <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
