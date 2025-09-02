import Banner from "../components/Banner";
import PageContainer from "../components/containers/PageContainer";
import AboutHero from "../components/sections/about/about-hero";
import BlogsHero from "../components/sections/blogs/BlogsHero";
import OurBlogs from "../components/sections/blogs/OurBlogs";

export default function Blogs() {
  return (
    <PageContainer>
      <AboutHero imageUrl="/images/bolg-hero.png" title="Blogs" />
      <BlogsHero />
      <Banner contact />
      <OurBlogs />
    </PageContainer>
  );
}
