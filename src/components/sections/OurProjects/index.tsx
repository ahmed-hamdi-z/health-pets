import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
// import { useTranslation } from "react-i18next";
import useRemoveScroll from "../../../hooks/useRemoveScroll";
import ProjectCard from "./ProjectCard";

import projectOne from "/images/cat.jpg";

import SectionContainer from "../../containers/SectionContainer";

const images: { src: string }[] = [
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
  { src: projectOne },
];

const OurProjects = () => {
  const [open, setOpen] = useState(false);

  useRemoveScroll(open);

  // const { t } = useTranslation(["home"]);

  return (
    <SectionContainer className="w-full h-screen">
      {/* <SectionHeader title={t("ourProjects.title")} /> */}
      <ul className="col-span-1 row-span-2 md:col-span-1 md:row-span-1">
        {images.map((image, i) => (
          <ProjectCard image={image} key={i} setOpen={setOpen} />
        ))}
      </ul>
      <Lightbox
        plugins={[Captions, Zoom, Thumbnails]}
        open={open}
        slides={images}
        close={() => setOpen(false)}
      />
    </SectionContainer>
  );
};

export default OurProjects;
