import React from "react";

class Modal extends React.Component {
  render() {
    return (
        <div className="registration-modal">
        	<div className="registration-wrapper">
				<button onClick={this.props.closeModal}>X</button>
				<h3>Register</h3>
				<p>Thank you for your interest in Circle Conference</p>
				<form id="circle-registration-form">
        	    	<div>
						<input type="text" className="inputText" name="full-name" required />
						<span className="floating-label">Full Name</span>
	        	    </div>
	        	    <div>
						<input type="text" className="inputText" name="email" required />
						<span className="floating-label">Email</span>
        	    	</div>
					<div>
						<select name="source">
							<option disabled selected value className="default">How did you hear about us?</option>
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
						</select>
        	    	</div>
        	  	</form>
				<button type="submit" form="circle-registration-form" value="Submit" className="submit-button">Submit</button>
        	</div>
        </div>
    );
  }
}

class RegistrationModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    toggleMenu() {
        this.setState({
            showModal: !this.state.showModal
        });
        if ( this.state.showModal === false ){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }

    render(props) {
        return (
            <div className="hero-link-register-wrapper">
                <a
                    onClick={this.toggleMenu.bind(this)}
                    className="hero-link hero-link-register"
                >
                Register
                </a>
                {this.state.showModal ? 
                    <Modal closeModal={this.toggleMenu.bind(this)} />
                    : null
                }
            </div>
        );
    }
}

export default RegistrationModal;
