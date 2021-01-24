


const Users = (props) => {

	return (
		<div >
			{	props.users.map((u) => {
				return (
					<div key={u.id}>
						<div>
							<img src={u.avatarUrl} alt="Аватар" />
						</div>
						<div>
							{u.name}
						</div>
						<div>
							Проживает: {u.location.country} {u.location.city}
						</div>
						<div>
							{u.followed ?
								<button onClick={() => props.unfollow(u.id)}>
									UNFOLLOW
						</button> :
								<button onClick={() => props.follow(u.id)}>
									FOLLOW
						</button>
							}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Users;