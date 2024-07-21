import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Quote from "./quotes/Quote";
import AddQuote from "./add/AddQuote";
import Upload from "./upload/Upload";
import { Box, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <Provider store={store}>
      <Box className="App">
        <Toolbar>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Box display="flex" className="buttons-row">
              <AddQuote />
              <Upload />
            </Box>
          </Box>
        </Toolbar>
        <Typography variant="h3" sx={{ mt: "10vh" }}>
          The quote machine
        </Typography>
        <Quote />
      </Box>
    </Provider>
  );
}
