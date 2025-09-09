import { FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";
import { SocialIcons } from "./SocialIcons";
import Logo from "../Logo";
import { appRoutes } from "../../config";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["header", "footer"]);
  return (
    <footer className="bg-[#99D8E0]/70 pt-10 pb-6 md:rounded-t-[150px] rounded-t-4xl">
      <div className="max-w-[250px] mx-auto bg-white rounded-full -mt-24">
        <Logo className="mx-auto mb-5 px-5 py-2" />
      </div>
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 text-gray-800">
        {/* Contact */}
        <div
          className="bg-no-repeat bg-contain ml-auto md:flex hidden absolute left-1/6 opacity-100"
          style={{
            width: "250px",
            height: "250px",
            backgroundImage: `url("/images/hand.svg")`,
          }}
        />
        <div className="flex flex-col justify-center z-10">
          <h3 className="font-semibold text-lg mb-3"> {t("nav.contact")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone size={16} className="text-orange-500" />
              {t("phone", { ns: "footer" })}
            </li>
            <li className="flex items-center gap-2">
              <FaMailBulk size={16} className="text-blue-500" />
              info@healthypets.com.sa
            </li>
            <li className="flex items-center gap-2">
              <FaMapPin size={16} className="text-red-500" />
             {t("address", { ns: "footer" })}
            </li>
          </ul>
        </div>
        {/* Links */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-3">{t("Important", { ns: "footer" })}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={appRoutes.about} className="hover:text-cyan-700">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href={appRoutes.services} className="hover:text-cyan-700">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href={appRoutes.blogs} className="hover:text-cyan-700">
                {t("nav.blogs")}
              </a>
            </li>
            <li>
              <a href={appRoutes.products} className="hover:text-cyan-700">
                {t("nav.products")}
              </a>
            </li>
            <li>
              <a href={appRoutes.contact} className="hover:text-cyan-700">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
        {/* Form */}
        <div className=" max-w-xs md:-translate-x-24 md:translate-y-4">
          <div
            className="bg-no-repeat bg-contain ml-auto md:flex hidden absolute -top-20 -right-52 rotate-180 opacity-65 -z-20"
            style={{
              width: "250px",
              height: "250px",
              backgroundImage: `url("/images/hand.svg")`,
            }}
          />
          <h3 className="font-semibold text-lg mb-3">{t("get-in-touch", { ns: "footer" })}</h3>
          <form className="flex flex-col items-start gap-3">
            <input
              type="email"
              placeholder={t("email-or-phone", { ns: "footer" })}
              className="w-full rounded-lg px-3 py-2 border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            />
            <textarea
              placeholder={t("notes", { ns: "footer" })}
              rows={3}
              className="w-full h-12 rounded-lg px-3 py-2 border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-tl from-[#F79437] to-white text-[#4C4C4C] rounded-lg px-7 py-1.5 hover:bg-orange-600 transition cursor-pointer"
            >
              {t("send", { ns: "footer" })}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 px-6 border-t border-white/40 pt-4 flex flex-col md:flex-row justify-center items-center text-xl gap-3" >
        <p className="text-gray-700">{t("follow-us", { ns: "footer" })}:</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
