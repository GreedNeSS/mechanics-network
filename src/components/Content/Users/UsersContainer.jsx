import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowingProgress } from "../../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import Preloader from "../../commons/Preloader";
import { usersAPI } from "../../../API/API";



class UsersAjaxContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true);
			usersAPI.getUsersPage(this.props.currentPage, this.props.pageSize)
				.then(response => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.items);
					this.props.setTotalUsersCount(response.totalCount);
				})
		}
	}

	onPageChange = (page) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(page);
		usersAPI.getUsersPage(page, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.items);
				this.props.setTotalUsersCount(response.totalCount);
			})
	}

	render() {
		return (
			<>
				{this.props.isFetching ?
					<Preloader /> :
					null
				}
				<Users
					totalCount={this.props.totalCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChange={this.onPageChange}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					users={this.props.users}
					isFollowingProgress={this.props.isFollowingProgress}
					toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.users.users,
		totalCount: state.users.totalCount,
		currentPage: state.users.currentPage,
		pageSize: state.users.pageSize,
		isFetching: state.users.isFetching,
		isFollowingProgress: state.users.isFollowingProgress,
	}
}


const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	toggleIsFetching,
	toggleIsFollowingProgress,
})(UsersAjaxContainer);

export default UsersContainer;