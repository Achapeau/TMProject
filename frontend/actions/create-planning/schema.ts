import { z } from "zod";

export const CreatePlanning = z.object({
  userId: z.string(),
});
