export interface Subject {
  time: number;
  subject: string;
}

export interface Week {
  week: Subject[];
}

export interface GetWeekTimetableResponse {
  timetables: Week[] | any;
}
