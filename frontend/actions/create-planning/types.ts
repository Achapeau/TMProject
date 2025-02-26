import { z } from "zod";
import { Planning } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreatePlanning } from "./schema";

export type InputType = z.infer<typeof CreatePlanning>;
export type ReturnType = ActionState<InputType, Planning>;
