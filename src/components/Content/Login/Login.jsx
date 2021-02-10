import LoginForm from "./LoginForm"


const Login = (props) => {
	const showLoginData = (data) => {
		console.log(data);
	}

	return (
		<div>
			<h1>LOGIN!</h1>
			<LoginForm onSubmit={showLoginData} />
		</div>
	)
}


export default Login;