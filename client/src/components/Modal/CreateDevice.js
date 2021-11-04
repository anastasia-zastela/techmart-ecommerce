import React, {useState} from 'react';
import {
    Button, Container,
    Grid,
    MenuItem, Paper,
    Select, Typography,
} from '@material-ui/core';
import Input from '../Input/Input';
import useStyles from './styles';
import ProductService from "../../services/ProductService";

const initialState = {
    name: '', brand: '', imageUrls: [], currentPrice: '', quantity: '', categories: '', enabled: true,
};

const CreateDevice = () => {
    const classes = useStyles();
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = (e) => {

        ProductService.createProduct(form)

    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={4}>
                <Typography component="h1" variant="h5">Заполните форму</Typography>
                    <form fullWidth>
                    <Typography variant='h7'>Категория</Typography>
                    <Select
                        fullWidth
                        name='categories'
                        required
                        onChange={handleChange}
                    >
                        <MenuItem value={'Apple Store'}>Apple Store</MenuItem>
                        <MenuItem value={'Планшеты'}>Планшеты</MenuItem>
                        <MenuItem value={'Ноутбуки'}>Ноутбуки</MenuItem>
                        <MenuItem value={'Смартфоны'}>Смартфоны</MenuItem>
                    </Select>
                    </form>
                    <form >
                    <Typography variant='h7'>Бренд</Typography>
                        <Select
                            fullWidth
                            name='brand'
                            required
                            onChange={handleChange}
                        >
                            <MenuItem value={'Xiaomi'}>Xiaomi</MenuItem>
                            <MenuItem value={'Oppo'}>Oppo</MenuItem>
                            <MenuItem value={'Samsung'}>Samsung</MenuItem>
                        </Select>
                </form>
                    <Grid container spacing={2}>
                        <Input name="name" label="Введите название девайса" required handleChange={handleChange} type="text"/>
                        <Input name="currentPrice" label="Введите цену девайса" required handleChange={handleChange}/>
                        <Input name="imageUrls" label="Введите URL изображения" required handleChange={handleChange}/>
                        <Input name="quantity" label="Введите количество" required handleChange={handleChange}/>
                        <Input name="color" label="Введите цвет" required handleChange={handleChange}/>

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Добавить
                    </Button>

            </Paper>
        </Container>




       );

};
export default CreateDevice;
