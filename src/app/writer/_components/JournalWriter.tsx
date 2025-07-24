"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const JournalWriter = () => {
  return (
    <div className="flex grow flex-col px-3">
      <h1 className="py-2 text-center text-2xl font-semibold">Journal</h1>
      <main className="bg-secondary relative grow">
        <div className="absolute top-0 bottom-0 flex w-full gap-3">
          <div className="w-full space-y-6 overflow-y-auto border bg-white p-3 md:block md:w-1/2">
            Light
          </div>
          <div className="hidden w-full space-y-6 overflow-y-auto border bg-white p-3 md:block md:w-1/2">
            R
          </div>
        </div>
      </main>
      <footer className="bg-secondary w-full border border-t px-3 py-2">
        <Button asChild>
          <Link href="/my-journals">Close</Link>
        </Button>
      </footer>
    </div>
  );
};
export default JournalWriter;
