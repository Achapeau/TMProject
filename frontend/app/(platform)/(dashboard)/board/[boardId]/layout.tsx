import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { BoardNavbar } from "./_components/board-navbar";

export async function generateMetadata(props: {
  params: Promise<{ boardId: string }>;
}) {
  const params = await props.params;
  const { orgId } = await auth();

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async (props: {
  children: React.ReactNode;
  params: Promise<{ boardId: string }>;
}) => {
  const params = await props.params;

  const { children } = props;

  const { orgId } = await auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  });

  if (!board) {
    notFound();
  }

  return (
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className='relative h-full bg-no-repeat bg-cover bg-center'>
      <main className='relative pt-28 h-full'>
        <BoardNavbar data={board} />
        {children}
      </main>
    </div>
  );
};

export default BoardIdLayout;
