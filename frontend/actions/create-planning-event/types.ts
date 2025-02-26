import { z } from "zod";
import { PlanningEvent } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreatePlanningEvent } from "./schema";

export type InputType = z.infer<typeof CreatePlanningEvent>;
export type ReturnType = ActionState<InputType, PlanningEvent>;
