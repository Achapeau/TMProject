"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { fr } from "date-fns/locale/fr";

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
  getDay,
  locales,
});

interface ScheduleProps {
  events?: {
    title: string;
    startDate: Date;
    endDate: Date;
    description: string | null;
    status: "TO_DO" | "IN_PROGRESS" | "DONE" | "NEUTRAL";
    cardId: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
  view?: "day" | "week" | "month" | "agenda";
}

export const Schedule = ({ events, view }: ScheduleProps) => {
  return (
    <div className='h-[80vh]'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='startDate'
        endAccessor='endDate'
        culture='fr'
        defaultView={view || "month"}
        messages={{
          previous: "Precedent",
          next: "Suivant",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
        }}
        onShowMore={() => console.log("show more")}
      />
    </div>
  );
};
