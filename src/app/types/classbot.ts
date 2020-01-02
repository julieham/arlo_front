export interface Venue {
  name: string;
  id: string;
}

export interface Classe {
  id: string;
  teacher: string;
  datetime: string;
  minutes: number;
  venue: string;
  name: string;
  available: boolean;
  credits: string;
  cp_status: string;
  bookable: boolean;
  my_status: string
}

export interface CalendarDay {
  date: string;
  classes: Classe[];
}

