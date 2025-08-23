import { createRoot } from 'react-dom/client'
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import './index.css'
import App from './App.jsx'

let theme = createTheme();
theme = responsiveFontSizes(theme);

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>   
)
