export default function Footer() {
  return (
    <footer className="h-[68px] bg-eu-footer text-white flex items-center px-6 text-[11px] gap-10 border-t-4 border-eu-blue mt-auto">
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
      
      <div className="ml-auto flex gap-4">
        <a href="#" className="text-white hover:underline">Accesibilidad</a>
        <a href="#" className="text-white hover:underline">Privacidad</a>
        <a href="#" className="text-white hover:underline">Mapa Web</a>
      </div>
    </footer>
  );
}
