import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {

	let [isEdit, toggleEditMod] = useState(false);
	let [newTextStatus, setNewStatus] = useState(props.status);

	useEffect(() => {
		setNewStatus(props.status);
	}, [props.status]);

	const activateEdit = () => {
		toggleEditMod(true);
	};

	const deactivateEdit = () => {
		toggleEditMod(false);
		setNewStatus(props.status);
	};

	const changeStatus = (event) => {
		setNewStatus(event.target.value);
	};

	const setStatus = (event) => {
		if (event.key === 'Enter') {
			props.updateStatus(newTextStatus);
			event.target.blur();
			event.preventDefault();
		}
	};

	if (props.userId) {
		return (
			<div>
				Мой статус: {props.status}
			</div>
		)
	}

	return (
		<div>
			{
				isEdit
					? <div >
						Мой статус: <input autoFocus type="text"
							onBlur={deactivateEdit}
							value={newTextStatus}
							onChange={changeStatus}
							onKeyPress={setStatus}
						/>
					</div>
					: <div onDoubleClick={activateEdit}>
						Мой статус: {props.status}
					</div>
			}
		</div>
	)

}

export default ProfileStatus;