import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../API/API";
import userIcon from "../../../img/user icon.png";
import css from "./Users.module.css";


const Users = (props) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	let firstPage = props.currentPage - 5 <= 0 ? 1 : props.currentPage - 5;
	let endPage = props.currentPage + 5 >= pagesCount ? pagesCount : props.currentPage + 5;

	for (let i = firstPage; i <= endPage; i++) {
		pages.push(i);
	}

	return (
		<div className={css.wraper} >
			<div className={css.pageNumbers} >
				{
					pages.map((page) => {
						return (
							<span
								key={page}
								className={props.currentPage === page && css.currentPage}
								onClick={() => props.onPageChange(page)}> {page} </span>
						)
					})
				}
			</div>
			<div className={css.wraperUsers} >
				{props.users.map((u) => {
					return (
						<div key={u.id} className={css.wraperUser} >
							<NavLink to={'/profile/' + u.id}>
								<div className={css.wraperImage} >
									<img className={css.avatar} src={u.photos.small != null ?
										u.photos.small :
										userIcon
									} alt="Аватар" />
								</div>
							</NavLink>
							<div className={css.usersInfo} >
								<div className={css.item}>
									Имя: {u.name}
								</div>
								<div className={css.item}>
									Статус: {u.status}
								</div>
								<div className={css.item}>
									{u.followed ?
										<button onClick={() => {
											usersAPI.unFollowUser(u.id)
												.then(response => {
													if (response.resultCode === 0) {
														props.unfollow(u.id)
													}
												})
										}
										}>
											UNFOLLOW
											</button> :
										<button onClick={() => {
											usersAPI.followUser(u.id)
												.then(response => {
													if (response.resultCode === 0) {
														props.follow(u.id);
													}
												})
										}}>
											FOLLOW
											</button>
									}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Users;