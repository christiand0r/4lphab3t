import { Letter } from "@/interfaces";
import { IoBulb } from "react-icons/io5";
import { cn } from "@/utils";

interface Props extends Letter {
  mode?: "detail" | "practice";
}

export const LetterDetail = (props: Props) => {
  const { hint, letter, pronunciation, mode = "detail" } = props;

  return (
    <article className="flex flex-col items-center">
      <p className="font-bold text-lg text-center uppercase">Letra</p>

      <ruby style={{ rubyPosition: "under" }}>
        <h1 className="text-center text-9xl font-extrabold uppercase">
          {letter}
        </h1>

        {mode === "detail" && (
          <rt className="font-medium text-2xl text-center text-gray-500">
            /{pronunciation}/
          </rt>
        )}
      </ruby>

      <div
        className={cn(
          "flex flex-col items-center visible gap-2 mt-6 opacity-100 text-pretty transition-opacity md:flex-row",
          { "opacity-0 invisible h-7": !hint }
        )}
      >
        <IoBulb
          size={24}
          className="rounded-full bg-amber-400 p-1 text-black"
        />
        <span className="font-medium text-lg text-center text-gray-700">
          {hint}
        </span>
      </div>
    </article>
  );
};
