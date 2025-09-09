import { useTranslation } from "react-i18next";
import type { ArticlesEnum } from "../../../enum/Articles";

const ArticleFooter = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <p className="text-responsive-xs text-center m-7">
      {t(`article${articleIndex}.footer`)}
    </p>
  );
};

export default ArticleFooter;
