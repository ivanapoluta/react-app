import React from "react";

class MessagesList extends React.Component {

    static messagesEnd = React.createRef();

    functionBottomScroll = () => {
        if (this.messagesEnd !== "" && this.messagesEnd !== undefined) {
            this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
    }

    componentDidMount() {
        this.functionBottomScroll();
    }

    componentDidUpdate() {
        this.functionBottomScroll();
    }


    renderMessage(message, index) {

        const { member, text } = message;
        const { currentMember } = this.props;

        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";

        return (

            <li key={index} className={className}>
                <span
                    className="avatar"
                    style={{ backgroundColor: member.clientData.color }}
                />

                <div className="Message-content">

                    <div className="username">
                        {member.clientData.username}
                    </div>
                    <div className="text" style={{ backgroundColor: member.clientData.color }}>
                        {text}
                    </div>
                    <div ref={(element) => { this.messagesEnd = element; }}></div>

                </div>
            </li>

        )
    }


    
    render() {

        const { messages } = this.props;

        return (
            <div className="Messages-list">
                <ul>
                    {messages.map((m, index) => this.renderMessage(m, index))}
                </ul>
            </div>
        )
    }

}

export default MessagesList;
