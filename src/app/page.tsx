"use client";

import ThemeContext from "@/components/providers/ThemeContext";
import { useContext } from "react";

import { Chivo_Mono, Reddit_Mono } from "next/font/google";
import PageSection from "@/components/templates/PageSection";

const header = Chivo_Mono({
  weight: "500",
  subsets: ["latin"],
});

const subtext = Reddit_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const bgCol = theme == "light" ? "bg-gray-300" : "bg-slate-800";

  return (
    <main
      className={`pt-32 md:pt-24 ${bgCol} w-full h-max transition-colors flex flex-col items-center`}
    >
      <HomeHero/>
      <PageSection theme={theme} height={128}></PageSection>
      <PageSection theme={theme} height={128}></PageSection>
      <PageSection theme={theme} height={196}></PageSection>
    </main>
  );
}


function HomeHero() {
  const { theme } = useContext(ThemeContext);
  const textCol = theme == "light" ? "text-gray-600" : "text-gray-200";

  return (
    <PageSection theme={theme} height={196}>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="border border-red-300 lg:h-128 lg:w-128 md:h-196 md:w-196 "></div>
        <div className="border border-red-300 lg:h-128 lg:w-128 md:h-196 md:w-196 flex items-center">
          <div className="ml-12 m-fit h-fit">
            <small className="text-xl">Hi! I'm</small>
            <h1
              className={`text-8xl xl:text-9xl tracking-tight ${header.className} ${textCol}`}
            >
              LANCE
            </h1>
            <p
              className={`${subtext.className} ${textCol} tracking-tight text-2xl opacity-65`}
            >
              I did things
            </p>
            <button>About me</button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
