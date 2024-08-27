import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alphabet } from "@/constants";
import { LetterDetail } from "@/components";
import { LetterSound } from "@/components";
import { cn } from "@/utils";

interface Props {
  params: { letter: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { letter } = params;

  return {
    title: `4lphab3t - La letra "${letter.toUpperCase()}"`,
    description: `Aprende y repasa la pronunciación de la letra "${letter}"`,
  };
}

export async function generateStaticParams() {
  return alphabet.map(({ letter }) => ({ letter }));
}

const getLetter = (letter: string) => {
  return alphabet.find((l) => l.letter === letter);
};

const getNavLetters = (letter: string) => {
  const currentIndex = alphabet.findIndex((l) => l.letter === letter);

  const nextLetter = alphabet[currentIndex + 1]?.letter ?? null;
  const prevLetter = alphabet[currentIndex - 1]?.letter ?? null;

  return { nextLetter, prevLetter };
};

export default function LetterPage({ params }: Props) {
  const letterData = getLetter(params.letter);

  if (!letterData) return notFound();

  const { nextLetter, prevLetter } = getNavLetters(params.letter);

  return (
    <section className="flex flex-auto flex-col items-center justify-center mx-auto px-8 py-8 max-w-xl w-full md:px-12">
      <Link
        href={"/alphabet"}
        className="self-start inline-block mb-8 underline underline-offset-4"
      >
        Volver
      </Link>
      <div className="flex items-center justify-between gap-8 w-full"></div>

      <LetterDetail
        hint={letterData.hint}
        letter={letterData.letter}
        pronunciation={letterData.pronunciation}
      />

      <div className="flex items-center justify-between gap-6 mt-6 w-full">
        <Link
          href={`/alphabet/${prevLetter ?? "#"}`}
          className={cn("underline underline-offset-4", {
            "opacity-60 pointer-events-none": !prevLetter,
          })}
        >
          Anterior
        </Link>
        <LetterSound letter={letterData.letter} />
        <Link
          href={`/alphabet/${nextLetter ?? "#"}`}
          className={cn("underline underline-offset-4", {
            "opacity-60 pointer-events-none": !nextLetter,
          })}
        >
          Siguiente
        </Link>
      </div>
    </section>
  );
}
