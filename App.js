import React from 'react';

import store from './src/redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import Main from './src/screens/Main';
import { ToastProvider } from 'react-native-toast-notifications'


const App = () => {
	return (
	<ReduxProvider store={store}>
	    <ToastProvider>
		<Main />
		</ToastProvider>
	</ReduxProvider>
	);
};

export default App;
