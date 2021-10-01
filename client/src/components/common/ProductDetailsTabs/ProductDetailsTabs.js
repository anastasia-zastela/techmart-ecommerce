import React, {useState} from 'react';
import CenteredTabs from "./Tabs/Tabs";
import {Paper} from "@material-ui/core";
import useStyles from "./styles";
import Reviews from "./Tabs/Reviews/Reviews";

const ProductDetailsTabs = () => {
    const [desc, setDesc] = useState(true);
    const [spec, setSpec] = useState(false);
    const [reviews, setReviews] = useState(false);

    const classes = useStyles();

    return(
    <>
        <Paper>
            <CenteredTabs setDesc={setDesc} setSpec={setSpec} setReviews={setReviews} />
        </Paper>
        <Paper className={classes.descriptions}>
            {desc && <Paper>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est itaque iure quisquam sed voluptatibus.</Paper>}
            {spec && <Paper>Lorem ipsum dolor sit amet, consectetur adipisicing .</Paper>}
            {reviews && <Paper><Reviews/></Paper>}
        </Paper>
    </>
);
}
;

export default ProductDetailsTabs;