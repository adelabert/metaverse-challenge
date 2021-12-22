import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
	const { user, Moralis } = useMoralis();
	const [message, setMessage] = useState("");
	const sendMsg = (e) => {
		e.preventDefault();
		if (!message) return;

		// Moralis.SendMessage()
		const Messages = Moralis.Object.extend("Messages");
		const messages = new Messages();

		messages
			.save({
				message: message,
				username: user.getUsername(),
				ethAddress: user.get("ethAddress"),
			})
			.then(
				(message) => {},
				(error) => {
					console.log(error.message);
				}
			);

		endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        
		setMessage("");
	};

	return (
		<form className="flex fixed bottom-10 w-11/12 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full ">
			<input
				type="text"
				className="flex-grow outline-none bg-transparent text-white placeholder-gray-500"
				placeholder={`Enter a Message ${user.getUsername()}...`}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button className="font-bold text-red-500" onClick={sendMsg}>
				Send
			</button>
		</form>
	);
}

export default SendMessage;
