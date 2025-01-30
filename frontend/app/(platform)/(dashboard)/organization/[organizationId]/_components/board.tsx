import { deleteBoard } from "@/actions/delete-board";
import { FormDeleteButton } from "./form-delete-button";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form className='flex items-center gap-x-2' action={deleteBoardWithId}>
      <p>Board title: {title}</p>
      <FormDeleteButton />
    </form>
  );
};

export default Board;
