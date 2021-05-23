import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { LibraryProvider } from "./context/LibraryProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <AuthProvider>
      <LibraryProvider>
        <App />
      </LibraryProvider>
    </AuthProvider>
  </Router>,
  rootElement
);
