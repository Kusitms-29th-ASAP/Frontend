"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./global.css";
import StyledJsxRegistry from "./registry";

const queryClient = new QueryClient();

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
            <StyledJsxRegistry>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </StyledJsxRegistry>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
