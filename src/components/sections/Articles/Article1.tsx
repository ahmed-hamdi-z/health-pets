import { useTranslation } from "react-i18next";
import ArticleHero from "./ArticleHero";
import readingArticle1 from "../../../assets/img/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import SectionContainer from "../../containers/SectionContainer";
import type { ArticlesEnum } from "../../../enum/Articles";

const Article1 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row m-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          {/* Section 1 */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article1.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article1.content.descriptionTitle1")}
            </p>
          </div>

          {/* Section 2 */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article1.content.title2")}
            </h2>
            <p className="text-responsive-2md">
              {t("article1.content.descriptionTitle2")}
            </p>
          </div>

          {/* Section 3 */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article1.content.title3")}
            </h2>
            <p className="text-responsive-2md">
              {t("article1.content.descriptionTitle3")}
            </p>
          </div>

          {/* Section 4 */}
          <div className="m-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article1.content.title4")}
            </h2>
            <p className="text-responsive-2md">
              {t("article1.content.descriptionTitle4")}
            </p>
          </div>
        </article>

        <article className="flex-1 flex flex-col">
          <img
            src={readingArticle1}
            alt="A pet cat reading a book"
            className="rounded-md"
          />
        </article>
      </div>

      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article1;