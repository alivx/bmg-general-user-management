import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import config from '../config'
import '../App.css';
import { Motion, spring } from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';

class SignExpanded extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false
		};
	}

	componentDidMount() {
		this.setState({ flexState: !this.state.flexState });
	}


	isFinished = () => {
		this.setState({ animIsFinished: true });
	}

	store = (key, value) => {
		console.log(key)
		this.setState({ [key]: value })
	}

	sendToApi = (e) => {
		e.preventDefault()
		console.log(this.state)
		let data = {}
		if (this.props.type === 'delete') {
			data.userId = this.state.userId
		} else {
			data.userName = this.state.username
			data.fullName = this.state.fullName
			data.email = this.state.email
			data.password = this.state.password
			data.birthday = this.state.birthday
			data.profilePhoto = this.state.profilePhoto

		}
		const method = this.props.type === 'delete' ? 'delete' : 'post'
		axios({
			method,
			url: config.apiUrl,
			data
		}).then(res => {
			console.log(res);
		}).catch(err => {
			console.log('somthing went wrong')
		})
	}

	render() {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
				{({ flexVal }) =>
					<div className={this.props.type == 'delete' ? 'signInExpanded' : 'signUpExpanded'} style={{
						flexGrow: `${flexVal}`
					}}>
						<Motion style={{
							opacity: spring(this.state.flexState ? 1 : 0, { stiffness: 300, damping: 17 }),
							y: spring(this.state.flexState ? 0 : 50, { stiffness: 100, damping: 17 })
						}} >
							{({ opacity, y }) =>
								<form className='logForm' style={{
									WebkitTransform: `translate3d(0, ${y}px, 0)`,
									transform: `translate3d(0, ${y}px, 0)`,
									opacity: `${opacity}`
								}} onSubmit={this.sendToApi}>
									<h2>{this.props.type == 'delete' ? 'Delete User' : 'Add User'}</h2>

									{this.props.type === 'delete' ?
										<Input
											id="userId"
											type="text"
											placeholder="userId"
											store={this.store}
										/>
										:
										<dev style={{ marginTop: '-25%' }}>
											<Input
												id="username"
												type="text"
												placeholder="User Name"
												store={this.store} />
											<Input
												id="fullName"
												type="text"
												placeholder="Full Name"
												store={this.store} />
											<Input
												id="email"
												type="text"
												placeholder="Email" 
												store={this.store}/>
											<Input
												id="password"
												type="password"
												placeholder="Password" 
												store={this.store} />
											<Input
												id="birthday"
												type="text"
												placeholder="Birthday"
												store={this.store} />
											<Input
												id="profilePhoto"
												type="text"
												placeholder="Profile Photo"
												store={this.store}
												 />
										</dev>
									}

									<SubmitButton type={this.props.type} onClick={this.sendToApi}></SubmitButton>
								</form>
							}
						</Motion>
					</div>
				}
			</Motion>
		);
	}

}

SignExpanded.PropTypes = {
	type: PropTypes.string
};

export default SignExpanded;