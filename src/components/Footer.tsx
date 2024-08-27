import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-xs text-center py-4">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/christiandor/"}
        className="font-semibold"
      >
        Christian Osorio
      </Link>{" "}
      © 2024
    </footer>
  );
};
