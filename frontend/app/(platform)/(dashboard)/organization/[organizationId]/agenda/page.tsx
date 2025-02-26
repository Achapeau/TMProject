import { Schedule } from "../_components/schedule";
import { Plus } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { FormPopoverEvent } from "../../../schedule/_components/form-popover-event";

const AgendaPage = async () => {
  const view = "agenda";

  const { userId } = await auth();

  if (!userId) return null;

  let planning = await db.planning.findUnique({
    where: {
      userId: userId!,
    },
  });

  if (!planning) {
    planning = await db.planning.create({
      data: {
        userId: userId,
      },
    });
  }

  const events = await db.event.findMany({
    where: {
      planningEvents: {
        some: {
          planningId: planning?.id,
        },
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });
  return (
    <div className='w-[80vw] gap-4 flex'>
      <Schedule view={view} events={events} />
      <FormPopoverEvent sideOffset={100} side='left' align='center'>
        <div
          role='button'
          className='aspect-video relative h-20 w-60 bg-muted rounded-md bg-no-repeat bg-center bg-cover gap-2 overflow-hidden p-4 inline-flex items-center justify-center'>
          Ajouter un évènement
          <Plus className='h-4 w-4' />
        </div>
      </FormPopoverEvent>
    </div>
  );
};

export default AgendaPage;
