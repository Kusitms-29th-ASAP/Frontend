"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./global.css";
import NOSSR from "@/components/common/NOSSR";
import { Metadata } from "next";

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "스쿨포인트",
  description: "AI 기반 통합 알림장 소통 플랫폼 스쿨포인트",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <head>
        <title>스쿨포인트</title>
      </head>
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <NOSSR>{children}</NOSSR>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
