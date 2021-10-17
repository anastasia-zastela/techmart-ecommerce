import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  FormControl, Input,
  InputLabel,
  MenuItem, OutlinedInput,
  Select, TextField, Typography,
} from '@material-ui/core';
import { useStyles } from './style';

const CreateDevice = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  const [name, setName]= useState('');
  const [price, setPrice]= useState(0);
  const [img, setImg] = useState('')
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  return (
    <Box>
      <Button onClick={handleClickOpen}>Добавить новое устройство</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Заполните форму</DialogTitle>
        <DialogContent>
          <Box className={classes.modal__admin}>
            <FormControl className={classes.modal__admin___category}>
              <Typography variant={"h7"}>Категория</Typography>
              <Select
                  className={classes.modal__category__selector}
                value={age}
                onChange={handleChange}
              >
                <MenuItem>Apple Store</MenuItem>
                <MenuItem>Планшеты</MenuItem>
                <MenuItem>Ноутбуки</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <Typography variant={"h7"}>Бренд</Typography>
              <Select
                  className={classes.modal__category__selector}
                value={age}
                onChange={handleChange}
              >

                <MenuItem>Xiaomi</MenuItem>
                <MenuItem>Oppo</MenuItem>
                <MenuItem>Samsung</MenuItem>
              </Select>
            </FormControl>
            <Box>
            <Box>
              <TextField fullWidth  placeholder='Введите название девайса' />
            </Box>
            <Box>
              <Input  placeholder='Введите цену девайса' />
            </Box>
            <Box>
              <Input placeholder='Введите URL изображения' />
            </Box>
            </Box>
            <Button
              onClick={addInfo}
              variant='outlined'
            >
              Добавить свойство
            </Button>
            {info.map((i) => (
              <Box
                className={classes.propertyForm}
                key={i.number}
              >
                <Box>
                  <Input placeholder='Введите название свойства' />
                </Box>
                <Box>
                  <Input
                    className={classes.propertyForm}
                    placeholder='Введите описание свойства'
                  />
                </Box>
                <Button onClick={() => removeInfo(i.number)}>Удалить </Button>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default CreateDevice;
