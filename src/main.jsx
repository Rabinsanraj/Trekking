import { createRoot } from 'react-dom/client'
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';

let theme = createTheme();
theme = responsiveFontSizes(theme);

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> 
  </HashRouter>  
)
