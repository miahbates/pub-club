import type { AppProps } from "next/app";
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { PubTheme } from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={PubTheme(theme)}
      >
        <AppShell
          // header={}
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
