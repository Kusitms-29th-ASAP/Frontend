import { GetWeekTimetableResponse } from "@/interface/Timetable";
import Axios from "../axios";

export async function getWeekTimetable(): Promise<GetWeekTimetableResponse> {
  const response = await Axios.get("/api/v1/timetables/week");
  return response.data;
}

export default getWeekTimetable;
