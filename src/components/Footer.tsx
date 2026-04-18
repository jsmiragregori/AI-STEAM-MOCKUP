import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-eu-footer text-white border-t-4 border-eu-blue mt-auto">
      <div className="px-4 sm:px-6 py-6 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          {/* EU Logo & Text */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="w-7.5 h-5 bg-eu-blue shrink-0"></div>
            <div className="text-xs sm:text-sm">
              {t('footer.fundedBy')}<br/>
              <strong>{t('footer.europeanUnion')}</strong>
            </div>
          </div>

          {/* Org */}
          <div className="text-xs sm:text-sm hidden sm:block">
            Generalitat Valenciana<br/>
            CEICE
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 sm:gap-6 sm:ml-auto text-xs sm:text-sm">
            <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium">{t('footer.accessibility')}</a>
            <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium">{t('footer.privacy')}</a>
            <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium">{t('footer.sitemap')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
