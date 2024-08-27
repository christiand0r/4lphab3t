'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { LetterDetail, LetterSound } from "@/components";
import { Letter } from "@/interfaces";
import { alphabet } from "@/constants";
import { getRandomElement } from "@/utils";

export default function AlphabetPracticePage() {
  const [isStarted, setIsStarted] = useState(false);
  const [letter, setLetter] = useState<Letter | null>(null);

  useEffect(() => {
    isStarted ? setLetter(getRandomElement(alphabet)) : setLetter(null);
  }, [isStarted]);

  return (
    <>
      {!isStarted ? (
        <section className="flex flex-auto flex-col items-center justify-center gap-4 mx-auto px-12 py-8 w-full max-w-xl">
          <Link
            href={"/alphabet"}
            className="self-start inline-block mb-8 underline underline-offset-4"
          >
            Volver
          </Link>

          <h1 className="font-bold text-2xl text-center md:text-4xl">
            Practica el abecedario
          </h1>
          <p className="font-medium text-center text-pretty">
            A continuación, se mostrarán letras del abecedario de manera
            aleatoria en la pantalla. Los participantes deberán decir en voz
            alta la letra que aparece, se recomienda realizar la dinámica en
            parejas o grupos.
          </p>

          <button
            type="button"
            className="font-semibold px-6 py-2 rounded-full bg-amber-400 text-black"
            onClick={() => setIsStarted(true)}
          >
            Comenzar
          </button>
        </section>
      ) : (
        <section className="flex flex-auto flex-col items-center justify-center gap-4 mx-auto px-12 py-8 w-full max-w-xl">
          <button
            type="button"
            onClick={() => setIsStarted(false)}
            className="self-start inline-block mb-8 underline underline-offset-4"
          >
            Terminar
          </button>

          <LetterDetail
            mode="practice"
            hint={letter?.hint}
            letter={letter?.letter ?? ""}
            pronunciation={letter?.pronunciation ?? ""}
          />

          <div className="flex items-center justify-center gap-4 mt-6">
            <LetterSound letter={letter?.letter ?? ""} />
            <button
              type="button"
              onClick={() => setLetter(getRandomElement(alphabet))}
              className="font-semibold px-6 py-2 rounded-full bg-black text-white"
            >
              Siguiente
            </button>
          </div>
        </section>
      )}
    </>
  );
}
