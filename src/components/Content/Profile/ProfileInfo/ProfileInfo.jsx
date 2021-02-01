const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img src={props.profile.photos.large} alt="" />
			</div>
			<div>
				Полное имя: {props.profile.fullName}
			</div>
			<div>
				О Себе: {props.profile.aboutMe}
			</div>
			<div>
				Контакты:
				facebook: {props.profile.contacts.facebook},
				vk: {props.profile.contacts.vk},
				twitter: {props.profile.contacts.twitter},
				instagram: {props.profile.contacts.instagram},
				github: {props.profile.contacts.github}
			</div>
		</div>
	)
}

export default ProfileInfo;