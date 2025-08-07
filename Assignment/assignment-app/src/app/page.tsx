import Image from "next/image";
import HeroSection from "./heroSection/page";
import MidSection from "./midSection/page";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MidSection />
    </>
  );
}
