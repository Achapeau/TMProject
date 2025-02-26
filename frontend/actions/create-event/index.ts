"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { CreateEvent } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return { error: "Unauthorized" };
  }

  const { title, startDate, endDate, description, status, cardId, boardId } =
    data;

  let event;

  try {
    event = await db.event.create({
      data: {
        title,
        startDate,
        endDate,
        description,
        status,
        cardId,
        boardId,
        orgId,
      },
    });
  } catch (error) {
    return { error: "Failed to create event" };
  }

  revalidatePath(`/organization/${orgId}/agenda`);
  return { data: event };
};

export const createEvent = createSafeAction(CreateEvent, handler);
