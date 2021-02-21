import ProfilePostForm from "./ProfilePostForm/ProfilePostForm";
import React from "react";

const ProfilePosts = React.memo((props) => {
	let posts = props.posts.map((post) => {
		return (
			<div key={post.id} >
				{post.text}
			</div>
		)
	});
	posts.reverse();

	return (
		<div>
			<ProfilePostForm onSubmit={props.sendPost} />
			<div>
				{posts}
			</div>
		</div>
	)
})

export default ProfilePosts;