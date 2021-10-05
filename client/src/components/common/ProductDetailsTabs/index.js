import React, {useState} from 'react';
import {Paper} from "@material-ui/core";

import ProductTabs from "./Tabs";
import Reviews from "./Tabs/Reviews";

import useStyles from "./styles";

const ProductDetailsTabs = () => {
        const classes = useStyles();

        const [description, setDescription] = useState(true);
        const [specifications, setSpecifications] = useState(false);
        const [reviews, setReviews] = useState(false);

        return (
            <>
                <Paper>
                    <ProductTabs setDescription={setDescription} setSpecifications={setSpecifications} setReviews={setReviews}/>
                </Paper>
                <Paper className={classes.descriptions}>
                    {description &&
                    <Paper>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est itaque iure quisquam sed
                        voluptatibus.</Paper>}
                    {specifications && <Paper>Lorem ipsum dolor sit amet, consectetur adipisicing .</Paper>}
                    {reviews && <Paper><Reviews/></Paper>}
                </Paper>
            </>
        );
    }
;

export default ProductDetailsTabs;