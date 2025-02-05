import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ActivityItem } from "@/components/activity-item";
import { db } from "@/lib/db";
import { Skeleton } from "@/components/ui/skeleton";

export const ActivityList = async () => {
  const { orgId } = await auth();

  if (!orgId) return redirect("/select-org");

  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <ol className='space-y-4 mt-4'>
      <p className='hidden last:block text-xs text-center text-muted-foreground'>
        No activity found inside this organization
      </p>
      {auditLogs.map((log) => (
        <li key={log.id}>
          <ActivityItem data={log} />
        </li>
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol className='space-y-4 mt-4'>
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[50%] h-14' />
      <Skeleton className='w-[70%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[75%] h-14' />
    </ol>
  );
};
