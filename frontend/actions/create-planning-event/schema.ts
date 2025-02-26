import { z } from "zod";

export const CreatePlanningEvent = z.object({
  planningId: z.string(),
  eventId: z.string(),
});
