"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Board } from "@prisma/client";
import { FormInput } from "@/components/form/form-input";

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus(), inputRef.current?.select();
    });
  };

  const disableEditing = () => setIsEditing(false);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log("I have submitted", title);
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className='flex items-center gap-x-2'>
        <FormInput
          ref={inputRef}
          id='title'
          onBlur={() => {}}
          defaultValue={data.title}
          classname='text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none'
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      className='font-bold text-lg h-auto w-auto p-1 px-2'
      variant='transparent'>
      {data.title}
    </Button>
  );
};
