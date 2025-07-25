"use client";

import { useMemo } from "react";
import { JournalValues, JournalWriterValues } from "@/lib/validations";
import { isSameDay } from "date-fns";
import { Journal } from "@prisma/client";

const JournalEntries = ({ data }: { data: Journal[] }) => {
  const today = new Date();

  const { todayJournal, pastJournals } = useMemo(() => {
    const todayJournal = data.find((journal) =>
      isSameDay(new Date(journal.createdAt), today),
    );

    const pastJournals = data.filter(
      (journal) => !isSameDay(new Date(journal.createdAt), today),
    );

    return { todayJournal, pastJournals };
  }, [data]);

  return (
    <div className="space-y-4">
      {/* Show create card if no journal for today */}
      {!todayJournal && (
        <div className="bg-muted text-muted-foreground rounded border p-4">
          No journal for today —{" "}
          <button className="underline">Create one</button>
        </div>
      )}

      {/* Show today’s journal if exists */}
      {todayJournal && (
        <div className="bg-primary text-primary-foreground rounded border p-4">
          <p className="font-semibold">Today’s Journal</p>
          <p>{todayJournal.title}</p>
        </div>
      )}

      {/* Past journals */}
      {pastJournals.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Previous Journals</h2>
          {pastJournals.map((j) => (
            <div key={j.id} className="rounded border p-3">
              <p>{j.title}</p>
              <p className="text-muted-foreground text-sm">
                {new Date(j.createdAt).toString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalEntries;
