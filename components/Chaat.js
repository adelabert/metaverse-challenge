import { useRef } from "react";
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

const MINS_DURATION = 15;

function Chaat() {
	const { user } = useMoralis();
	const endOfMessagesRef = useRef(null);

	// case sensitive
	// SELECT * FROM Messages WHERE createdAt >= last 15 mins ORDERBY createdAt asc
	// query
	// 	.ascending("createdAt")
	// 	.greaterThan("createdAt", new Date(Date.now() - 100 * 60 * MINS_DURATION)),
	const { data, isLoading, error } = useMoralisQuery(
		"Messages",
		(query) => query.ascending("createdAt"),
		[],
		{
			live: true, // realtime listener
		}
	);

	return (
		<div className="w-full h-3/4 overflow-y-scroll">
			<div className="container mx-auto px-4 ">
				<div className="mx-auto w-28">
					<ByMoralis
						variant="dark"
						style={{
							width: "100%",
						}}
					/>
				</div>
				<div className="space-y-10 p-4">
					{data.map((msg) => (
						<Message key={msg.id} message={msg} />
					))}
				</div>
				<div className="flex justify-center">
					<SendMessage endOfMessagesRef={endOfMessagesRef} />
				</div>
				<div ref={endOfMessagesRef}></div>
			</div>
		</div>
	);
}

export default Chaat;
