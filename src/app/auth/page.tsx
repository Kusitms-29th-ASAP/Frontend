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
    const getToken = async () => {
      const AUTHORIZATION_CODE = new URL(window.location.href).searchParams.get(
        "code"
      );
      if (!AUTHORIZATION_CODE) {
        console.error("Authorization Code is missing");
        return;
      }

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

        const kakao_accessToken = response.data.access_token;
        localStorage.setItem("access_token", kakao_accessToken);

        const data = await postKakaoToken(kakao_accessToken);

        if (data.accessToken) {
          localStorage.setItem("access_token", data.accessToken);
          router.push("/home");

          dispatch(
            setToken({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            })
          );
        } else {
          router.push("/signin/terms");

          dispatch(
            setToken({
              registerToken: data.registerToken,
            })
          );
        }
      } catch (error) {
        console.error(error);
        return;
      }
    };
    getToken();
  }, []);

  return null;
};

export default Auth;
