import { title } from "process";
import { z } from "zod";

export const journalSchema = z.object({
  title: z.string().optional(),
  isDraft: z.boolean(),
  date: z.date(),
});

export type JournalValues = z.infer<typeof journalSchema>;

export const entrySchema = z.object({
  entries: z
    .array(
      z.object({
        title: z
          .string()
          .min(3, "entry title too short")
          .max(64, "entry name too long"),
        body: z.string(),
      }),
    )
    .min(1, "atleast one entry is required."),
});
