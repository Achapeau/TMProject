import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

import { db } from "@/lib/db";

import { BoardNavbar } from "./_components/board-navbar";

const getBoard = async (boardId: string, orgId: string) => {
  const board = await db.board.findUnique({
    where: { id: boardId, orgId },
  });

  return board;
};

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  console.log("boardId", params.boardId);
  const { orgId } = await auth();

  if (!orgId) return { title: "Board" };

  const board = await getBoard(params.boardId, orgId);

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) => {
  console.log("boardId", params.boardId);
  const { orgId } = await auth();

  if (!orgId) return redirect("/select-org");

  const board = await getBoard(params.boardId, orgId);

  if (!board) notFound();

  return (
    <div
      className='relative h-full bg-no-repeat bg-center bg-cover'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}>
      <BoardNavbar data={board} />
      <div className='absolute inset-0 bg-black/10' />
      <main className='relative pt-28 h-full'>{children}</main>
    </div>
  );
};

export default BoardIdLayout;
