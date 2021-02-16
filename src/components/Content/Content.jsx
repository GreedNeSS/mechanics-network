import css from "./Content.module.css";
import { Route, withRouter } from "react-router-dom";
import Main from "./Main/Main";
import React from "react";
import ArticlesContainer from "./Articles/ArticlesContainer";
import Contacts from "./Contacts/Contacts";
import Article from "./Article/Article";
import NewsContainer from "./News/NewsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializing } from "../../redux/content-reducer";
import Preloader from "../commons/Preloader";


class Content extends React.Component {

	componentDidMount() {
		this.props.initializing();
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader />
		}

		return (

			<div className={css.Content}>

				<Route component={Main} path='/' exact />
				<Route render={() => <ArticlesContainer />} path='/articles' />
				<Route render={() => <NewsContainer />} path='/news' exact />
				<Route component={Contacts} path='/contacts' />
				<Route component={Article} path='/news/*' />
				<Route render={() => <MessagesContainer />} path='/messages' />
				<Route render={() => <UsersContainer />} path='/users' />
				<Route render={() => <ProfileContainer />} path='/profile/:userId?' />
				<Route render={() => <Login />} path='/login' />

			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	isInitialized: state.content.isInitialized
})

export default compose(
	withRouter,                         //! Обязательно использовать если мы коннектим компоненту
	connect(mapStateToProps, { initializing })
)(Content);