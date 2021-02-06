import { connect } from "react-redux";
import { setFollow, setUnfollow, getUsers } from "../../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import Preloader from "../../commons/Preloader";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";


class UsersContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			this.props.getUsers(this.props.currentPage, this.props.pageSize);
		}
	}

	onPageChange = (page) => {
		this.props.getUsers(page, this.props.pageSize);
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
		users: state.users.users,
		totalCount: state.users.totalCount,
		currentPage: state.users.currentPage,
		pageSize: state.users.pageSize,
		isFollowingProgress: state.users.isFollowingProgress,
	}
}

export default compose(
	connect(mapStateToProps, { setFollow, setUnfollow, getUsers }),
	withAuthRedirect,
)(UsersContainer);
