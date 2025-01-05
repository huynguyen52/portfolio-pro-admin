import { PaletteColor, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Palette {
    cyan?: PaletteColor;
  }

  interface PaletteOptions {
    cyan?: PaletteColor;
  }

  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const appTheme = createTheme({
  status: {
    danger: orange[500],
  },
  // adding custom palette colors #FF69B4 #b34a98 #ffe169 #b39e4a #69ffff
  palette: {
    primary: {
      main: '#FF69B4',
      light: '##ff99cc',
      dark: '#b34a98',
    },
    secondary: {
      main: '##ffe169',
      light: '##ffeb99',
      dark: '##b39e4a',
    },
    cyan: {
      main: '#69ffff',
      light: '#99ffff',
      dark: '#4ab3b3',
      contrastText: '#000',
    },
  },
});

export default appTheme;
