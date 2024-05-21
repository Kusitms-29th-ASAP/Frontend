import { School } from "@/interface/School";
import Axios from "../axios";

interface GetSchoolResponse {
  schools: School[];
}

export async function getSchool(keyword: string): Promise<GetSchoolResponse> {
  const response = await Axios.get(`/api/v1/schools?keyword=${keyword}`);
  return response.data;
}

export default getSchool;
