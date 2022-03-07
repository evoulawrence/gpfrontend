import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {TrendingDownSharp, ArrowDropDownSharp, TrendingUpSharp, BarChartSharp} from '@mui/icons-material';


export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <div className="chartHeader">
                <div className="chartHeaderLeft">
                    <h3 className="chartTitle">{title}</h3>
                    <h4 className="chartSubTitle">Month</h4>
                    <ArrowDropDownSharp className="chartSubTitleArrow" />
                </div>
                <div className="chartHeaderRight">
                    <h3 className="transactionHistory">View Transaction History</h3>
                </div>
            </div>
            <div className="transactionDetails">
                <div className="totalTransactions">
                    <div className="transactionIconWrapper">
                        <BarChartSharp />
                    </div>
                    <div className="transactionDetailsWrapper">
                        <h4 className="transactionHeading">Total Transactions</h4>
                        <h3 className="transactionAmount">$88,600.00</h3>
                    </div>
                </div>
                <div className="totalTransactions">
                    <div className="transactionIconWrapper">
                        <TrendingDownSharp />
                    </div>
                    <div className="transactionDetailsWrapper">
                        <h4 className="transactionHeading">Pay-In</h4>
                        <h3 className="transactionAmount">$4,600.00</h3>
                    </div>
                </div>
                <div className="totalTransactions">
                    <div className="transactionIconWrapper">
                        <TrendingUpSharp />
                    </div>
                    <div className="transactionDetailsWrapper">
                        <h4 className="transactionHeading">Pay-Out</h4>
                        <h3 className="transactionAmount">$72,600.00</h3>
                    </div>
                </div>
            </div>
            
            <ResponsiveContainer width="100%" aspect={4 / 1}>
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
