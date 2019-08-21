import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
	BarChart,
	Bar
} from "recharts";

import cubejs from "@cubejs-client/core";
import numeral from "numeral";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

import Chart from "./Chart.js";

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
 apiUrl: process.env.REACT_APP_API_URL
});

console.log(process.env.REACT_APP_CUBEJS_TOKEN);


const numberFormatter = item => numeral(item).format("0,0");
const dateFormatter = item => moment(item).format("MMM YY");

const renderSingleValue = (resultSet, key) => (
	<h1 height={300}>{numberFormatter(resultSet.chartPivot()[0][key])}</h1>
);

class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col sm="4">
						<Chart
							cubejsApi={cubejsApi}
							title="Total Users"
							query={{ measures: ["User.count"] }}
							render={resultSet => renderSingleValue(resultSet, "User.count")}
						/>
					</Col>
					<Col sm="4">
						<Chart
							cubejsApi={cubejsApi}
							title="Total Orders"
							query={{ measures: ["Orders.count"] }}
							render={resultSet => renderSingleValue(resultSet, "Orders.count")}
						/>
					</Col>
					<Col sm="4">
						<Chart
							cubejsApi={cubejsApi}
							title="Open Orders"
							query={{
								measures: ["Orders.count"],
								filters: [
									{
										dimension: "Orders.status",
										operator: "equals",
										values: ["OPEN"]
									}
								]
							}}
							render={resultSet => renderSingleValue(resultSet, "Orders.count")}
						/>
					</Col>
				</Row>
				<br />
				<br />
				<Row>
					<Col sm="6">
						<Chart
							cubejsApi={cubejsApi}
							title="New Users Over Time"
							query={{
								measures: ["User.count"],
								timeDimensions: [
									{
										dimension: "User.dthrcreate",
										dateRange: ["2019-01-01", "2019-12-31"],
										granularity: "month"
									}
								]
							}}
							render={resultSet => (
								<ResponsiveContainer width="100%" height={300}>
									<AreaChart data={resultSet.chartPivot()}>
										<XAxis dataKey="category" tickFormatter={dateFormatter} />
										<YAxis tickFormatter={numberFormatter} />
										<Tooltip labelFormatter={dateFormatter} />
										<Area
											type="monotone"
											dataKey="User.count"
											name="Users"
											stroke="rgb(106, 110, 229)"
											fill="rgba(106, 110, 229, .16)"
										/>
									</AreaChart>
								</ResponsiveContainer>
							)}
						/>
					</Col>
					<Col sm="6">
						<Chart
							cubejsApi={cubejsApi}
							title="Orders by Status Over time"
							query={{
								measures: ["Orders.count"],
								dimensions: ["Orders.status"],
								timeDimensions: [
									{
										dimension: "Orders.dthrcreate",
										dateRange: ["2019-08-01", "2019-8-30"],
										granularity: "day"
									}
								]
							}}
							render={resultSet => {
								return (
									<ResponsiveContainer width="100%" height={300}>
										<BarChart data={resultSet.chartPivot()}>
											<XAxis tickFormatter={dateFormatter} dataKey="x" />
											<YAxis tickFormatter={numberFormatter} />
											<Bar
												stackId="a"
												dataKey="OPEN, Orders.count"
												name="Open"
												fill="#7DB3FF"
											/>
											<Bar
												stackId="a"
												dataKey="DOING, Orders.count"
												name="Doing"
												fill="#49457B"
											/>
											<Bar
												stackId="a"
												dataKey="CLOSED, Orders.count"
												name="Closed"
												fill="#FF7C78"
											/>
											<Legend />
											<Tooltip />
										</BarChart>
									</ResponsiveContainer>
								);
							}}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
