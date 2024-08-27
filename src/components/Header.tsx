import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b bg-white border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 max-w-5xl">
        <Link href={"/"} className="font-black text-2xl uppercase select-none">
          4lphab3t
        </Link>
      </div>
    </header>
  );
};
