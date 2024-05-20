export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface PostUserRequest {
  registrationToken: string;
  agreement: {
    termsOfService: boolean;
    privacyPolicy: boolean;
    marketing: boolean;
  };
  phoneNumber: {
    number: string;
  };
  children: {
    name: string;
    gender: string;
    birth: string;
    elementSchoolId: number;
    elementSchoolGrade: string;
    elementSchoolClassNumber: string;
    elementSchoolClassCode: string;
    allergies: string[];
  }[];
}
