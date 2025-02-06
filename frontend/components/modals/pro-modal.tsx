"use client";

import { useProModal } from "@/hooks/use-pro-modal";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    execute({});
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='max-w-md p-0 overflow-hidden'>
        <div className='aspect-video relative flex items-center justify-center'>
          <Image
            src='/images/hero.svg'
            alt='Hero'
            className='object-cover'
            fill
          />
        </div>
        <div className='text-neutral-700 mx-auto space-y-6 p-6'>
          <DialogTitle className='flex flex-col gap-4'></DialogTitle>
          <h2 className='font-semibold text-xl'>Upgrade to FTM today!</h2>

          <p className='text-xs font-semibold to-neutral-600'>
            Explore the best of French Task Manager
          </p>
          <div className='pl-3'>
            <ul className='text-sm list-disc'>
              <li>Unlimited boards</li>
              <li>Advanced checklists</li>
              <li>Priority boards</li>
              <li>Personalized task notification</li>
              <li>And more!</li>
            </ul>
          </div>
          <Button
            disabled={isLoading}
            onClick={onClick}
            className='w-full'
            variant='primary'>
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
