"use client";

import postKakaoToken from "@/apis/auth/postKakaoToken";
import { setToken } from "@/redux/slices/authSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AUTHORIZATION_CODE = new URL(window.location.href).searchParams.get(
        "code"
      );

      const getToken = async () => {
        try {
          const response = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            {
              grant_type: "authorization_code",
              client_id: REST_API_KEY,
              redirect_uri: REDIRECT_URI,
              code: AUTHORIZATION_CODE,
            },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          if (response) {
            const accessToken = response.data.access_token;
            localStorage.setItem("access_token", accessToken);
            router.push("/signin/terms");

            const data = await postKakaoToken(accessToken);

            dispatch(
              setToken({
                accessToken: data.accessToken, // 회원가입되어 있을 때
                refreshToken: data.refreshToken, // 회원가입되어 있을 때
                registerToken: data.registerToken, // 회원가입되어 있지 않을 때
              })
            );
          }
        } catch (error) {
          console.error("Error during token handling:", error);
        }
      };
      getToken();
    }
  }, [REST_API_KEY, REDIRECT_URI, router]);

  return null;
};

export default Auth;
