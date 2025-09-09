import { useTranslation } from "react-i18next";
import PageContainer from "../components/containers/PageContainer";
import AboutHero from "../components/sections/about/about-hero";
import BlogsHero from "../components/sections/blogs/BlogsHero";
import OurBlogs from "../components/sections/blogs/OurBlogs";

export default function Blogs() {
  const { t } = useTranslation(["header"]);
  return (
    <PageContainer >
      <AboutHero imageUrl="/images/bolg-hero.png" title={t("nav.blogs")} />
      <BlogsHero />
      <OurBlogs />
    </PageContainer>
  );
}
