"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export type Organization = {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
};

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      href: `/organization/${organization.id}`,
      icon: <Layout className='h-4 w-4' />,
    },
    {
      label: "Activity",
      href: `/organization/${organization.id}/activity`,
      icon: <Activity className='h-4 w-4' />,
    },
    {
      label: "Settings",
      href: `/organization/${organization.id}/settings`,
      icon: <Settings className='h-4 w-4' />,
    },
    {
      label: "Billing",
      href: `/organization/${organization.id}/billing`,
      icon: <CreditCard className='h-4 w-4' />,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className='borde r-none'>
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}>
        <div className='flex items-center gap-x-2'>
          <div className='w-7 h-7 relative'>
            <Image
              fill
              src={organization.imageUrl}
              alt={organization.name}
              className='object-cover rounded-sm'
            />
          </div>
          <span className='font-medium text-sm'>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='pt-1 text-neutral-700'>
        {routes.map((route) => (
          <Button
            key={route.label}
            size={"sm"}
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal justify-start pl-10 mb-1",
              pathname === route.href && "bg-sky-500/10 text-sky-700"
            )}
            variant='ghost'>
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-10 h-10 relative shrink-0'>
        <Skeleton className='w-full h-full absolute ' />
      </div>
      <Skeleton className='h-10 w-full ' />
    </div>
  );
};
