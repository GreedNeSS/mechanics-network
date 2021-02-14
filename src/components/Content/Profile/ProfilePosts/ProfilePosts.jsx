import { clearFields } from "redux-form";
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

	return (
		<div>
			<ProfilePostForm onSubmit={props.sendPost} />
			<div>
				{posts}
			</div>
		</div>
	)
}

export default ProfilePosts;