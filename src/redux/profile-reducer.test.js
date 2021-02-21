import profileReducer, { addPost, setStatus } from "./profile-reducer";

let state = {
	profileId: null,
	profile: null,
	profileStatus: '',
	posts: [
		{
			id: 123,
			text: 'Hello World'
		},
		{
			id: 423,
			text: 'Im developer'
		},
		{
			id: 1243,
			text: 'Im Senior'
		},
	],
};

test('length of posts should be incremented', () => {
	// ! test data

	let action = addPost('hello world');

	// ! action

	let newState = profileReducer(state, action);

	// ! expectation

	expect(newState.posts.length).toBe(4);

});

test('message of new post should by "hello world"', () => {
	// ! test data

	let action = addPost('hello world');

	// ! action

	let newState = profileReducer(state, action);

	// ! expectation

	expect(newState.posts[3].text).toBe('hello world');

});

test('message of new status should be "Senior"', () => {
	// ! test data

	let action = setStatus('Senior');

	// ! action

	let newState = profileReducer(state, action);

	// ! expectation

	expect(newState.profileStatus).toBe('Senior');

});