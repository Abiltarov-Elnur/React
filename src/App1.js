import React, { useState } from "react";
import TempInp from "./TempInp"; 
import Verdict from "./Verdict"; 
//import './style.css';
import { styles } from "./styles";		
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
`;

const Input = styled.input`
	margin: 5px;
	font-size: 18px;
`;

function App() {
	return (
		<Container>
			<Input />
			<Input placeholder="name" type="text" />
			<Input type="password" />
		</Container>
	);
}

export default App