import "@/App.css";
import "@/i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { MealsSection } from "./components/MealsSection";
import { ClothesSection } from "./components/ClothesSection";
import { DonateSection } from "./components/DonateSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <MealsSection />
        <ClothesSection />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#F8FCFF',
            border: '1px solid #D4E2ED',
            color: '#1A2B3D',
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
