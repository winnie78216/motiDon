import React from "react";
import { Grid, InputLabel, withStyles, TextField } from "material-ui";
import SaveIcon from 'material-ui-icons/Save';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import axios from 'axios';
import { Table,Button, CustomInput, RegularCard, EnhancedTable, ItemGrid, Small, CampaignCard } from "components";

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

class TransactionHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          address: '',
          transactions: [],
        };
      }

componentWillMount = () => {
    axios.get('https://blockchain.info/address/1BF8SHKnT8ZysYNrj5toeu6DsuGE5XDcCR?format=json&offset=0').then(res => {
        const data = res.data
        const serviceProviders = ['Hospital (Sahlgrenska UH)', 'Education (REDI)', 'Consultancy (KPMG)', 'Sanitation (Water & Sanitation)', 'Food (McDonalds)']
        const transactions = []
        data.txs.map(entry => {
            entry.out.map(entryOut => {
                transactions.push([entryOut.addr, serviceProviders[Math.floor(Math.random()*serviceProviders.length)],  "<span style='color:red'>-" + (entryOut.value/100000000).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.') + "</span>", 'BTC'])
            })
        })
        this.setState({address: data.address, transactions: transactions})
    })
}

render() {

  return (
    <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="My donations"
          cardSubtitle={"Id: 1KbaVuRfFJjRCnsBSzgrkhxTMfoLmp2X9j" }
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["Id", "Receiver", "Amount", ""]}
              tableData={this.state.transactions}
            />
          }
        />
        </ItemGrid> 
    </Grid>
  );
}
}
export default withStyles(style)(TransactionHistory);
