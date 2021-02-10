import React from "react";

class ProfileStatus extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isEdit: false,
			newTextStatus: this.props.status,
		};
		this.activateEdit = this.activateEdit.bind(this);
		this.deactivateEdit = this.deactivateEdit.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
		this.setStatus = this.setStatus.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				newTextStatus: this.props.status,
			})
		}
	}

	activateEdit() {
		this.setState({
			isEdit: true
		})
	}

	deactivateEdit() {
		this.setState({
			isEdit: false,
			newTextStatus: this.props.status,
		})
	}

	changeStatus(e) {
		console.log(this);
		this.setState({
			newTextStatus: e.target.value,
		})
	}

	setStatus(event) {
		if (event.key === 'Enter') {
			this.props.updateStatus(this.state.newTextStatus);
			event.target.blur();
			event.preventDefault();
		}
	}

	render() {
		return (
			<div>
				{
					this.state.isEdit
						? <div >
							Мой статус: <input autoFocus type="text"
								onBlur={this.deactivateEdit}
								value={this.state.newTextStatus}
								onChange={this.changeStatus}
								onKeyPress={this.setStatus}
							/>
						</div>
						: <div onDoubleClick={this.activateEdit}>
							Мой статус: {this.props.status}
						</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;