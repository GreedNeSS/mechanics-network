
export const getUsers = (state) => {
	return state.users.users;
}

export const getTotalCount = (state) => {
	return state.users.totalCount;
}

export const getCurrentPage = (state) => {
	return state.users.currentPage;
}

export const getPageSize = (state) => {
	return state.users.pageSize;
}

export const getIsFollowingProgress = (state) => {
	return state.users.isFollowingProgress;
}