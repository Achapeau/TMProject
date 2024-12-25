import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/cal.woff2",
});

export const Logo = ({ hideTitle }: { hideTitle?: boolean }) => {
  return (
    <Link href='/'>
      <div className='hover:opacity-75 transition items-center  gap-x-2 hidden md:flex'>
        <Image
          src='/images/logo.png'
          alt='Logo french task manager'
          width={30}
          height={30}
        />
        {!hideTitle && (
          <h1
            className={cn(
              "text-lg text-neutral-700 pb-1",
              headingFont.className
            )}>
            French Task Manager
          </h1>
        )}
      </div>
    </Link>
  );
};
