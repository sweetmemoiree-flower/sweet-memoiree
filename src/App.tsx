/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PriceList from './components/PriceList';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PromoSection from './components/PromoSection';

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <PromoSection />
        <Hero />
        <About />
        <PriceList />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
