import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {MdArrowForward} from 'react-icons/lib/md';

const SubmitButton = (props) => {
		
	return (
		<div className={'submitButton'}>
			<button className={props.type=='delete' ? 'submitSignIn' : 'submitSignUp'} ><MdArrowForward/></button>
		</div>
	);
} 

SubmitButton.PropTypes = {
	type: PropTypes.String
};

export default SubmitButton;