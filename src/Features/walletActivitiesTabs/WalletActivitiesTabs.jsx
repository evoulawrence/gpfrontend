import "./walletActivitiesTabs.css";
import WalletChart from "../../components/walletCharts/WalletChart";
import { userData } from "../../dummyData";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useState } from 'react';
import WalletTransactions from "../../tables/walletTransactions/WalletTransactions";

export default function WalletActivitiesTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Activity" value="1"  className="walletActivitiesTabsLabel" />
            <Tab label="Transactions" value="2"  className="walletActivitiesTabsLabel" />
            <Tab label="Invoices" value="3"  className="walletActivitiesTabsLabel" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <WalletChart data={userData} title="Activity" grid dataKey="Total Transaction" />
        </TabPanel>
        <TabPanel value="2">
            <WalletTransactions />
        </TabPanel>
        <TabPanel value="3">No invoices available</TabPanel>
      </TabContext>
    </Box>
  );
}