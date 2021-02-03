import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../../redux/users-reduser";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../commons/Preloader";



class UsersAjaxContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
				withCredentials: true,
			})
				.then(response => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				})
		}
	}

	onPageChange = (page) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
			withCredentials: true,
		})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
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
	}
}


const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setTotalUsersCount,
	setCurrentPage,
	toggleIsFetching,
})(UsersAjaxContainer);

export default UsersContainer;