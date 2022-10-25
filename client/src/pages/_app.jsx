import { useState } from "react";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../components/redux";
import Welcome from "../components/welcome";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false);
  return (
    <Provider store={store}>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
