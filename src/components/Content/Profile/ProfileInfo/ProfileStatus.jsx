import React, { useEffect, useState } from "react";
import css from "./ProfileInfo.module.css";


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
			<span className={css.title}>Статус: {props.status}</span>
		)
	}

	return (
		<div>
			{
				isEdit
					? <div >
						<span className={css.title}>Мой статус: </span>
						<input autoFocus type="text"
							onBlur={deactivateEdit}
							value={newTextStatus}
							onChange={changeStatus}
							onKeyPress={setStatus}
						/>
					</div>
					: <span onDoubleClick={activateEdit} className={css.title}>
						Мой статус: {props.status}
					</span>
			}
		</div>
	)

}

export default ProfileStatus;