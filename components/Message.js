import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
	const { user } = useMoralis();
	const isUserMsg = message.get("ethAddress") === user.get("ethAddress");
	// console.log(message);

	return (
		<div className={`flex items-end space-x-4 relative ${isUserMsg && "justify-end"}`}>
			<div className={`relative h-8 w-8 ${isUserMsg && "order-last ml-2"}`}>
				<Avatar username={message.get("username")} />
			</div>
			<div
				className={`flex  px-4 py-4 rounded-lg max-w-md ${
					isUserMsg ? "rounded-br-none bg-purple-500" : "rounded-bl-none bg-yellow-500"
				} `}
			>
				<p> {message.get("message")} </p>
			</div>
			<p className="absolute -bottom-5 text-xs">{message.get("username")}</p>
		</div>
	);
}

export default Message;
