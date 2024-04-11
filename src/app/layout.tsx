"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalFont from "@/styles/GlobalFont";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalFont />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
