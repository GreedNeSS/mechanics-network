import ProfileStatus from "./ProfileStatus";
import React, { useState } from "react";
import UploadButtons from "../../../commons/CustomUploadButton";
import css from "./ProfileInfo.module.css";
import { ButtonOnClick } from "../../../commons/CustomButton";
import ProfileEdit from "./ProfileEdit";
import userIcon from "../../../../img/user icon.png";


const ProfileInfo = React.memo((props) => {
	const uploadPhoto = (e) => {
		props.uploadAvatar(e.target.files[0]);
	}
	const [isEdit, setIsEdit] = useState(false);

	if (isEdit) {
		return <ProfileEdit
			setIsEdit={setIsEdit}
			editProfile={props.editProfile}
		/>
	}

	return (
		<div>
			<div>
				<img src={props.profile.photos.large || userIcon} alt="" />
				{props.userId ? '' : <UploadButtons
					onChange={uploadPhoto}
					buttonName='Загрузить Аватар'
				/>}
			</div>
			<div>
				<span className={css.title}>Полное имя: </span>{props.profile.fullName}
			</div>
			<div>
				<span className={css.title}>Обо мне: </span>{props.profile.aboutMe || '------'}
			</div>
			<div>
				<ProfileStatus
					userId={props.userId}
					status={props.profileStatus}
					updateStatus={props.updateStatus}
				/>
			</div>
			<div>
				<span className={css.title}>В поисках работы: </span>
				{props.profile.lookingForAJob ? 'Да' : 'Нет'}
			</div>
			<div>
				<span className={css.title}>
					Какую работу:
				</span>
				{props.profile.lookingForAJobDescription}
			</div>
			<div>
				{Object.entries(props.profile.contacts).map(([title, value]) => {
					return (
						<div key={title}><span className={css.title}>
							{title}:
							</span> {value || '------'}</div>
					)
				})}
			</div>
			{!props.userId && <ButtonOnClick
				buttonName='Редактировать профиль'
				onClick={() => setIsEdit(true)}
			/>}
		</div>
	)
})

export default ProfileInfo;