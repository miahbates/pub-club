import type { AppProps } from "next/app";
import { AppShell, MantineProvider, useMantineTheme } from "@mantine/core";
import { PubTheme } from "../theme";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <UserProvider>
      <Head>
        <title>Pub club</title>
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
              background: "black",
            },
          }}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </UserProvider>
  );
}

export default MyApp;
