import { usersAPI } from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsersPage = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	usersAPI.getUsersPage(currentPage, pageSize)
		.then(response => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(response.items));
			dispatch(setTotalUsersCount(response.totalCount));
		})
}

export const setUnfollow = (id) => (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	usersAPI.unFollowUser(id)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(unfollow(id));
				dispatch(toggleIsFollowingProgress(false, id));
			}
		})
}
export const setFollow = (id) => (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	usersAPI.followUser(id)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(follow(id));
				dispatch(toggleIsFollowingProgress(false, id));
			}
		})
}

let initialState = {
	users: [],
	totalCount: 0,
	currentPage: 1,
	pageSize: 10,
	isFetching: false,
	isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalCount: action.totalCount,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				isFollowingProgress: action.isFetching
					? [...state.isFollowingProgress, action.userId]
					: state.isFollowingProgress.filter(id => id !== action.userId)
			}
		default:
			return state;
	}

}

export default usersReducer;

