import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
// import { useTranslation } from "react-i18next";
import useRemoveScroll from "../../../hooks/useRemoveScroll";
import ProjectCard from "./ProjectCard";

import projectOne from "/images/cat.jpg";

import SectionContainer from "../../containers/SectionContainer";
import SectionHeader from "../../SectionHeader";
import { useTranslation } from "react-i18next";

const images: { src: string }[] = [
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
  const { t } = useTranslation(["common"]);

  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center mx-auto">
        <SectionHeader title={t("Gallary")} />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5 ">
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
      </div>

    </SectionContainer>
  );
};

export default OurProjects;
