import useScrollInToView from "../hooks/useScrollInToView";
import { trim } from "../utils/general";


const SimpleCard = ({
  img,
  title,
  subTitle,
  className = "",
  imgClassName = "",
  parentInToView,
  ...attributes
}: {
  img: string;
  title: string;
  subTitle: string;
  className?: string;
  imgClassName?: string;
  parentInToView: boolean;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <div
      ref={targetRef}
      className={trim(`
        flex
        md:gap-4
        gap-2
        items-center
        transition-opacity
        duration-500
        ease-in-out
        ${parentInToView && isInView ? "opacity-100" : "opacity-0"}
        ${className}`)}
      {...attributes}
    >
      <img
        src={img}
        alt="simple-img"
        className={trim(`
          max-w-[200px]
          w-full
          ${imgClassName}`)}
      />

      <div className="text-black">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4 className="text-md font-thin line-clamp-2">{subTitle}</h4>
      </div>
    </div>
  );
};

export default SimpleCard;
