import "./walletChart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {TrendingDownSharp, ArrowDropDownSharp, TrendingUpSharp, BarChartSharp} from '@mui/icons-material';

export default function WalletChart({title, data, dataKey, grid}) {
  return (
    <div className="walletChart">
      <h4 className="chartSubTitle">Month <ArrowDropDownSharp className="chartSubTitleArrow" /></h4>
      
      <div className="wallettransactionDetails">
        <div className="wallettotalTransactions">
            <div className="wallettransactionIconWrapper">
                <BarChartSharp />
            </div>
            <div className="wallettransactionDetailsWrapper">
                <h4 className="wallettransactionHeading">Total Transactions</h4>
                <h3 className="wallettransactionAmount">$88,600.00</h3>
            </div>
        </div>
        <div className="wallettotalTransactions">
            <div className="wallettransactionIconWrapper">
                <TrendingDownSharp />
            </div>
            <div className="wallettransactionDetailsWrapper">
                <h4 className="wallettransactionHeading">Pay-In</h4>
                <h3 className="wallettransactionAmount">$4,600.00</h3>
            </div>
        </div>
        <div className="wallettotalTransactions">
            <div className="wallettransactionIconWrapper">
                <TrendingUpSharp />
            </div>
            <div className="wallettransactionDetailsWrapper">
                <h4 className="wallettransactionHeading">Pay-Out</h4>
                <h3 className="wallettransactionAmount">$72,600.00</h3>
            </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
          <LineChart data={data}>
              <XAxis dataKey="name" stroke="#555"/>
              <Line type="monotone" dataKey={dataKey} stroke="#555"/>
              <Tooltip />
              {grid && <CartesianGrid stroke="#eee" strokeDasharray="10 10" />}
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
