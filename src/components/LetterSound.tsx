"use client";

import { useRef } from "react";

interface Props {
  letter: string;
}

export const LetterSound = ({ letter }: Props) => {
  const sound = useRef<HTMLAudioElement>(null);

  return (
    <>
      <button
        type="button"
        className="font-semibold px-6 py-2 rounded-full bg-amber-400 text-black"
        onClick={() => sound.current?.play()}
      >
        Escuchar
      </button>

      { letter && <audio ref={sound} src={`/sounds/${letter}.mp3`}></audio>}
    </>
  );
};
