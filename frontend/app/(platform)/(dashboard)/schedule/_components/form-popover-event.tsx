"use client";

import { toast } from "sonner";
import router from "next/router";
import { useRef, useState } from "react";

import { X } from "lucide-react";

import { mergeDateTime, validateDateTask } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createEvent } from "@/actions/create-event";

interface FormPopoverEventProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopoverEvent = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverEventProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const validation = validateDateTask({
    startDate,
    startTime,
    endDate,
    endTime,
  });

  const { execute, fieldErrors } = useAction(createEvent, {
    onSuccess: (data) => {
      toast.success("Event created");
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const startDate = mergeDateTime(
      formData.get("startDate") as string,
      formData.get("startTime") as string
    );
    const endDate = mergeDateTime(
      formData.get("endDate") as string,
      formData.get("endTime") as string
    ) as Date;
    const description = formData.get("description") as string;

    execute({ title, startDate, endDate, description });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent side={side} align={align} sideOffset={sideOffset}>
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          Créer un évènement!
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
            variant='ghost'>
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <Label htmlFor='title'>
              Titre de l'évènement
              <Input
                placeholder='Titre'
                className='w-full'
                id='title'
                name='title'
                aria-label='title'
                type='text'
              />
            </Label>
            <Label htmlFor='startDateTime'>
              Début de l'évènement
              <br />
              <input
                type='date'
                id='startDate'
                name='startDate'
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
              <input
                type='time'
                id='startTime'
                name='startTime'
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
              />
            </Label>
            <br />
            <Label htmlFor='endDateTime'>
              Fin de l'évènement
              <br />
              <input
                type='date'
                id='endDate'
                name='endDate'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <input
                type='time'
                id='endTime'
                name='endTime'
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Label>

            {!validation.isValid && (
              <p className='text-sm text-red-600'>
                La date et l'heure de fin doivent être après la date et l'heure
                de debut
              </p>
            )}
            <br />
            <Label htmlFor='description'>
              Description de l'évènement
              <Textarea
                placeholder='Description'
                className='w-full'
                id='description'
                aria-label='description'
                name='description'
              />
            </Label>
          </div>

          <FormSubmit className='w-full' disabled={!validation.isValid}>
            Créer l'évènement
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
