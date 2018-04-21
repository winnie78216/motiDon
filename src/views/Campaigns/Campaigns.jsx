import React from "react";
import { Grid, InputLabel, withStyles, TextField } from "material-ui";
import SaveIcon from 'material-ui-icons/Save';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import { Button, CustomInput, RegularCard, EnhancedTable, ItemGrid, Small, CampaignCard } from "components";

const style = {
  datePicker: {
    padding: "30px"
  },
  typo: {
    paddingLeft: "20px",
  },
  icon: {
    marginRight: 5,
    margin: "-5px 5px -5px -10px"
  },
};

function Campaigns({ ...props }) {

  const campaignCards = props.data.map((index, entry) => 
    <ItemGrid xs={12} sm={12} md={8}>
    <div style={{margin:10}}>
      <CampaignCard data={entry} />
      </div>
    </ItemGrid> 
  )
console.log(props)
  return (
    <Grid container>
        {campaignCards}

    </Grid>
  );
}

Campaigns = connect(
  state => ({
    data: state.campaignsReducer.campaigns.data
  })
)(Campaigns)

export default withStyles(style)(Campaigns);
