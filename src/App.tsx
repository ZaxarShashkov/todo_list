import React from 'react';
import Form from './component/Form/Form';

import './styles/App.scss';
import Table from './component/Table/Table';

function App() {
	return (
		<div className='App'>
			<div className='App__container'>
				<Form />
				<Table />
			</div>
		</div>
	);
}

export default App;
