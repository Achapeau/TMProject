import { z } from "zod";

export const CreateEvent = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must be at least 3 characters long" }),
  startDate: z.date({
    required_error: "startDate is required",
    invalid_type_error: "startDate must be a date",
  }),
  endDate: z.date({
    required_error: "endDate is required",
    invalid_type_error: "endDate must be a date",
  }),
  description: z.optional(z.string()),
  status: z.optional(z.enum(["TO_DO", "IN_PROGRESS", "DONE", "NEUTRAL"])),
  cardId: z.optional(z.string()),
  boardId: z.optional(z.string()),
  orgId: z.optional(z.string()),
});
