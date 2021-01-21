import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MyStore from "./redux/config/Store";
import "./index.css";
import App from "./views/app/App";

ReactDOM.render(
  <Provider store={MyStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
