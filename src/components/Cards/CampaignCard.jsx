import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { NavLink } from "react-router-dom";
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function CampaignCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <CardHeader
            title={<NavLink to={'/orginization'}> {props.data.orginization}</NavLink>}
            subheader={props.data.date}
          />
        <CardMedia
          className={classes.media}
          image={props.data.imageUrl}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.data.title}
          </Typography>
          <Typography component="p">
            {props.data.description}
          </Typography>
          <div style={{margin:20}}>
          <LinearProgress variant="determinate" value={props.data.currentDonation/props.data.targetDonation*100} />
          {props.data.currentDonation}€ of {props.data.targetDonation}€ Donated
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Donate
          </Button>
          <Button size="small" color="primary">
            Results
          </Button>
        </CardActions>

      </Card>
    </div>
  );
}

CampaignCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignCard);