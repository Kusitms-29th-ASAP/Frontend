"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const AUTHORIZATION_CODE = new URL(window.location.href).searchParams.get(
    "code"
  );

  const getToken = async () => {
    const res = axios.post(
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
    console.log(res);
    return res;
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res) {
          localStorage.setItem(
            "access_token",
            JSON.stringify(res.data.access_token)
          );
          router.push("/signin/terms");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default Auth;
