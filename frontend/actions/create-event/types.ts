import { z } from "zod";
import { Event } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateEvent } from "./schema";

export type InputType = z.infer<typeof CreateEvent>;
export type ReturnType = ActionState<InputType, Event>;
