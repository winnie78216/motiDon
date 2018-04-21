import React from "react";
import { Grid, InputLabel, withStyles, TextField } from "material-ui";
import SaveIcon from 'material-ui-icons/Save';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import { addMeetingNote } from './meetingNotesActionCreator'

import { Button, CustomInput, RegularCard, EnhancedTable, ItemGrid, Small } from "components";

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

function MeetingNotes({ ...props }) {
  console.log(props)
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Fundargerð"
          cardSubtitle="Settu inn viðeigandi upplýsingar hér að neðan"
          content={
            <div>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={4}>

                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Titill"
                    id="title"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Staðsetning"
                    id="location"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Málsnúmer"
                    id="case-number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Þátttakendur"
                    id="members"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </ItemGrid>
                <ItemGrid xs={12} sm={12} md={4}>
                  <div className={props.classes.datePicker}>
                    <TextField
                      id="date"
                      label="Dagsetning"
                      type="date"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </ItemGrid>
              </Grid>
              <Grid container>
                <ItemGrid xs={12} sm={12} md={12}>
                  <h3><Small>Samantekt</Small></h3>
                  <ReactQuill

                  />
                </ItemGrid>
              </Grid>
            </div>
          }
          footer={<Button color="info" onClick={props.addMeetingNote}> <SaveIcon className={props.classes.icon} />Vista</Button>}
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Fundarsaga"
          cardSubtitle="Taflan sýnir síðustu færslur"
          content={
            <EnhancedTable
              tableHeaderColor="blue"
              tableHead={["Dagsetning", "Titill", "Málsnúmer", "Staðsetning", "Þátttakendur", "Samantekt", "Aðgerðir"]}
              tableData={props.data}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

MeetingNotes = connect(
  state => ({
    data: state.meetingNotesReducer.meetingNotes.data
  }), { addMeetingNote }
)(MeetingNotes)

export default withStyles(style)(MeetingNotes);
