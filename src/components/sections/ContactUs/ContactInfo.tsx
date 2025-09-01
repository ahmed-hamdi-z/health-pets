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
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-semibold text-white">
          {/* {t("info.title")} */}  Healthy pets... Happy
            Gets...
        </h3>
        {/* <p className="text-responsive-sm text-gray-100">
          {t("info.description")} 
        </p> */}
      </div>

<img className="w-full h-full" src="/images/contact.png" alt="" />

    </div>
  );
};

export default ContactInfo;
