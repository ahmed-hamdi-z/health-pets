import { useTranslation } from "react-i18next";
import ArticleHero from "./ArticleHero";
import readingArticle1 from "../../../assets/img/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import SectionContainer from "../../containers/SectionContainer";
import type { ArticlesEnum } from "../../../enum/Articles";

const Article2 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  // Type assertion for the Q&A items in itemsTitle3
  type QaItem = {
    title: string;
    description: string;
  };

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row mt-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          {/* Section 1: What is Grooming? */}
          <div className="m-5 ">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article2.content.descriptionTitle1")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article2.content.itemsTitle1", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-responsive-2md mt-2">
              {t("article2.content.info")}
            </p>
          </div>

          {/* Section 2: Home Grooming */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title2")}
            </h2>
            <p className="text-responsive-2md">
              {t("article2.content.descriptionTitle2")}
            </p>
          </div>

          {/* Section 3: Professional Grooming */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title3")}
            </h2>
            <p className="text-responsive-2md">
              {t("article2.content.descriptionTitle3")}
            </p>
          </div>

          {/* Section 4: Q&A Section */}
          <div className="m-5">
            {(
              t("article2.content.itemsTitle3", {
                returnObjects: true,
              }) as QaItem[]
            ).map(({ title, description }, i) => (
              <div className="m-4" key={i + "qa"}>
                <h3 className="text-responsive-2sm font-semibold">{title}</h3>
                <p className="text-responsive-2md">{description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="flex-1 flex flex-col p-5">
          <img
            src={readingArticle1}
            alt="Professional pet grooming"
            className="rounded-md"
          />
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article2;