import Link from "next/link";
import { LetterCard } from "@/components";
import { alphabet } from "@/constants";

export default function AlphabetPage() {
  return (
    <main className="mx-auto px-8 pt-8 pb-12 max-w-5xl w-full md:px-12 md:py-8">
      <div className="flex items-center justify-between fixed gap-2 px-6 py-4 border-t bottom-0 inset-x-0 bg-white border-gray-200 md:static md:mb-6 md:p-0 md:border-t-0 md:bg-transparent">
        <h1 className="font-semibold text-xl text-left md:text-2xl">
          Alfabeto / Alphabet
        </h1>

        <Link
          href="/alphabet/practice"
          className="font-semibold px-6 py-2 rounded-full bg-amber-400 text-black"
        >
          Practicar
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {alphabet.map((letter) => (
          <LetterCard
            key={letter.letter}
            hint={letter?.hint}
            letter={letter.letter}
            pronunciation={letter.pronunciation}
          />
        ))}
      </section>
    </main>
  );
}
