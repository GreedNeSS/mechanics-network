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

export const requestUsersPage = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	const response = await usersAPI.getUsersPage(currentPage, pageSize)

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));

}

export const setUnfollow = (id) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	const response = await usersAPI.unFollowUser(id)

	if (response.resultCode === 0) {
		dispatch(unfollow(id));
		dispatch(toggleIsFollowingProgress(false, id));
	}

}
export const setFollow = (id) => async (dispatch) => {
	dispatch(toggleIsFollowingProgress(true, id));
	const response = await usersAPI.followUser(id)

	if (response.resultCode === 0) {
		dispatch(follow(id));
		dispatch(toggleIsFollowingProgress(false, id));
	}

}

let initialState = {
	users: [],
	totalCount: 0,
	currentPage: 1,
	pageSize: 10,
	isFetching: false,
	isFollowingProgress: [],
};

const dispatchFollowUnfollow = (usersArray, id, followed) => {
	return usersArray.map((u) => {
		if (u.id === id) {
			return { ...u, followed: followed };
		}
		return u;
	})
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: dispatchFollowUnfollow(state.users, action.userId, true)
			}
		case UNFOLLOW:
			return {
				...state,
				users: dispatchFollowUnfollow(state.users, action.userId, false)
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

