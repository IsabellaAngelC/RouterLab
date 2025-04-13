
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Laptop Premium',
        description: 'Potente laptop con procesador de última generación',
        price: 1200,
        image: 'https://m.media-amazon.com/images/I/71EVBJVMSoL.jpg'
    },
    {
        id: 2,
        name: 'Smartphone Avanzado',
        description: 'Teléfono inteligente con cámara profesional',
        price: 800,
        image: 'https://m.media-amazon.com/images/I/51AHHmX-17L.jpg'
    },
    {
        id: 3,
        name: 'Auriculares Inalámbricos',
        description: 'Sonido de alta calidad con cancelación de ruido',
        price: 250,
        image: 'https://colmetecno.com/cdn/shop/files/AudifonosAirpodsMAXInEarP902.png?v=1709244371'
    },
];

const ProductsPage = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
                Nuestros Productos
            </Typography>
            
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            <Button 
                variant="contained" 
                component={Link} 
                to="/" 
                sx={{ mt: 4 }}
            >
                Volver al Inicio
            </Button>
        </Container>
    );
};

export default ProductsPage;