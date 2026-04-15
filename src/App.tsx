import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './components/views/Home';
import Network from './components/views/Network';
import Marketplace from './components/views/Marketplace';
import Knowledge from './components/views/Knowledge';
import Governance from './components/views/Governance';
import News from './components/views/News';

export type Tab = 'inicio' | 'red' | 'banco-retos' | 'conocimiento' | 'gobernanza' | 'actualidad';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const renderView = () => {
    switch (activeTab) {
      case 'inicio': return <Home setActiveTab={setActiveTab} />;
      case 'red': return <Network />;
      case 'banco-retos': return <Marketplace />;
      case 'conocimiento': return <Knowledge />;
      case 'gobernanza': return <Governance />;
      case 'actualidad': return <News />;
      default: return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-eu-bg font-sans text-eu-text">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-[112px]">
        {renderView()}
      </main>

      <Footer />
      
      {!cookiesAccepted && (
        <CookieBanner onAccept={() => setCookiesAccepted(true)} />
      )}
    </div>
  );
}
