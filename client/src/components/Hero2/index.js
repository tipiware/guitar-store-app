import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";

import guitar1 from './guitar1.jpeg';

export const Hero2 = () => {
  const classes = useStyles();

  return (
    <>
    <Grid
        spacing={10}
        className={classes.root}
        container
        justify="space-between"
        alignItems="center"
    >
        <Grid item md={12} xs={12}>
        <Typography variant="h4" className={classes.heading}>
          FAQ
        </Typography>
        <Typography className={classes.detail}>
        <h3>1. How do I place an order on your online guitar store?</h3>
        <p>To place an order, simply browse our collection of guitars, choose your desired instrument, and click on the "Add to Cart" button. Proceed to the checkout page, fill in your shipping details, and select your preferred payment method. Once the order is confirmed, we'll process it and get your guitar ready for shipment.</p>
        <p/>
        <h3>2. What payment methods do you accept?</h3>
        <p>We accept various payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment options. Choose the one that suits you best during the checkout process.</p>
        <p/>
        <h3>3. Do you offer international shipping?</h3>
        <p>Yes, we offer international shipping to many countries around the world. During checkout, you can select your country, and shipping options and costs will be calculated accordingly.</p>
        </Typography>
      </Grid>
    </Grid>
    </>
  );
};
