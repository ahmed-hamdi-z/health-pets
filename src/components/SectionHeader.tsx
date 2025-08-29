import type { HTMLAttributes } from "react";
import { trim } from "../utils/general";

const SectionHeader = ({
  className = "",
  title,
  ...attributes
}: {
  title: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <h1
      className={trim(`
      responsive-subCover 
      font-semibold
      text-center
        ${className}`)}
      {...attributes}
    >
      {title}
    </h1>
  );
};

export default SectionHeader;
