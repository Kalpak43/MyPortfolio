import Hero from "@/components/LandingPage/Hero";
import Skills from "@/components/LandingPage/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 w-full space-y-8">
      <Hero />
      <Skills />
    </main>
  );
}
