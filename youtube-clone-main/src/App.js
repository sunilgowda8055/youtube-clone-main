import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledEngineProvider } from "@mui/material/styles";
import "./components/videoSection/videosec.css";
// import Navbar from "./components/Navbar";
import PersistentDrawerLeft from "./Drawer";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <PersistentDrawerLeft />
      </StyledEngineProvider>
    </>
  );
}

export default App;
