import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 :root {
	--primary: #645cff;
	--mainBorder: 1px solid red;
	--white: #fff;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background-color: #999;
}   
`;

export default GlobalStyles;
