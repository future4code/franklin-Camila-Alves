import { createTheme } from "@mui/material";
import { primaryColor, secondaryColor, neutralColor, infoColor } from "../Colors/QuinaColor"

const QuinaTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: secondaryColor
    },
    secondary: {
        main: neutralColor,
        contrastText: infoColor
    },
    text: {
        primary: secondaryColor,
        secondary: infoColor
    }
  }
})

export default QuinaTheme