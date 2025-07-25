import { z } from "zod";

export const journalSchema = z.object({
  title: z.string().optional(),
  isDraft: z.boolean().optional(),
  date: z.date().optional(),
});

export type JournalValues = z.infer<typeof journalSchema>;

export const entrySchema = z.object({
  entries: z
    .array(
      z.object({
        title: z.string().min(1).max(40),
        body: z.string(),
      }),
    )
    .optional(),
  // .min(1, "atleast one entry is required."),
});

export type EntryValues = z.infer<typeof entrySchema>;

export const journalWriterSchema = z.object({
  ...journalSchema.shape,
  ...entrySchema.shape,
});

export type JournalWriterValues = z.infer<typeof journalWriterSchema>;
