import React, {useState} from 'react';
import './style.css';

const UsersFilter = (props) => {
	console.log(props);
	// const [value, setValue] = useState('')

	// const onSearchUsers = (e) => {
	// 	setValue(e.target.value);
	// 	props.searchUsers({
	// 		searchUsers: e.target.value
	// 	})
	// }


	return (
		<div className="search-container">
			<div>
				<input
					// eslint-disable-next-line no-undef
					// onChange={onSearchUsers}
					// value={value}
					placeholder="Введіть запит..."
				/>
			</div>
			<div>
				<span>Wooman: </span>
				<input type="checkbox" />
			</div>
			<div>
				<span>Man: </span>
				<input type="checkbox" />
			</div>
		</div>
	);
};

export default UsersFilter;
