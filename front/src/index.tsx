import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import './theme/index.css';

import App from './app/App';
import Login from './pages/Login';

const router = document.getElementById('root');
render(
	<BrowserRouter>
		<React.StrictMode>
			<ChakraProvider theme={theme} resetCSS>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</ChakraProvider>
		</React.StrictMode>,
	</BrowserRouter>,
	router,
);
