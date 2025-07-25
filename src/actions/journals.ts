"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { endOfDay, startOfDay } from "date-fns";

export const create_new_journal = async () => {
  const { userId } = await auth();
  if (!userId) throw Error("unauthenticated");
  try {
    await db.journal.create({
      data: {
        title: `My test journal, ${new Date().toLocaleDateString()}`,
        userId,
        userSummary: "",
        aiSummary: "",
      },
    });
    // revalidatePath("/my-journals");
  } catch (error) {
    console.log(error);
  }
};

export const filter_new_journals = async () => {
  const { userId } = await auth();
  if (!userId) throw Error("unauthenticated");
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());
  try {
    const response = await db.journal.findFirst({
      where: {
        userId,
        createdAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });
    if (!response || response === null) {
      return {
        success: true,
        response: {},
        message: "journal does not exist for the user",
      };
    }

    return {
      success: true,
      response: { ...response, title: response.title ?? undefined },
      message: "journal for today exist",
    };
  } catch (err) {
    console.log(err);
    return { success: false, response: {}, message: "error" };
  }
};

export const get_all_journals = async () => {
  const { userId } = await auth();
  if (!userId) throw Error("unauthenticated");

  try {
    const all_journals = await db.journal.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return all_journals;
  } catch (error) {
    console.log(error);
    return [];
  }
};
