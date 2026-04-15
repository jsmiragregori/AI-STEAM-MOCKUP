import { Building2, GraduationCap, HeartHandshake, Palette } from 'lucide-react';

export default function Network() {
  const categories = [
    { id: 'edu', name: 'Educación Superior e IES', icon: GraduationCap },
    { id: 'ind', name: 'Industria y PYMEs', icon: Building2 },
    { id: 'soc', name: 'ONGs y Sociedad Civil', icon: HeartHandshake },
    { id: 'cul', name: 'Instituciones Culturales', icon: Palette },
  ];

  return (
    <div className="animate-in fade-in duration-300 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-eu-blue text-white p-10 rounded-xl mb-8">
        <h1 className="text-[32px] font-bold mb-4">El Ecosistema AI-STEAM</h1>
        <p className="text-lg text-white/80 max-w-3xl">
          Nuestra misión es conectar el talento académico con los desafíos reales de la industria, alineados con el programa Europa Digital y ENRED.
        </p>
      </div>

      {/* Quadruple Helix Directory */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-eu-text mb-6">Directorio "Cuádruple Hélice"</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="bg-white rounded-[10px] border border-eu-border overflow-hidden flex flex-col">
                <div className="flex items-center p-4 border-b border-eu-border bg-eu-bg">
                  <Icon className="w-5 h-5 mr-3 text-eu-teal" />
                  <h3 className="font-semibold text-eu-text text-sm">{cat.name}</h3>
                </div>
                <div className="p-4 flex-1">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Mock Logos */}
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-video bg-[#E5E7EB] rounded flex items-center justify-center border border-eu-border">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">Socio {i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Adhesion Form */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-eu-border overflow-hidden shadow-sm">
          <div className="bg-eu-bg p-6 border-b border-eu-border">
            <h2 className="text-xl font-bold text-eu-blue">Formulario de Adhesión</h2>
            <p className="text-sm text-eu-teal font-semibold mt-1">Adhesión bajo el Acuerdo de Gasto Cero</p>
          </div>
          <div className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-[13px] font-bold text-eu-text mb-1">Nombre de la Entidad / Empresa</label>
                  <input type="text" name="company" id="company" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue" placeholder="Ej. Tech Solutions SL" />
                </div>

                <div>
                  <label htmlFor="sector" className="block text-[13px] font-bold text-eu-text mb-1">Sector (Cuádruple Hélice)</label>
                  <select id="sector" name="sector" className="w-full border border-eu-border rounded-md p-2.5 text-sm bg-white focus:outline-none focus:border-eu-blue">
                    <option>Educación Superior e IES</option>
                    <option>Industria y PYMEs</option>
                    <option>ONGs y Sociedad Civil</option>
                    <option>Instituciones Culturales</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact" className="block text-[13px] font-bold text-eu-text mb-1">Persona de Contacto</label>
                  <input type="text" name="contact" id="contact" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue" placeholder="Nombre completo" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-[13px] font-bold text-eu-text mb-1">Correo Electrónico Institucional</label>
                  <input type="email" name="email" id="email" className="w-full border border-eu-border rounded-md p-2.5 text-sm focus:outline-none focus:border-eu-blue" placeholder="correo@entidad.com" />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="submit" className="bg-eu-orange text-white px-6 py-2.5 rounded-md font-bold border-none hover:bg-orange-600 transition-colors">
                  Solicitar Adhesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
