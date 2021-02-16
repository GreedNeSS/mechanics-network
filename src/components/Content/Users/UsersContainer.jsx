import { connect } from "react-redux";
import { setFollow, setUnfollow, requestUsersPage } from "../../../redux/users-reducer";
import { getUsers, getTotalCount, getCurrentPage, getPageSize, getIsFollowingProgress } from "../../../redux/users-selectors";
import React from "react";
import Users from "./Users";
import Preloader from "../../commons/Preloader";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";


class UsersContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			this.props.requestUsersPage(this.props.currentPage, this.props.pageSize);
		}
	}

	onPageChange = (page) => {
		this.props.requestUsersPage(page, this.props.pageSize);
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
					setUnfollow={this.props.setUnfollow}
					setFollow={this.props.setFollow}
					users={this.props.users}
					isFollowingProgress={this.props.isFollowingProgress}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalCount: getTotalCount(state),
		currentPage: getCurrentPage(state),
		pageSize: getPageSize(state),
		isFollowingProgress: getIsFollowingProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, { setFollow, setUnfollow, requestUsersPage }),
	withAuthRedirect,
)(UsersContainer);
