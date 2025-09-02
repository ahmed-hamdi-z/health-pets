// import { useTranslation } from "react-i18next";

import { trim } from "../../../utils/general";

const ContactInfo = () => {
  // const { t } = useTranslation(["contact"]);

  return (
    <div
      className={trim(`
        flex
        flex-col
        h-full
        justify-around
        bg-cyan-pattern
        bg-cover
        w-full
        p-10
        gap-7
        rounded-3xl`)}
    >
      <h3 className="md:text-4xl text-[16px] font-bold inline-block">
        {/* {t("info.title")} */}  Healthy pets...Happy gets...
      </h3>

      <img className="w-full h-full" src="/images/contact.png" alt="" />

    </div>
  );
};

export default ContactInfo;
