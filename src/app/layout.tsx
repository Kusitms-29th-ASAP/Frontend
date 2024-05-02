"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
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
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#FF8700" />
      </head>
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
