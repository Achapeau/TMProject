"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { CreatePlanningEvent } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { planningId, eventId } = data;

  let planningEvent;

  try {
    planningEvent = await db.planningEvent.create({
      data: {
        planningId,
        eventId,
      },
    });
  } catch (error) {
    return { error: "Failed to create planning" };
  }

  revalidatePath(`/organization/${orgId}/agenda`);
  return { data: planningEvent };
};

export const createPlanningEvent = createSafeAction(
  CreatePlanningEvent,
  handler
);
