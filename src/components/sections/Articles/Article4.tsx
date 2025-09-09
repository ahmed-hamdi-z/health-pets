import { useTranslation } from "react-i18next";
import ArticleHero from "./ArticleHero";
import readingArticle4 from "../../../assets/img/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import SectionContainer from "../../containers/SectionContainer";
import type { ArticlesEnum } from "../../../enum/Articles";

const Article4 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row m-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          {/* Section 1: What is Spaying/Neutering? */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle1")}
            </p>
          </div>

          {/* Section 2: When to Spay/Neuter? */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title2")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle2")}
            </p>
          </div>

          {/* Section 3: Health Benefits */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title3")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle3")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article4.content.itemsTitle3", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Behavioral Benefits */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title4")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle4")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article4.content.itemsTitle4", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Side Effects */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title5")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle5")}
            </p>
          </div>
        </article>

        <article className="flex-1 flex flex-col pt-5">
          <img
            src={readingArticle4}
            alt="A veterinarian caring for a cat"
            className="rounded-md"
          />
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article4;