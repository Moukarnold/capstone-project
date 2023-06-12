import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
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
