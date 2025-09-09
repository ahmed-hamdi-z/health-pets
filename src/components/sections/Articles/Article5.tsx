import { useTranslation } from "react-i18next";
import ArticleHero from "./ArticleHero";
import readingArticle5 from "../../../assets/img/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import type { ArticlesEnum } from "../../../enum/Articles";
import SectionContainer from "../../containers/SectionContainer";

const Article5 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  // Define a versatile type for the items in the "steps" section
  type PreparationStep = {
    title: string;
    description?: string;
    steps?: string[];
    info?: string;
  };

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row m-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          {/* Section 1: Why Cats Get Stressed */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article5.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article5.content.descriptionTitle1")}
            </p>
          </div>

          {/* Section 2: Preparation Steps */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article5.content.title2")}
            </h2>
            <div className="mt-2 text-responsive-2md">
              {(
                t("article5.content.itemsTitle2", {
                  returnObjects: true,
                }) as PreparationStep[]
              ).map((item, i) => (
                <div className="mt-4" key={i + "step"}>
                  <h3 className="text-responsive-2sm font-medium">
                    {item.title}
                  </h3>
                  {/* Conditionally render description or steps */}
                  {item.description && (
                    <p className="text-responsive-xs">{item.description}</p>
                  )}
                  {item.steps && (
                    <>
                      <ul className="list-disc pr-7 pl-7 mt-1">
                        {item.steps.map((step, j) => (
                          <li key={j + "s"} className="text-responsive-xs">
                            {step}
                          </li>
                        ))}
                      </ul>
                      {item.info && (
                        <p className="text-responsive-xs mt-1 italic">
                          {item.info}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: How the Clinic Staff Helps */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article5.content.title3")}
            </h2>
            <p className="text-responsive-2md">
              {t("article5.content.descriptionTitle3")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article5.content.itemsTitle3", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-responsive-2md mt-2 font-medium">
              {t("article5.content.info2")}
            </p>
          </div>

          {/* Section 4: After the Visit */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article5.content.title4")}
            </h2>
            <p className="text-responsive-2md">
              {t("article5.content.descriptionTitle4")}
            </p>
            <ul className="list-disc pr-7 pl-7 mt-2 text-responsive-2md">
              {(
                t("article5.content.itemsTitle4", {
                  returnObjects: true,
                }) as string[]
              ).map((item, i) => (
                <li key={i} className="text-responsive-xs">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="flex-1 flex flex-col pt-5">
          <img
            src={readingArticle5}
            alt="A calm cat in a pet carrier"
            className="rounded-md"
          />
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article5;