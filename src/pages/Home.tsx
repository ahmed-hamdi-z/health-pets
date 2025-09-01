import PageContainer from "../components/containers/PageContainer";
import AdviceSection from "../components/sections/advice";
import ExperienceSection from "../components/sections/experience";
import HomeHero from "../components/sections/HomeHero";
import Reels from "../components/sections/reels";
import { StaggerTestimonials } from "../components/sections/reviews";
import OurProjects from "../components/sections/OurProjects";
import ServicesSection from "../components/sections/services";
import PetShowcase from "../components/sections/shop/PetShowcase";

const Home = () => {
  return (
    <PageContainer>
      <HomeHero />
      <AdviceSection />
      <ExperienceSection />
      <ServicesSection />
      <Reels />
      <OurProjects />

      <>
        <PetShowcase
          title="Explore all"
          subtitle="about your pet"
          description="The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps..."
          products={[
            { id: 1, image: "/images/cat.jpg" },
            { id: 2, image: "/images/cat.jpg" },
            { id: 3, image: "/images/cat.jpg" },
            { id: 4, image: "/images/cat.jpg" },
            { id: 5, image: "/images/cat.jpg" },
          ]}
          exploreLink="#"
          petImage="/images/cat-shop.png"
        />
      </>

      <StaggerTestimonials />
    </PageContainer>
  );
};

export default Home;
