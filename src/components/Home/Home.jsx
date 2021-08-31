import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Route, useRouteMatch } from 'react-router-dom'
import Charges from './Charges'
import Incomes from './Incomes'


const Links = styled.div`
	display: flex;
	margin-top: 20px;
`

const AdditionalLink = styled(NavLink)`
	display: inline-block;
	position: relative;
	width: 200px;
	text-decoration: none;
	color: '#000000';
	text-align: center;
	padding: 5px;

	:hover {
		color: #26b8ff;
		&:after {
			width: 180px;
			left: 10px;
		}
	}
	&.active {
		color: #26b8ff;
		&:after {
			width: 180px;
			left: 10px;
		}
	}
	&:after {
		content: '';
		position: absolute;
		top: 30px;
		left: 100px;
		width: 0px;
		height: 1px;
		background-color: #26b8ff;
		transition: all .4s linear;

	}
`;

function Home() {
	const match = useRouteMatch()
	const [display, setDisplay] = useState(false);

	return (
		<>
			<Links>
				<AdditionalLink to={`${match.url}/charges`}>Charges</AdditionalLink>
				<AdditionalLink to={`${match.url}/incomes`}>Incomes</AdditionalLink>
			</Links>

			<Route path={`${match.path}/charges`}>
				<Charges display={display} setDisplay={setDisplay} />
			</Route>
			<Route path={`${match.path}/incomes`}>
				<Incomes display={display} setDisplay={setDisplay} />
			</Route>
		</>
	)
}

export default Home
