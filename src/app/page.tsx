import { main } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { CoverDemo } from "./components/CoverDemo";
import { LampDemo } from "./components/LampDemo";

export default function Home() {
  return (
   
  <main  className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  {/* <h1 className="text-2xl text-center text-white">Yellow is new Green</h1> */}
  <HeroSection/>
  {/* <CoverDemo/> */}
  <LampDemo/>
  </main>
  );
}
