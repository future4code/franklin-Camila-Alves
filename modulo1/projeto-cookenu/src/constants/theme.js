import { createTheme } from "@mui/material";
import { primaryColor, neutralColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#FDFDFD'
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme;
