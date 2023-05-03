// import { Button, HipsterButton } from './components/Button';
// import Wrapper from './components/ComplexTitle';
// import BasicTitle from './components/BasicTitle';
// import ProductCard from './components/ProductCard';
import { Button } from './components/Button';
import Spinner from './components/Spinner';
import GlobalStyles from './global-styles';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const BaseTheme = {
	color: '#222',
	background: '#fff',
};

const DarkTheme = {
	color: '#fff',
	background: '#222',
};

const Container = styled.div`
	padding: 2rem;
	color: ${(props) => props.theme.color};
	background: ${(props) => props.theme.background};
`;

function App() {
	const [baseTheme, setBaseTheme] = useState(true);

	const toggleTheme = () => {
		setBaseTheme(!baseTheme);
	};

	return (
		<ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
			<GlobalStyles />
			<Container>
				{/* <BasicTitle special>styled components</BasicTitle>
			<Wrapper title='more complex title' />
		
			<HipsterButton>HipsterButton </HipsterButton> 
			<ProductCard />*/}
				<Button onClick={toggleTheme}>toggle me</Button>
			</Container>
			<Spinner />
		</ThemeProvider>
	);
}

export default App;
