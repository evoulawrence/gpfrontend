import "./walletTabs.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useState } from 'react';

import USFlag from "../../img/us.jpg";
import EUFlag from "../../img/eu.png";
import UKFlag from "../../img/uk.jpg"

export default function WalletTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="walletTabs">
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active (3)" value="1" className="walletTabsLabel" />
            <Tab label="Inactive (2)" value="2"  className="walletTabsLabel" />
            <Tab label="Closed (0)" value="3"  className="walletTabsLabel" />
          </TabList>
        </Box>
        <TabPanel value="1"  className="walletListsTabOne">
            <div className="walletLists highlighted">
                <div className="walletNameWrapper">
                    <img src={EUFlag} alt="" className="walletAvatar" />
                    <div className="walletName">
                        <h3 className="walletNameTitle">EUR Wallet</h3>
                        <h3 className="walletNameCurrency">EUR</h3>
                    </div>
                </div>
                <div className="walletTotalBalance">
                    <h3 className="walletTotalAmount">€2,000,000.05</h3>
                    <h3 className="walletTotalAmountDefault">Default</h3>
                </div>
            </div>
            <div className="walletLists">
                <div className="walletNameWrapper">
                    <img src={USFlag} alt="" className="walletAvatar" />
                    <div className="walletName">
                        <h3 className="walletNameTitle">Personal Account</h3>
                        <h3 className="walletNameCurrency">USD</h3>
                    </div>
                </div>
                <div className="walletTotalBalance">
                    <h3 className="walletTotalAmount">$2,212,000.00</h3>
                </div>
            </div>
            <div className="walletLists">
                <div className="walletNameWrapper">
                    <img src={UKFlag} alt="" className="walletAvatar" />
                    <div className="walletName">
                        <h3 className="walletNameTitle">School Savings</h3>
                        <h3 className="walletNameCurrency">GBP</h3>
                    </div>
                </div>
                <div className="walletTotalBalance">
                    <h3 className="walletTotalAmount">£2,000,000.00</h3>
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2" className="walletListsTabOne">
            <div className="walletLists">
                <div className="walletNameWrapper">
                    <img src={EUFlag} alt="" className="walletAvatar" />
                    <div className="walletName">
                        <h3 className="walletNameTitle">Gas Wallet</h3>
                        <h3 className="walletNameCurrency">EUR</h3>
                    </div>
                </div>
                <div className="walletTotalBalance">
                    <h3 className="walletTotalAmount">€0.00</h3>
                </div>
            </div>
            <div className="walletLists">
                <div className="walletNameWrapper">
                    <img src={USFlag} alt="" className="walletAvatar" />
                    <div className="walletName">
                        <h3 className="walletNameTitle">House Rent Account</h3>
                        <h3 className="walletNameCurrency">USD</h3>
                    </div>
                </div>
                <div className="walletTotalBalance">
                    <h3 className="walletTotalAmount">$2,000.00</h3>
                </div>
            </div>
            
        </TabPanel>
        <TabPanel value="3" className="walletListsTabOne">There's no closed account at the moment!</TabPanel>
      </TabContext>
    </Box>
  );
}