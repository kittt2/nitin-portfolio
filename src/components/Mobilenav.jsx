import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconAddressBook,
  IconHome,
  IconNewSection,
  IconBrandVite,
  IconFileDownload,
  IconUser,
  IconMenu,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", icon: <IconHome />, href: "#" },
    { title: "About me", icon: <IconUser />, href: "#about" },
    { title: "Projects", icon: <IconBrandVite />, href: "#project" },
    { title: "Contact", icon: <IconAddressBook />, href: "#contact" },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/nitin-saini-7451b02b4",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub />,
      href: "https://github.com/kittt2",
    },
    {
      title: "Resume",
      icon: <IconFileDownload />,
      href: "https://drive.google.com/file/d/1NNEP4NQtgqNhWAjIZezBlg9J3pAELLJF/view?usp=sharing",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-opacity-60 bg-neutral-900 backdrop-filter backdrop-blur-lg shadow-lg p-2   md:hidden">
        <div className="flex justify-between items-center px-4">
          <span className="font-bold text-gray-200">
            <Avatar className=" h-auto">
              <AvatarImage src="photo.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </span>
          <button onClick={() => setOpen(!open)} className="text-gray-200">
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center  py-4 h-[50vh] "
            >
              <div className="flex flex-col gap-5 ">
                {links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex items-end gap-2 text-gray-200"
                  >
                    <div className="h-6 w-6">{link.icon}</div>
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden   md:flex  justify-between items-center px-20 py-2 bg-opacity-60 bg-neutral-900 backdrop-filter backdrop-blur-xl shadow-xg">
        <motion.span
          style={{ fontFamily: "Montserrat, sans-serif", lineHeight: 1.2 }}
          initial="hidden"
          whileInView="visible"
          whileHover={{ rotate: 5 }}
          animate={{ rotate: 360 }}
          transition={{ type: "spring", bounce: 0.25 }}
          className="text-white font-medium capitalize cursor-pointer "
        >
          Nitin
        </motion.span>
        <span className="flex items-center gap-3 text-gray-200">
          nitinsainiformal@gmail.com
          <Avatar className="h-2 w-4 md:h-10 md:w-10 ">
            <AvatarImage src="photo.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
      </div>
    </div>
  );
};

export default MobileNavBar;
