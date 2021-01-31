import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/users-reduser";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersAjaxContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(response => {
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				})
		}
		console.log(this.props);
	}

	componentDidUpdate = () => {
		console.log(this.props);
	}

	onPageChange = (page) => {
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	}

	render() {
		return <Users
			totalCount={this.props.totalCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChange={this.onPageChange}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			users={this.props.users}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.users.users,
		totalCount: state.users.totalCount,
		currentPage: state.users.currentPage,
		pageSize: state.users.pageSize,
	}
}

let mapDispatchToProps = (dispatch) => {

	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageAC(page));
		},
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAjaxContainer);

export default UsersContainer;