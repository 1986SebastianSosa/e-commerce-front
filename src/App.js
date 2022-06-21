import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";

const myTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
      <Navbar/>
        <MyRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
