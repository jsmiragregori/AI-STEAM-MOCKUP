import { Tab } from '../App';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const navItems: { id: Tab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'red', label: 'La Red' },
    { id: 'sectores', label: 'Sectores' },
    { id: 'banco-retos', label: 'Banco de Retos' },
    { id: 'formacion', label: 'Formación' },
    { id: 'conocimiento', label: 'Conocimiento' },
    { id: 'actualidad', label: 'Actualidad' },
    { id: 'gobernanza', label: 'Gobernanza' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-eu-border h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab('inicio')}
        >
          <div className="w-10 h-10 bg-eu-blue rounded flex items-center justify-center text-white font-bold text-xl">
            AI
          </div>
          <div>
            <span className="font-bold text-xl text-eu-blue block leading-none">AI-STEAM Network</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">Generalitat Valenciana · CEICE · Digital Europe</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center text-xs font-semibold text-gray-600">
            <span className="cursor-pointer hover:text-eu-blue">EN</span>
            <span className="mx-1">|</span>
            <span className="cursor-pointer text-eu-text font-bold">ES</span>
            <span className="mx-1">|</span>
            <span className="cursor-pointer hover:text-eu-blue">VA</span>
          </div>

          {/* SSO Button */}
          <button className="bg-eu-blue text-white border-none px-4 py-2 rounded font-semibold text-[13px] cursor-pointer hover:bg-blue-800 transition-colors">
            Acceso Área Privada
          </button>

          {/* Institutional Shortcuts */}
          <div className="hidden lg:flex items-center gap-2 border-l border-eu-border pl-4 ml-2">
            <button className="bg-eu-teal/10 border border-eu-teal/30 text-eu-teal px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer hover:bg-eu-teal/20 transition-colors">
              Aules
            </button>
            <button className="bg-eu-orange/10 border border-eu-orange/30 text-eu-orange px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer hover:bg-eu-orange/20 transition-colors">
              ConsensUE
            </button>
          </div>
        </div>
      </header>

      {/* Nav Menu */}
      <nav className="bg-eu-blue h-12 flex px-6 gap-1 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`text-sm font-medium flex items-center px-3 cursor-pointer border-b-[3px] transition-all duration-200 whitespace-nowrap ${
              activeTab === item.id
                ? 'text-white border-eu-orange'
                : 'text-white/80 border-transparent hover:text-white hover:border-white/40'
            }`}
            aria-current={activeTab === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
