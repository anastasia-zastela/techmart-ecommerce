import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from "react";

export default function CenteredTabs({setDesc, setSpec, setReviews}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDesc = () => {
        setDesc(true);
        setSpec(false);
        setReviews(false);
    };

    const handleSpec = () => {
        setDesc(false);
        setSpec(true);
        setReviews(false);
    }

    const handleReviews = () => {
        setDesc(false);
        setSpec(false);
        setReviews(true);
    }

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab onClick={handleDesc} label="Описание" />
                <Tab onClick={handleSpec} label="Характеристики" />
                <Tab onClick={handleReviews} label="Отзывы" />
            </Tabs>
        </Box>
    );
}