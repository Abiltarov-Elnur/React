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

const Button = styled.input`
	background-color: orange;
	font-size: 18px;
	margin: 5px;
`;

const MdButton = styled(Button)`
	color: white;
	background-color: green;
`;

function App() {
	return (
		<Container>
			<Button>btn0</Button>
			<MdButton>btn1</MdButton>
		</Container>
	);
}

export default App