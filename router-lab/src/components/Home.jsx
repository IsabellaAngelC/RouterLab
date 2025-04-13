
import { Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { isAuthenticated, login, logout } from '../utils/auth';

const HomePage = () => {
    const handleLogin = () => {
        login();
        window.location.reload();
    };

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Bienvenido a nuestra tienda
                </Typography>
                <Typography variant="body1" paragraph>
                    Explora nuestros increíbles productos y realiza tus compras de manera segura.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                    <Button 
                        variant="contained" 
                        component={Link} 
                        to="/productos"
                    >
                        Ver Productos
                    </Button>
                    
                    {isAuthenticated() ? (
                        <>
                            <Button 
                                variant="contained" 
                                component={Link} 
                                to="/mis-pedidos"
                            >
                                Mis Pedidos
                            </Button>
                            <Button 
                                variant="outlined" 
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </Button>
                        </>
                    ) : (
                        <Button 
                            variant="outlined" 
                            onClick={handleLogin}
                        >
                            Iniciar Sesión
                        </Button>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;