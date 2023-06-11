import { FiTwitter, FiBriefcase, FiMail } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="flex mb-2">
      <div className="navbar space-x-6 mr-auto">
        <a href="/" className="text-slate-800 font-semibold text-[1.06rem]">
          Home
        </a>
        <a
          href="/posts"
          className="text-slate-800 font-semibold text-[1.06rem]"
        >
          Posts
        </a>
      </div>
      <div className="ml-auto space-x-5">
        <a href="https://read.cv/adhirajb1109" target="_blank" rel="noreferrer">
          <FiBriefcase className="inline-block" size={21} />
        </a>
        <a href="mailto:hey@adhiraj.xyz" target="_blank" rel="noreferrer">
          <FiMail className="inline-block" size={21} />
        </a>
        <a
          href="https://twitter.com/adhirajb1109"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="inline-block" size={21} />
        </a>
        <a
          href="https://discord.com/users/876685465183473675"
          target="_blank"
          rel="noreferrer"
        >
          <RxDiscordLogo className="inline-block" size={21} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
