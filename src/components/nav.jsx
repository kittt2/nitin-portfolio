import React from "react";
import { FloatingDock } from "../components/ui/floatingnav";
import { IconBrandGithub, IconBrandLinkedin, IconAddressBook, IconHome, IconNewSection, IconBrandVite, IconFileDownload, IconUser } from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "#",
    },
    {
      title: "Project",
      icon: <IconBrandVite style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "#project",
    },
    {
      title: "about",
      icon: <IconUser style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "#about",
    },
    {
      title: "contact",
      icon:<IconAddressBook style={{ height: "100%", width: "100%", color: "white" }} /> ,
      href: "#contact",
    },
    {
      title: "resume",
      icon: <IconFileDownload style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "https://drive.google.com/file/d/19zyeAo6nP2BM6HFXhhn4_q12UNJ79qgi/view?usp=sharing",
    },
    {
      title: "Linkden",
      icon: <IconBrandLinkedin style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "https://www.linkedin.com/in/nitin-saini-7451b02b4",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub style={{ height: "100%", width: "100%", color: "white" }} />,
      href: "https://github.com/kittt2",
    },
  ];
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-full flex justify-center z-50 ">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
      
    </div>
  );
}
