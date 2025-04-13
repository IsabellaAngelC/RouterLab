import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ProductsPage from './components/Products';
import OrdersPage from './components/Orders';
import ProtectedRoute from './components/ProtectedRoute';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/productos" element={<ProductsPage />} />
                    <Route 
                        path="/mis-pedidos" 
                        element={
                            <ProtectedRoute>
                                <OrdersPage />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </Router>
        </ThemeProvider>
  )
}

export default App
