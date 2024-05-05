"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Therapist",
  "Accupancture",
  "Massage",
  "Chiropractor",
  "Dental",
  "Cosmetic",
  "Dietition",
  "occupational",
  "Acupuncturist",
];

const TextTransitions = () => {
  const [index, setIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  if (!mounted) return null;

  return (
    // <h1>
    //   <TextTransition springConfig={presets.wobbly}>
    //     {TEXTS[index % TEXTS.length]}
    //   </TextTransition>
    // </h1>

    <>
      <span className="text-7xl text-blue-800  w-full">
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </span>
    </>
  );
};

export default TextTransitions;
