
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const orders = [
    { id: 1, date: '2023-05-15', total: 1200, status: 'Entregado' },
    { id: 2, date: '2023-06-20', total: 800, status: 'En camino' },
    { id: 3, date: '2023-07-10', total: 250, status: 'Procesando' },
];

const OrdersPage = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h1" gutterBottom sx={{ my: 4 }}>
                Mis Pedidos
            </Typography>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>${order.total}</TableCell>
                                <TableCell>{order.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
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

export default OrdersPage;