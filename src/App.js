import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import store from "./utils/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#0ed145]">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
