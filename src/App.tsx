import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Quote from "./quotes/Quote";
import Upload from "./upload";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>The Quote Machine</h1>

        <Quote />

        {/*<Upload />*/}
      </div>
    </Provider>
  );
}
