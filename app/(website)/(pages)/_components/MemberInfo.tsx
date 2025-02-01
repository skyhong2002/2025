"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

interface Member {
  member: {
    name: string;
    role: string;
    email: string;
    website?: string;
    rainbow?: boolean;
  };
}

function getIcon(website: string | undefined) {
  if (!website) {
    return faArrowUpRightFromSquare;
  }

  if (website.includes("mailto:")) {
    return faEnvelope;
  } else if (website.includes("facebook.com")) {
    return faFacebook;
  } else if (website.includes("linkedin.com")) {
    return faLinkedin;
  } else if (website.includes("github.com")) {
    return faGithub;
  } else if (website.includes("telegram.org") || website.includes("t.me")) {
    return faTelegram;
  } else if (
    website.includes("instagram.com") ||
    website.includes("instagr.am")
  ) {
    return faInstagram;
  } else if (
    website.includes("discord.com") ||
    website.includes("discord.gg")
  ) {
    return faDiscord;
  } else if (website.includes("youtube.com") || website.includes("youtu.be")) {
    return faYoutube;
  } else if (
    website.includes("twitter.com") ||
    website.includes("t.co") ||
    website.includes("x.com")
  ) {
    return faXTwitter;
  } else {
    return faArrowUpRightFromSquare;
  }
}

export default function MemberInfo(memberObj: Member) {
  const member = memberObj.member;
  const pop_icon = getIcon(member.website);
  const [windowWidth, setWindowWidth] = useState(0);
  const rainbowFilter = [
    "drop-shadow(0px 0px 5px red)",
    "drop-shadow(0px 0 5px orange)",
    "drop-shadow(0px 0 5px yellow)",
    "drop-shadow(0px 0 5px green)",
    "drop-shadow(0px 0px 5px rgba(52,189,235,70))",
    "drop-shadow(0px 0px 5px rgba(207,52,235,70))",
    "drop-shadow(0px 0px 5px red)",
    "drop-shadow(0px 0 5px orange)",
    "drop-shadow(0px 0 5px yellow)",
    "drop-shadow(0px 0 5px green)",
    "drop-shadow(0px 0px 5px rgba(52,189,235,70))",
    "drop-shadow(0px 0px 5px rgba(207,52,235,70))",
    "drop-shadow(0px 0px 5px red)",
    "drop-shadow(0px 0 5px orange)",
    "drop-shadow(0px 0 5px yellow)",
    "drop-shadow(0px 0 5px green)",
    "drop-shadow(0px 0px 5px rgba(52,189,235,70))",
    "drop-shadow(0px 0px 5px rgba(207,52,235,70))",
    "drop-shadow(0px 0px 5px rgba(201,235,255,70))",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const outside = {
    notOnHover: {
      scale: 1,
      filter: "drop-shadow(0px 0px 0px rgba(201,235,255,70))",
    },
    qianOnHover: {
      scale: 1.2,
      filter: rainbowFilter,
    },
    qianOnTap: {
      scale: 1.3,
      filter: rainbowFilter,
      duration: 0.1,
    },
    qianOnClick: {
      scale: 1.08,
      filter: rainbowFilter,
    },
    onHover: {
      scale: 1.2,
      filter: "drop-shadow(0px 0px 7px rgba(201,235,255,70))",
    },
    onClick: {
      scale: 1.08,
      filter: "drop-shadow(0px 0px 4px rgba(201,235,255,70))",
    },
    onTap: {
      scale: 1.3,
      filter: "drop-shadow(0px 0px 7px rgba(201,235,255,70))",
      duration: 0.1,
    },
  };

  const pictureBlur = {
    onHover: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    qianOnHover: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    qianOnTap: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    qianOnClick: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    notOnHover: { opacity: 1, filter: "blur(0) brightness(1)" },
    onClick: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
    onTap: { opacity: 1, filter: "blur(0.5em) brightness(0.3)" },
  };

  const icon = {
    onHover: { opacity: 1 },
    qianOnHover: { opacity: 1 },
    qianOnTap: { opacity: 1 },
    qianOnClick: { opacity: 1 },
    notOnHover: { opacity: 0 },
    onClick: { opacity: 1 },
    onTap: { opacity: 1 },
  };

  return (
    <div key={member.name} id={member.name}>
      <div className="flex flex-col items-center gap-4 text-center">
        {member.website ? (
          <motion.button
            initial="notOnHover"
            whileHover={member.rainbow ? "qianOnHover" : "onHover"}
            whileTap={
              windowWidth <= 768
                ? member.rainbow
                  ? "qianOnTap"
                  : "onTap"
                : member.rainbow
                  ? "qianOnClick"
                  : "onClick"
            }
            variants={outside}
            onClick={() => window.open(`${member.website?.startsWith("http") ? member.website : `http://${member.website}`}`, "_blank")}
            className={`relative h-20 w-20 overflow-hidden rounded-full`}
          >
            <motion.img
              variants={pictureBlur}
              src={`https://gravatar.com/avatar/${member.email}?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g`}
              className="h-full w-full"
            />
            <motion.div
              variants={icon}
              className="absolute inset-0 transform text-2xl text-white sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:text-3xl"
            >
              <FontAwesomeIcon icon={pop_icon} />
            </motion.div>
          </motion.button>
        ) : (
          <motion.img
            initial="notOnHover"
            whileHover={member.rainbow ? "qianOnHover" : "onHover"}
            variants={outside}
            whileTap={
              windowWidth <= 768
                ? member.rainbow
                  ? "qianOnTap"
                  : "onTap"
                : member.rainbow
                  ? "qianOnClick"
                  : "onClick"
            }
            className={`relative h-20 w-20 overflow-hidden rounded-full`}
            src={`https://gravatar.com/avatar/${member.email}?s=512&d=https://sitcon.org/2022/imgs/deafult_avatar.jpg&r=g`}
          />
        )}
        <div>
          <h3 className="text-[16px] font-bold md:text-[19px]">
            {member.name}
          </h3>
          <p className="text-[12px] md:text-[14px]">{member.role}</p>
        </div>
      </div>
    </div>
  );
}
