interface CookieBannerProps {
  onAccept: () => void;
}

export default function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-20 left-6 right-6 bg-[rgba(0,0,0,0.85)] text-white p-3 px-6 rounded-lg text-xs flex justify-between items-center z-50">
      <div>
        <strong>Aviso Legal:</strong> Utilizamos cookies técnicas necesarias para el funcionamiento del portal. El tratamiento de datos cumple con el RGPD.
      </div>
      <button 
        onClick={onAccept}
        className="bg-eu-teal text-white border-none px-3 py-1.5 rounded font-semibold cursor-pointer hover:bg-teal-700 ml-4 whitespace-nowrap"
      >
        Aceptar
      </button>
    </div>
  );
}
