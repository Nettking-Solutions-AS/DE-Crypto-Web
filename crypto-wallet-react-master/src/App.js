import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./component/Layout";

function App() {
  const user_crypto_currency_data =
    localStorage.getItem("user_crypto_currency_data") &&
    JSON.parse(localStorage.getItem("user_crypto_currency_data"));

  const routing = useRoutes(getRoutes(user_crypto_currency_data));

  return <Layout>{routing}</Layout>;
}

export default App;
