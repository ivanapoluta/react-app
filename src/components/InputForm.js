import React from "react";

import { FiSend } from "react-icons/fi";


class InputForm extends React.Component {

    state = {
        text: "",
        characterLimit: 160,
    }

    onChange(event) {
        this.setState({ text: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.state.text === "") {
            alert("It's not possible to send snappy message without writing it first.");
        } else {
            return (
                this.setState({ text: "" }),
                this.props.onSendMessage(this.state.text)
            );
        }
    }


    render() {

        return (

            <form onSubmit={(event) => this.onSubmit(event)} className="form-container">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.onChange(event)}
                    autoFocus
                    maxLength={160}
                    placeholder="Short message from you goes here:"
                    className="input-text"
                />

                <div className="input-counter">
                    {this.state.characterLimit - this.state.text.length}
                </div>

                <button
                    className="input-submit"
                    title="Send me">
                    <FiSend />
                </button>

            </form >

        )
    }

}

export default InputForm;
