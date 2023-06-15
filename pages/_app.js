import "regenerator-runtime/runtime";

import GlobalStyle from "../styles";
import Layout from "@/components/layout/Layout";
import { ConfigProvider } from "@/contexts/ConfigContext";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
