import { createTheme } from "@mui/material";
import { primaryColor, secondaryColor, neutralColor, infoColor } from "../Colors/LotoFacilColor"

const LotoFacilTheme = createTheme({
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

export default LotoFacilTheme