import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/cal.woff2",
});
const bodyFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const MarketingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}>
        <div
          className={cn(
            "mb-4 flex items-center uppercase border shadow-sm rounded-full bg-amber-100 text-amber-700 p-4",
            bodyFont.className
          )}>
          <Medal className='h-6 w-6 mr2' />
          La référence pour organiser vos tâches
        </div>
        <h1 className='marketing-heading text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          FTM vous aide à gérer vos projets
        </h1>
        <div className='txt-3xl md:text-6xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
          plus efficacement!
        </div>
      </div>
      <div
        className={cn(
          "text-center text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl mx-auto",
          bodyFont.className
        )}
        title='Marketing description'>
        Organisez vos tâches personnelles efficacement avec French Task Manager.
        Une application intuitive, responsive et adaptée à vos besoins.
        Planifiez, gérez et synchronisez vos objectifs en un clin d'œil.
        Simplifiez votre quotidien avec des fonctionnalités pensées pour vous.
      </div>
      <Button className='mt-6' size='lg' aria-label='Inscription' asChild>
        <Link
          href='/sign-up'
          title='Inscription'
          className={bodyFont.className}>
          Obtenez FTM gratuitement
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
