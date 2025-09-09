import { useTranslation } from "react-i18next";
import blogOneImg from "../../../assets/img/cat.jpg";
import blogTwoImg from "../../../assets/img/cat.jpg";
import blogThreeImg from "../../../assets/img/cat.jpg";

import { useNavigate } from "react-router-dom";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import { appRoutes } from "../../../config";
import SectionContainer from "../../containers/SectionContainer";
import { trim } from "../../../utils/general";
import SimpleCard from "../../SimpleCard";

const articlesImgs = [
  blogOneImg,
  blogTwoImg,
  blogThreeImg,
  blogTwoImg,
  blogThreeImg,
];

const OurBlogs = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();

  const ourBlogsArr: {
    title: string;
    subTitle: string;
    img: string;
    onClick: () => void;
  }[] = Object.values(t("articles", { returnObjects: true })).map(
    (item, i) => ({
      img: articlesImgs[i],
      title: item.title,
      subTitle: item.subTitle,
      onClick: () =>
        push(`${appRoutes.blogs}${appRoutes.articlesQuery.ref}${i + 1}`),
    })
  );

  const { activationArr } = useActivation(ourBlogsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer className="" wraperClassName="py-5">
      <div
        ref={targetRef}
        className={trim(`
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-5 
          justify-items-center
          mt-7`)}
      >
        {ourBlogsArr.map((blog, i) => (
          <SimpleCard
            key={i}
            {...blog}
            className="flex-col !items-start hover:bg-[#99D8E0] cursor-pointer p-2 rounded-md max-w-[350px]"
            imgClassName="max-w-[350px] max-h-[300px]"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurBlogs;
