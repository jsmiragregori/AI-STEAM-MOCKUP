import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-eu-footer text-white flex items-center px-6 text-sm gap-10 border-t-4 border-eu-blue mt-auto py-4">
      <div className="flex items-center gap-5">
        <div className="w-[30px] h-[20px] bg-eu-blue"></div>
        <div>
          {t('footer.fundedBy')}<br/>
          <strong>{t('footer.europeanUnion')}</strong>
        </div>
      </div>

      <div>
        Generalitat Valenciana<br/>
        CEICE
      </div>

      <div className="ml-auto flex gap-6">
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">{t('footer.accessibility')}</a>
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">{t('footer.privacy')}</a>
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">{t('footer.sitemap')}</a>
      </div>
    </footer>
  );
}
