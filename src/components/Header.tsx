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

  const LanguageSelector = ({ size = 'normal' }: { size?: 'compact' | 'normal' }) => (
    <div className={`flex items-center font-semibold text-gray-700 gap-2 ${size === 'compact' ? 'text-xs gap-1' : 'text-sm'}`}>
      <button
        onClick={() => setLanguage('en' as Language)}
        className={`cursor-pointer px-2 py-1 rounded transition-colors whitespace-nowrap ${
          language === 'en' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
        } ${size === 'compact' ? 'px-1 py-0.5 text-xs' : ''}`}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => setLanguage('es' as Language)}
        className={`cursor-pointer px-2 py-1 rounded transition-colors whitespace-nowrap ${
          language === 'es' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
        } ${size === 'compact' ? 'px-1 py-0.5 text-xs' : ''}`}
      >
        ES
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => setLanguage('va' as Language)}
        className={`cursor-pointer px-2 py-1 rounded transition-colors whitespace-nowrap ${
          language === 'va' ? 'text-eu-text font-bold bg-gray-100' : 'hover:text-eu-blue hover:bg-gray-100'
        } ${size === 'compact' ? 'px-1 py-0.5 text-xs' : ''}`}
      >
        VA
      </button>
    </div>
  );

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

        {/* Desktop Right Actions - Visible from lg and up */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector - Desktop */}
          <LanguageSelector size="normal" />

          {/* SSO Button */}
          <button className="bg-eu-blue text-white border-none px-4 py-2 rounded font-semibold text-sm cursor-pointer hover:bg-blue-800 transition-colors shrink-0 min-h-10">
            {t('header.privateAccess')}
          </button>

          {/* Institutional Shortcuts */}
          <div className="flex items-center gap-2 border-l border-eu-border pl-4">
            <a href="https://aules.edu.gva.es/" target="_blank" rel="noopener noreferrer" className="bg-eu-teal/10 border border-eu-teal text-eu-teal px-3 py-2 rounded text-sm font-bold cursor-pointer hover:bg-eu-teal hover:text-white transition-colors inline-block">
              {t('header.aules')}
            </a>
            <button className="bg-eu-orange/10 border border-eu-orange text-eu-orange px-3 py-2 rounded text-sm font-bold cursor-pointer hover:bg-eu-orange hover:text-white transition-colors">
              {t('header.consensUE')}
            </button>
          </div>
        </div>

        {/* Tablet Right Actions - md to lg */}
        <div className="hidden md:flex lg:hidden items-center gap-2">
          {/* SSO Button - Tablet */}
          <button className="bg-eu-blue text-white border-none px-3 py-2 rounded font-semibold text-sm cursor-pointer hover:bg-blue-800 transition-colors shrink-0 min-h-10">
            {t('header.privateAccess')}
          </button>

          {/* Hamburger for Tablet */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-100 transition-colors h-10 w-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Right Actions - Visible below md */}
        <div className="flex md:hidden items-center gap-2">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-100 transition-colors h-10 w-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Nav Menu - lg and up */}
      <nav className="hidden lg:flex bg-eu-blue h-12 px-6 gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-xs sm:text-sm font-medium flex items-center px-2 sm:px-3 cursor-pointer border-b-[3px] transition-all duration-200 whitespace-nowrap ${
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

      {/* Mobile Nav Menu - Dropdown (below lg) */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-eu-blue border-t border-eu-blue/20 max-h-[calc(100vh-128px)] overflow-y-auto">
          {/* Mobile Navigation Items */}
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-4 text-left font-medium border-l-4 transition-all duration-200 min-h-12 flex items-center text-sm ${
                  activeTab === item.id
                    ? 'bg-eu-blue/20 border-eu-yellow text-white'
                    : 'border-transparent text-white/80 hover:text-white'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Selector Section - Mobile Only */}
          <div className="border-t border-eu-blue/20 px-6 py-4">
            <p className="text-xs text-white/80 font-bold uppercase mb-3 tracking-wide">{t('header.language')}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en' as Language)}
                className={`flex-1 px-3 py-2 rounded font-bold transition-all min-h-10 flex items-center justify-center text-sm ${
                  language === 'en'
                    ? 'bg-eu-yellow text-eu-blue shadow-lg'
                    : 'bg-white/40 text-white hover:bg-white/60 active:bg-white/50'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es' as Language)}
                className={`flex-1 px-3 py-2 rounded font-bold transition-all min-h-10 flex items-center justify-center text-sm ${
                  language === 'es'
                    ? 'bg-eu-yellow text-eu-blue shadow-lg'
                    : 'bg-white/40 text-white hover:bg-white/60 active:bg-white/50'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('va' as Language)}
                className={`flex-1 px-3 py-2 rounded font-bold transition-all min-h-10 flex items-center justify-center text-sm ${
                  language === 'va'
                    ? 'bg-eu-yellow text-eu-blue shadow-lg'
                    : 'bg-white/40 text-white hover:bg-white/60 active:bg-white/50'
                }`}
              >
                VA
              </button>
            </div>
          </div>

          {/* Mobile Actions Section */}
          <div className="border-t border-eu-blue/20 px-4 sm:px-6 py-6 space-y-3">
            {/* SSO Button in Mobile Menu */}
            <button className="w-full bg-white text-eu-blue border-none px-4 py-3 rounded font-semibold text-sm cursor-pointer hover:bg-gray-100 transition-colors min-h-12 flex items-center justify-center">
              {t('header.privateAccess')}
            </button>

            {/* Aules Button - White background for contrast */}
            <a href="https://aules.edu.gva.es/" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center text-center bg-white border border-eu-teal text-eu-teal px-4 py-3 rounded text-sm font-bold cursor-pointer hover:bg-gray-50 transition-colors min-h-12">
              {t('header.aules')}
            </a>

            {/* ConsensUE Button - White background for contrast */}
            <button className="w-full bg-white border border-eu-orange text-eu-orange px-4 py-3 rounded text-sm font-bold cursor-pointer hover:bg-gray-50 transition-colors min-h-12 flex items-center justify-center">
              {t('header.consensUE')}
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
