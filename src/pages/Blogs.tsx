import Banner from "../components/Banner";
import PageContainer from "../components/containers/PageContainer";
import BlogsHero from "../components/sections/blogs/BlogsHero";
import OurBlogs from "../components/sections/blogs/OurBlogs";

export default function Blogs() {
  return (
    <PageContainer paddingTop>
      <BlogsHero />
      <Banner contact />
      <OurBlogs />
    </PageContainer>
  );
}
