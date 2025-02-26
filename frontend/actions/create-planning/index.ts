"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { CreatePlanning } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  let planning;

  try {
    planning = await db.planning.create({
      data: {
        userId,
      },
    });
  } catch (error) {
    return { error: "Failed to create planning" };
  }

  revalidatePath(`/organization/${orgId}/agenda`);
  return { data: planning };
};

export const createPlanning = createSafeAction(CreatePlanning, handler);
