import css from "./ProfilePosts.module.css";

const ProfilePosts = (props) => {

	let posts = props.posts.map((post) => {
		return (
			<div key={post.id} >
				{post.text}
			</div>
		)
	});
	posts.reverse();

	const writePost = (event) => {
		console.log(event.target.value);
		props.writePost(event.target.value);
	}

	return (
		<div>
			<div>
				<textarea rows='1'
					// onKeyPress={handleKeyPress}
					onChange={writePost}
					value={props.newTextPost}
					className={css.textarea} />
				<button className={css.button} onClick={props.addPost}>Отправить</button>
			</div>
			<div>
				{posts}
			</div>
		</div>
	)
}

export default ProfilePosts;