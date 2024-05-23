import { School } from "@/interface/School";
import axios from "axios";

interface GetSchoolResponse {
  schools: School[];
}

export async function getSchool(keyword: string): Promise<GetSchoolResponse> {
  const response = await axios.get(
    `https://api.ncp.simproject.kr/api/v1/schools?keyword=${keyword}`
  );
  return response.data;
}

export default getSchool;
