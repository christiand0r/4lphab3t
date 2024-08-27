import type { Metadata } from "next";
import AlphabetPracticePage from "./page.client";

export const metadata: Metadata = {
  title: "4lphab3t - Práctica del alfabeto",
  description:
    "Practica la pronunciación de las letras del alfabeto con está dinámica.",
};

export default function Page() {
  return <AlphabetPracticePage />;
}
