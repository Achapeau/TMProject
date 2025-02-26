import { db } from "@/lib/db";
import { Schedule } from "../organization/[organizationId]/_components/schedule";
import { auth } from "@clerk/nextjs/server";

const SchedulePage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className='h-[80vh] w-[80vw] mx-auto my-auto'>
        <h1>Connectez-vous pour accéder à votre agenda</h1>
      </div>
    );
  }

  let planning = await db.planning.findUnique({
    where: {
      userId: userId!,
    },
  });

  if (!planning) {
    planning = await db.planning.create({
      data: { userId },
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
    <div className='h-[80vh] w-[80vw] mx-auto my-auto'>
      <h1>Vos agendas regroupés</h1>
      <Schedule events={events} />
    </div>
  );
};

export default SchedulePage;
