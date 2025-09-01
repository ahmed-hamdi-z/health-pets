import type { Dispatch, SetStateAction } from "react";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/general";

const ProjectCard = ({
  image,
  setOpen,
}: {
  image: { src: string };
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <li
      ref={targetRef}
      className={trim(`
        transition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}`)}
    >
      <img
        src={image.src}
        alt="gallery"
        loading="lazy"
        className="cursor-pointer hover:scale-105 transform transition-transform rounded-lg hover:shadow-2xl w-96 h-96  "
        onClick={() => setOpen(true)}
      />
    </li>
  );
};

export default ProjectCard;
