import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { NotebookText } from "lucide-react";
import Link from "next/link";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <header className="bg-background sticky top-0 z-50 flex h-16 items-center justify-between border-b px-6">
      <Link className="flex items-center gap-1" href={"/my-journals"}>
        <NotebookText />
        <h1 className="text-xl font-semibold">Journal-ai</h1>
      </Link>
      {!userId ? (
        <div className="">
          <Link href={"/sign-in"}>Get Started</Link>
        </div>
      ) : (
        <UserButton />
      )}
    </header>
  );
};
export default Navbar;
