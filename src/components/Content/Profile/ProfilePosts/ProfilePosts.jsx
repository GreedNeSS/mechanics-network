import ProfilePostForm from "./ProfilePostForm/ProfilePostForm";

const ProfilePosts = (props) => {

	let posts = props.posts.map((post) => {
		return (
			<div key={post.id} >
				{post.text}
			</div>
		)
	});
	posts.reverse();

	const addPost = data => {
		props.addPost(data.newPostText)
	}

	return (
		<div>
			<ProfilePostForm onSubmit={addPost} />
			<div>
				{posts}
			</div>
		</div>
	)
}

export default ProfilePosts;