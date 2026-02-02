import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import MarketPull from './components/MarketPull';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import MarketOpp from './components/MarketOpp';
import CompetitiveEdge from './components/CompetitiveEdge';
import RevenueModel from './components/RevenueModel';
import Roadmap from './components/Roadmap';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Challenge />
        <MarketPull />
        <Solution />
        <HowItWorks />
        <MarketOpp />
        <CompetitiveEdge />
        <RevenueModel />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App;
