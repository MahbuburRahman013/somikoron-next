import Footer from "@/components/home/Footer";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Stairs from "@/components/home/Stairs";
import UnderHero from "@/components/home/UnderHero";
import YouTube from "@/components/home/YouTube";

export default function Home() {
  return (
    <div className=" w-full relative text-gray-100">
      <Navbar position="absolute" />
      <Hero />
      <UnderHero />
      <Stairs />
      <YouTube />
      <Gallery />
      <Footer />
    </div>
  );
}
