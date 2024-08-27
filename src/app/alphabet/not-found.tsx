import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4lphab3t - Letra no encontrada",
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center relative gap-4 mx-auto p-6 overflow-hidden w-full">
      <div>
        <h1 className="font-extrabold text-[200px] text-center leading-none">
          404
        </h1>
        <p className="text-2xl text-center">Uups... no encontramos esa letra</p>
      </div>

      <Link href="/" className="underline underline-offset-4">
        Volver al inicio
      </Link>

      <span className="font-black text-[620px] absolute -rotate-12 -z-10 text-gray-200/60">
        Ññ
      </span>
    </div>
  );
}
