// import { createFileRoute } from "@tanstack/react-router";
import { Routes, Route } from 'react-router'
import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { Ticker } from "./components/landing/Ticker";
import { MoversSection } from "./components/landing/MoversSection";
import { Highlights } from "./components/landing/Highlights";
import { FeaturedCoins } from "./components/landing/FeaturedCoins";
import { MarketOverview } from "./components/landing/MarketOverview";
import { CTA } from "./components/landing/CTA";
import { Footer } from "./components/landing/Footer";
import LoginSignup from './components/auth/LoginSignup'

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <MoversSection />
      <Highlights />
      <FeaturedCoins />
      <MarketOverview />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<LoginSignup />} />
      </Routes>
    </main>
  );
}

