import "./App.css";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import UserMain from "./userMain/UserMain";
import { myTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <SnackbarProvider maxSnack={4}>
        <div className="App">
          <UserMain />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
