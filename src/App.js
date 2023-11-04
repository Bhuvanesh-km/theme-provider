import "./App.css";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import { ThemeProvider } from "./context-api/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <ProductDetails />
      </div>
    </ThemeProvider>
  );
}

export default App;
