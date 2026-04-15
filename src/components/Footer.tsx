export default function Footer() {
  return (
    <footer className="bg-eu-footer text-white flex items-center px-6 text-sm gap-10 border-t-4 border-eu-blue mt-auto py-4">
      <div className="flex items-center gap-5">
        <div className="w-[30px] h-[20px] bg-[#003399]"></div>
        <div>
          Financiado por la<br/>
          <strong>Unión Europea</strong>
        </div>
      </div>
      
      <div>
        Generalitat Valenciana<br/>
        CEICE
      </div>
      
      <div className="ml-auto flex gap-6">
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">Accesibilidad</a>
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">Privacidad</a>
        <a href="#" className="text-white hover:text-eu-yellow transition-colors font-medium text-sm">Mapa Web</a>
      </div>
    </footer>
  );
}
