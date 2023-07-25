import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./style";

import guitar1 from './guitar1.jpeg';

export const Hero = () => {
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
      <Grid item md={6} xs={12}>
        <Typography variant="h4" className={classes.heading}>
        Our Store
        </Typography>
        <Typography className={classes.detail}>
        Welcome to the Harmonious Haven, where strings whisper their melodies and frets dance with your fingers! Step into a virtual realm that echoes with the timeless tunes of legends and the aspirations of budding guitar virtuosos. Whether you're a seasoned strummer or a curious newcomer, our online guitar shop is your enchanted gateway to a symphony of six-stringed wonders.
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="primary"
          style={{ color: "white" }}
          href="#products"
        >
          Start Shopping
        </Button>
      </Grid>

      <Grid item md={6} xs={12}>
        <img src={guitar1}  width="400" height="400"/>
      </Grid>
    </Grid>
    <Grid
        spacing={10}
        className={classes.root}
        container
        justify="space-between"
        alignItems="center"
    >
        <Grid item md={12} xs={12}>
        <Typography variant="h4" className={classes.heading}>
          Little notes
        </Typography>
        <Typography className={classes.detail}>
        <p>Unearth your passion for melody as you browse through our meticulously crafted selection, thoughtfully tailored to cater to musicians of all skill levels and musical genres. Our mission is to help you find the perfect companion that resonates with your musical journey, bringing your melodies to life and composing your own saga.</p>
        <p/>
        <p>As you traverse our virtual corridors, you'll encounter not only an extraordinary array of guitars but also a team of virtuoso guides ready to assist you in your quest. From expert advice to a trove of resources, we're here to nurture your musical expedition and unlock the doors to an enchanting world of harmony.</p>
        <p/>
        <p>So, whether you're searching for your very first strum or adding another gem to your collection, the Harmonious Haven beckons you to explore, immerse, and embark on a symphonic adventure like no other. Let the strings of destiny lead you to a harmonious experience you'll cherish for a lifetime.</p>
        </Typography>
      </Grid>
    </Grid>
    </>
  );
};
