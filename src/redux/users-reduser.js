const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });


let initialState = {
	users: [
		{
			id: 1, avatarUrl: 'https://i08.kanobu.ru/r/b1d9c97cf1588b30aadfcee455e78e03/800x450/u.kanobu.ru/articles/pics/8c6c3a45-af01-48f9-ab1d-5f3f66e21d46.png',
			followed: true, name: 'Ruslan', location: { city: 'tula', country: 'Russia' }
		},
		{
			id: 2, avatarUrl: 'https://www.film.ru/sites/default/files/people/1579767-1215467.jpg',
			followed: false, name: 'Roman', location: { city: 'tula', country: 'Russia' }
		},
		{
			id: 3, avatarUrl: 'https://muz-tv.ru/storage/images/news/crops/news-page/rkrGMbFml430TttkTBwCdsXbHGcdb3NEhJm2cvMN.jpg',
			followed: true, name: 'Igor', location: { city: 'Novomoscovsk', country: 'Russia' }
		},
	]
};

const usersReduser = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				})

			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				})

			};
		}
		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}
		default:
			return state;
	}

}

export default usersReduser;

