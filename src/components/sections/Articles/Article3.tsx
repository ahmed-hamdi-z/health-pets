import { useTranslation } from "react-i18next";
import ArticleHero from "./ArticleHero";
import readingArticle3 from "../../../assets/img/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import type { ArticlesEnum } from "../../../enum/Articles";
import SectionContainer from "../../containers/SectionContainer";

const Article3 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  // Type definitions for complex array structures in the JSON
  type VaccinationType = {
    title: string;
    steps: string[];
  };

  type QaItem = {
    title: string;
    description: string;
  };

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row m-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          {/* Section 1: Importance of Vaccinations */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article3.content.descriptionTitle1")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article3.content.itemsTitle1", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Types of Vaccinations */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title2")}
            </h2>
            <p className="text-responsive-2md">
              {t("article3.content.descriptionTitle2")}
            </p>
            <ul className="mt-2 text-responsive-2md">
              {(
                t("article3.content.itemsTitle2", {
                  returnObjects: true,
                }) as VaccinationType[]
              ).map(({ title, steps }, i) => (
                <li className="mt-2" key={i + "v"}>
                  <h3 className="text-responsive-2sm font-medium">{title}</h3>
                  <ul className="list-disc pr-7 pl-7">
                    {steps.map((step, j) => (
                      <li key={j + "s"} className="text-responsive-xs">
                        {step}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
             <p className="text-responsive-2md mt-2">
              {t("article3.content.info")}
            </p>
          </div>

          {/* Section 3: Q&A Section */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title3")}
            </h2>
            <div className="mt-2">
              {(
                t("article3.content.itemsTitle3", {
                  returnObjects: true,
                }) as QaItem[]
              ).map(({ title, description }, i) => (
                <div className="mt-4" key={i + "qa"}>
                  <h3 className="text-responsive-2sm font-semibold">{title}</h3>
                  <p className="text-responsive-xs">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="flex-1 flex flex-col pt-5">
          <img
            src={readingArticle3}
            alt="A veterinarian giving a cat a vaccination"
            className="rounded-md"
          />
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article3;