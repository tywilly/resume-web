import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, CssBaseline } from '@mui/material'
import Main from './pages/main/Main'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Error from './pages/error/Error';

export const themeOptions = {
  palette: {
      type: 'light',
      primary: {
          main: '#3f51b5',
      },
      secondary: {
          main: '#f50057',
      },
      background: {
          default: '#f3f2ef'
      }
  },
};

const theme = createTheme(themeOptions);

const router = createBrowserRouter([
  {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header/>
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
