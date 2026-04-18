import { useState } from 'react';
import { Tab } from '../App';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Tab; key: string }[] = [
    { id: 'inicio', key: 'nav.inicio' },
    { id: 'red', key: 'nav.red' },
    { id: 'sectores', key: 'nav.sectores' },
    { id: 'banco-retos', key: 'nav.bancoRetos' },
    { id: 'formacion', key: 'nav.formacion' },
    { id: 'conocimiento', key: 'nav.conocimiento' },
    { id: 'actualidad', key: 'nav.actualidad' },
    { id: 'gobernanza', key: 'nav.gobernanza' },
  ];

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-eu-border h-16 flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
          onClick={() => handleNavClick('inicio')}
        >
          <div className="w-10 h-10 bg-eu-blue rounded flex items-center justify-center text-white font-bold text-lg sm:text-xl shrink-0">
            AI
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg sm:text-xl text-eu-blue block leading-none">{t('header.title')}</span>
            <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase">{t('header.subtitle')}</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Language Selector - Desktop */}
          <div className="hidden lg:flex items-center text-sm font-semibold text-gray-700 gap-2">
            <button
              onClick={() => setLanguage('en' as Language)}
              className={`cursor-pointer px-2 py-1 rounded transition-colors ${
                language === 'en' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setLanguage('es' as Language)}
              className={`cursor-pointer px-2 py-1 rounded transition-colors ${
                language === 'es' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
              }`}
            >
              ES
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setLanguage('va' as Language)}
              className={`cursor-pointer px-2 py-1 rounded transition-colors ${
                language === 'va' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
              }`}
            >
              VA
            </button>
          </div>

          {/* SSO Button - Visible on all screens */}
          <button className="bg-eu-blue text-white border-none px-3 sm:px-4 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm cursor-pointer hover:bg-blue-800 transition-colors shrink-0 h-10 min-w-max">
            {t('header.privateAccess')}
          </button>

          {/* Institutional Shortcuts - Desktop Only */}
          <div className="hidden lg:flex items-center gap-2 border-l border-eu-border pl-4">
            <a href="https://aules.edu.gva.es/" target="_blank" rel="noopener noreferrer" className="bg-eu-teal/10 border border-eu-teal text-eu-teal px-3 py-2 rounded text-sm font-bold cursor-pointer hover:bg-eu-teal hover:text-white transition-colors inline-block">
              {t('header.aules')}
            </a>
            <button className="bg-eu-orange/10 border border-eu-orange text-eu-orange px-3 py-2 rounded text-sm font-bold cursor-pointer hover:bg-eu-orange hover:text-white transition-colors">
              {t('header.consensUE')}
            </button>
          </div>
        </div>

        {/* Mobile Language & Hamburger */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2">
          {/* Mobile Language Selector - compact */}
          <div className="hidden sm:flex items-center text-xs font-semibold text-gray-700 gap-0.5">
            <button
              onClick={() => setLanguage('en' as Language)}
              className={`cursor-pointer px-1 py-0.5 rounded transition-colors text-xs h-7 ${
                language === 'en' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es' as Language)}
              className={`cursor-pointer px-1 py-0.5 rounded transition-colors text-xs h-7 ${
                language === 'es' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('va' as Language)}
              className={`cursor-pointer px-1 py-0.5 rounded transition-colors text-xs h-7 ${
                language === 'va' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue'
              }`}
            >
              VA
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-gray-100 transition-colors h-10 w-10"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Nav Menu */}
      <nav className="hidden lg:flex bg-eu-blue h-12 px-6 gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-sm font-medium flex items-center px-3 cursor-pointer border-b-[3px] transition-all duration-200 whitespace-nowrap ${
              activeTab === item.id
                ? 'text-white border-eu-yellow'
                : 'text-white/80 border-transparent hover:text-white hover:border-white/40'
            }`}
            aria-current={activeTab === item.id ? 'page' : undefined}
          >
            {t(item.key)}
          </button>
        ))}
      </nav>

      {/* Mobile Nav Menu - Dropdown */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-eu-blue border-t border-eu-blue/20 max-h-[calc(100vh-128px)] overflow-y-auto">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-4 text-left font-medium border-l-4 transition-all duration-200 min-h-12 flex items-center ${
                  activeTab === item.id
                    ? 'bg-eu-blue/20 border-eu-yellow text-white'
                    : 'border-transparent text-white/80 hover:text-white'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="border-t border-eu-blue/20 px-6 py-6 space-y-3">
            <button className="w-full bg-white text-eu-blue border-none px-4 py-3 rounded font-semibold text-sm cursor-pointer hover:bg-gray-100 transition-colors min-h-12 flex items-center justify-center">
              {t('header.privateAccess')}
            </button>
            <a href="https://aules.edu.gva.es/" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center text-center bg-eu-teal/10 border border-eu-teal text-eu-teal px-3 py-3 rounded text-sm font-bold cursor-pointer hover:bg-eu-teal hover:text-white transition-colors min-h-12">
              {t('header.aules')}
            </a>
            <button className="w-full bg-eu-orange/10 border border-eu-orange text-eu-orange px-3 py-3 rounded text-sm font-bold cursor-pointer hover:bg-eu-orange hover:text-white transition-colors min-h-12 flex items-center justify-center">
              {t('header.consensUE')}
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
