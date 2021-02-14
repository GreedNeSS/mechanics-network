import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import Messages from "./Messages";
import { addMessage, sendMessage } from "../../../redux/messages-reducer";


const mapStateToProps = (state) => {
	return {
		dialogs: state.messages.dialogs,
		messageItems: state.messages.messageItems,
	};
}

export default compose(
	connect(mapStateToProps, { sendMessage }),
	withAuthRedirect
)(Messages)