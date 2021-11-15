import React from 'react';
import {Typography} from '@material-ui/core';
import Box from '@mui/material/Box';

const ProductDescription = () => {
    return (
        <Box sx={{p: 4}}>
            <Typography variant="h5" color="primary" align="left" paragraph={true}>
                Керамический щит.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" paragraph={true}>
                У предыдущей модели уже было самое прочное стекло. Поэтому, чтобы значительно повысить долговечность,
                нам пришлось использовать совершенно новый материал. Его получают путем введения в стекло
                нанокерамических кристаллов, которые на самом деле тверже, чем большинство металлов. Звучит просто, но
                это невероятно сложно, потому что керамика непрозрачна. Контролируя тип кристаллов и степень
                кристалличности, мы разработали эксклюзивную формулу, которая максимизирует прочность керамики,
                оставаясь оптически прозрачной. Это был прорыв, который сделал Ceramic Shield идеально подходящим для
                дисплея. Это первое в любом смартфоне, и оно прочнее, чем стекло любого смартфона.
            </Typography>
            <Typography variant="h5" color="primary" align="left" paragraph={true}>
                Сверхбыстрый.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" paragraph={true}>
                5G трансформирует девайс за счет увеличения скорости беспроводной связи и повышения производительности в
                перегруженных сетях. Теперь вы можете загружать огромные файлы в пути или транслировать
                высококачественные фильмы HDR. Без. Все. Файл. Отставание. Девайс также имеет большинство диапазонов 5G,
                чем любой смартфон, поэтому вы получаете 5G в большем количестве мест. И такая скорость открывает
                удивительные возможности для приложений будущего.
            </Typography>
            <Typography variant="h5" color="primary" align="left" paragraph={true}>
                Процессор.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" paragraph={true}>
                A14 Bionic - это первый в отрасли 5-нанометровый чип с передовыми компонентами шириной буквально в атом.
                Транзисторы увеличивают скорость на 40%, увеличивая при этом эффективность и увеличивая время автономной
                работы. А новый интернет-провайдер обеспечивает запись в формате Dolby Vision - то, что не под силу ни
                одной профессиональной кинокамере, не говоря уже о любом другом телефоне.
            </Typography>
            <Typography variant="h5" color="primary" align="left" paragraph={true}>
                Camerus maximus.
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify" paragraph={true} sx={{my: 20}}>
                В более крупном варианте есть система камер Pro. Матрица на 47% больше и большие пиксели значительно
                увеличивают количество света, собираемого широкоугольной камерой. Новая OIS стабилизирует сенсор, а не
                объектив, поэтому ваши снимки будут стабильными, даже если это не так. А новый телеобъектив с диагональю
                65 мм позволяет снимать портреты более крупным планом.
            </Typography>
        </Box>
    );
};

export default ProductDescription;