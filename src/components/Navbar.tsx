import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { use } from "react";
import { Button } from "./ui/button";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <header className="flex justify-between items-center h-16 border-b bg-secondary/80 sticky top-0 px-10">
      <div className="">
        <Link href={"/my-journals"} className="text-lg font-semibold">
          JournalAi
        </Link>
      </div>
      {userId ? (
        <div className="">
          <UserButton />
        </div>
      ) : (
        <div className="bg-background/80">
          <Button asChild variant={"outline"}>
            <Link href="/sign-in">join</Link>
          </Button>
        </div>
      )}
    </header>
  );
};
export default Navbar;
