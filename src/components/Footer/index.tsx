import { FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";
import { SocialIcons } from "./SocialIcons";
import { FiSmartphone } from "react-icons/fi";
import Logo from "../Logo";

const Footer = () => {
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
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone size={16} className="text-orange-500" />
              0920 012 261
            </li>
            <li className="flex items-center gap-2">
              <FiSmartphone size={16} className="text-green-500" />
              0531 328 312
            </li>
            <li className="flex items-center gap-2">
              <FaMailBulk size={16} className="text-blue-500" />
              info@healthypets.com.sa
            </li>
            <li className="flex items-center gap-2">
              <FaMapPin size={16} className="text-red-500" />
              Hittin Square - Prince Turki Road, Riyadh
            </li>
          </ul>
        </div>
        {/* Links */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-3">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-cyan-700">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-700">
                Service
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-cyan-700">
                Blogs
              </a>
            </li>
               <li>
              <a href="/blogs" className="hover:text-cyan-700">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-700">
                Contact Us
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
          <h3 className="font-semibold text-lg mb-3">Let’s get in touch</h3>
          <form className="flex flex-col items-start gap-3">
            <input
              type="email"
              placeholder="Phone or Email"
              className="w-full rounded-lg px-3 py-2 border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            />
            <textarea
              placeholder="Notes"
              rows={3}
              className="w-full h-12 rounded-lg px-3 py-2 border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-tl from-[#F79437] to-white text-[#4C4C4C] rounded-lg px-7 py-1.5 hover:bg-orange-600 transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 px-6 border-t border-white/40 pt-4 flex flex-col md:flex-row justify-center items-center text-xl gap-3" >
        <p className="text-gray-700">Follow us on:</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
