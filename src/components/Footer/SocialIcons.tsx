import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export const SocialIcons = () => {
  const icons = [
    { Icon: FaFacebookF, href: "https://facebook.com" },
    { Icon: FaTwitter, href: "https://twitter.com" },
    { Icon: FaInstagram, href: "https://instagram.com" },
    { Icon: FaTiktok, href: "https://tiktok.com" },
    { Icon: FaSnapchatGhost, href: "https://snapchat.com" },
  ];

  return (
    <div className="flex gap-4 mt-3 md:mt-0">
      {icons.map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-cyan-100 transition"
        >
          <Icon className="text-xl text-gray-700" />
        </a>
      ))}
    </div>
  );
};
