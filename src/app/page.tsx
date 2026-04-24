import HeroSectionLanding from "../components/LandingPage/HeroSectionLanding";
import JenisKambing from "../components/LandingPage/JenisKambing";
import KelompokSection from "../components/LandingPage/KelompokSection";
import TentangLanding from "../components/LandingPage/TentangLanding";
import Navbar from "../components/Layouts/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionLanding />
        <TentangLanding />
        <JenisKambing />
        <KelompokSection />
      </main>
    </>
  );
};

export default page;
