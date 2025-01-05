import { PaletteColorOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomPalette {
    danger: PaletteColorOptions;
  }
  interface Palette {
    danger: PaletteColorOptions;
  }

  interface PaletteOptions {
    danger: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    danger: true;
  }
}

const appTheme = createTheme({
  palette: {
    primary: {
      light: '#FFA6C9', // Light variant of Rose
      main: '#FF69B4', // Main Rose color for submit button
      dark: '#D94888', // Dark variant of Rose
      contrastText: '#ffffff', // White text for primary
    },
    secondary: {
      light: '#DDE3E4', // Light variant of light grey
      main: '#BDC3C7', // Main Light Grey for cancel button
      dark: '#8B959A', // Dark variant of Light Grey
      contrastText: '#1c1c1c', // Black text for secondary
    },
    error: {
      light: '#F1948A', // Light variant of Red
      main: '#E74C3C', // Main Red for error button
      dark: '#C0392B', // Dark variant of Red
      contrastText: '#ffffff', // White text for error
    },
    success: {
      light: '#58D68D', // Light variant of Green
      main: '#2ECC71', // Main Green for success
      dark: '#28B463', // Dark variant of Green
      contrastText: '#ffffff', // White text for success
    },
    warning: {
      light: '#F8C471', // Light variant of Orange
      main: '#F39C12', // Main Orange for warning
      dark: '#D68910', // Dark variant of Orange
      contrastText: '#ffffff', // White text for warning
    },
    info: {
      light: '#5DADE2', // Light variant of Blue
      main: '#3498DB', // Main Blue for info
      dark: '#2C81BA', // Dark variant of Blue
      contrastText: '#ffffff', // White text for info
    },
    background: {
      default: '#EBF1F4', // App background (light greyish blue)
      paper: '#ffffff', // Main sections background (white)
    },
    danger: {
      main: '#ffe169',
      light: '#ffeb99',
      dark: '#ffcf00',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Poppins font
    // Tell Material UI what the font-size on the html element is.
    htmlFontSize: 10,
  },
});

export default appTheme;
