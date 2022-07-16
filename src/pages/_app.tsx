import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { PubTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={PubTheme(theme)}
      >
        <AppShell
          header={""}
          sx={{
            main: {
              width: "100%",
              padding: 0,
            },
          }}
        >
          <div>
            <Component {...pageProps} />
          </div>
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default MyApp;
