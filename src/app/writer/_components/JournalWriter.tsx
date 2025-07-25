"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import JournalForm from "./forms/JournalForm";
import JournalPreview from "./JournalPreview";
import { FormProvider, useForm } from "react-hook-form";
import { journalWriterSchema, JournalWriterValues } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import EntryForm from "./forms/EntryForm";

const JournalWriter = () => {
  const [writerPanel, setWriterPanel] = useState<"journal" | "entry">(
    "journal",
  );

  const toggleWriterPanel = () => {
    setWriterPanel((prev) => (prev === "journal" ? "entry" : "journal"));
  };

  const journalWriterSummary = useForm<JournalWriterValues>({
    resolver: zodResolver(journalWriterSchema),
  });

  return (
    <div className="flex grow flex-col">
      <h1 className="py-2 text-center text-2xl font-semibold">
        Start reflecting your day here. And see magic unfold!
        <h1>Today Journal - client : ${new Date().toLocaleTimeString()}</h1>
      </h1>

      <main className="bg-secondary relative grow">
        <FormProvider {...journalWriterSummary}>
          <div className="absolute inset-0 flex w-full gap-3">
            <div className="w-full space-y-6 overflow-y-auto border bg-white p-3 md:w-1/2">
              {writerPanel === "journal" ? (
                <JournalForm toggleWriterPanel={toggleWriterPanel} />
              ) : (
                <EntryForm toggleWriterPanel={toggleWriterPanel} />
              )}
            </div>

            <div className="hidden space-y-6 overflow-y-auto border bg-white p-3 md:block md:w-1/2">
              <JournalPreview />
            </div>
          </div>
        </FormProvider>
      </main>

      <footer className="bg-secondary w-full border-t px-3 py-2">
        <Button asChild>
          <Link href="/my-journals">Close</Link>
        </Button>
      </footer>
    </div>
  );
};

export default JournalWriter;
