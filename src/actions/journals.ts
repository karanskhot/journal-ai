"use server";

import { db } from "@/lib/db";
import { journalSchema, JournalValues } from "@/lib/validations";
import { auth } from "@clerk/nextjs/server";
import { startOfDay } from "date-fns";
import { redirect } from "next/navigation";

export const find_create_unique_journal = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const today = startOfDay(new Date());
  try {
    const existingJournal = await db.journal.findUnique({
      where: {
        unique_userId_date: {
          userId,
          date: today,
        },
      },
      include: {
        entries: true,
      },
    });
    if (existingJournal) {
      redirect(`/writer?id=${existingJournal.id}`);
    }

    const newJournal = await db.journal.create({
      data: {
        userId,
        date: today,
        title: `My Journa - ${today}`,
        isDraft: true,
      },
      include: {
        entries: true,
      },
    });
    redirect(`/writer?id=${newJournal.id}`);
  } catch (error) {
    console.error("Error finding or creating journal:", error);
    throw error;
  }
};
export const createJournal = async (data: JournalValues) => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  console.log(userId);
  try {
    const formatted = {
      date: data.date
        ? startOfDay(new Date(data.date))
        : startOfDay(new Date()),
      title: data.title ? data.title : "My Journal",
      isDraft: false,
    };
    const isValid = journalSchema.safeParse(formatted);

    const isJournalExist = await db.journal.findUnique({
      where: {
        unique_userId_date: {
          date: formatted.date,
          userId,
        },
      },
    });
    console.log(isJournalExist);
    if (isJournalExist) {
      console.log(
        `Journal Exists already, either in draft or completed status.`,
      );
      return;
    }

    console.log(isValid);
  } catch (error) {
    console.log(error);
  }
};
