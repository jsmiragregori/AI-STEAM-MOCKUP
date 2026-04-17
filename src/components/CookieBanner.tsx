import { useLanguage } from '../context/LanguageContext';

interface CookieBannerProps {
  onAccept: () => void;
}

export default function CookieBanner({ onAccept }: CookieBannerProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.85)] text-white p-3 px-6 flex justify-between items-center z-50">
      <div>
        <strong>{t('cookieBanner.legal')}</strong> {t('cookieBanner.text')}
      </div>
      <button
        onClick={onAccept}
        className="bg-eu-teal text-white border-none px-3 py-1.5 rounded font-semibold cursor-pointer hover:bg-eu-purple ml-4 whitespace-nowrap"
      >
        {t('cookieBanner.accept')}
      </button>
    </div>
  );
}

