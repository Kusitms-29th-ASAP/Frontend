import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    registrationToken: "",
    agreement: {
      termsOfService: false,
      privacyPolicy: false,
      marketing: false,
    },
    phoneNumber: {
      number: "",
    },
    children: [
      {
        name: "",
        gender: "",
        birth: "",
        elementSchoolId: 566, // 임시
        elementSchoolGrade: "",
        elementSchoolClassNumber: "",
        elementSchoolClassCode: "",
        allergies: [],
      },
    ],
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
