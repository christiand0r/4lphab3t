import { Letter } from "@/interfaces";
import Link from "next/link";

interface Props extends Letter {}

export const LetterCard = ({ letter, pronunciation }: Props) => {
  return (
    <Link
      href={`/alphabet/${letter}`}
      className="flex flex-col items-center justify-center gap-2 border rounded-xl aspect-square shadow-sm bg-white border-gray-200"
    >
      <span className="font-bold text-7xl sm:text-5xl">
        {letter.toLocaleUpperCase()}
        {letter}
      </span>
      <p className="font-medium text-xl sm:text-lg text-gray-500">
        /{pronunciation}/
      </p>
    </Link>
  );
};
