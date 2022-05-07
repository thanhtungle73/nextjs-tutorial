import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        fixed: true,
        maxWidth: 'md'
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px',
          }
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px',
          }
        }
      }
    },
    // Override style for Link component
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#FF6464'
          }
        }
      }

    }
  }
});
