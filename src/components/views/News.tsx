import { Calendar, ArrowRight, Rss } from 'lucide-react';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'La Red AI-STEAM recibe financiación del programa Europa Digital',
      date: '15 Mar 2024',
      category: 'Institucional',
      excerpt: 'El consorcio liderado por la Generalitat Valenciana obtiene 2M€ para expandir los nodos de innovación en FP.'
    },
    {
      id: 2,
      title: 'Hackathon "Green AI": Estudiantes de FP y Máster desarrollan soluciones para el sector cerámico',
      date: '02 Mar 2024',
      category: 'Eventos',
      excerpt: 'Más de 50 equipos multidisciplinares compitieron durante 48 horas en las instalaciones de la UVEG.'
    },
    {
      id: 3,
      title: 'Publicada la nueva Guía de Ética en IA para entornos educativos',
      date: '28 Feb 2024',
      category: 'Recursos',
      excerpt: 'El documento, disponible en el repositorio OER, establece las bases para el uso responsable de algoritmos en el aula.'
    }
  ];

  const events = [
    { id: 1, date: '25 Abr', title: 'Jornada de Transferencia Tecnológica', location: 'Ciudad Politécnica de la Innovación' },
    { id: 2, date: '10 May', title: 'Webinar: Gemelos Digitales en la Industria 4.0', location: 'Online' },
    { id: 3, date: '15 Jun', title: 'Asamblea General de Socios AI-STEAM', location: 'Conselleria de Educación' },
  ];

  return (
    <div className="animate-in fade-in duration-300 p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-eu-border pb-4">
        <div>
          <h1 className="text-3xl font-bold text-eu-text mb-2">Actualidad y Agenda</h1>
          <p className="text-gray-600">Últimas noticias y próximos eventos de la red.</p>
        </div>
        <button className="hidden sm:flex items-center text-eu-blue font-bold hover:underline bg-transparent border-none cursor-pointer">
          <Rss className="w-4 h-4 mr-2" />
          Suscribirse al boletín
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-eu-text mb-4">Últimas Noticias</h2>
          {news.map((item) => (
            <article key={item.id} className="bg-white p-6 rounded-xl border border-eu-border shadow-sm hover:border-eu-blue transition-colors group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-eu-teal uppercase tracking-wider">{item.category}</span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-eu-text mb-2 group-hover:text-eu-blue transition-colors">
                <a href="#">{item.title}</a>
              </h3>
              <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-eu-blue hover:underline">
                Leer más <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Agenda Sidebar */}
        <div>
          <h2 className="text-xl font-bold text-eu-text mb-4">Próximos Eventos</h2>
          <div className="bg-white rounded-xl border border-eu-border shadow-sm overflow-hidden">
            <ul className="divide-y divide-eu-border">
              {events.map((event) => (
                <li key={event.id} className="p-5 hover:bg-eu-bg transition-colors">
                  <div className="flex items-start">
                    <div className="bg-eu-bg border border-eu-border rounded-lg p-2 text-center min-w-[60px] mr-4">
                      <span className="block text-lg font-bold text-eu-blue leading-none">{event.date.split(' ')[0]}</span>
                      <span className="block text-xs font-semibold text-gray-500 uppercase mt-1">{event.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-eu-text mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-eu-bg border-t border-eu-border text-center">
              <a href="#" className="text-sm font-bold text-eu-blue hover:underline">Ver calendario completo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
