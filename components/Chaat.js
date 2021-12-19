import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis";

function Chaat() {
	const { user } = useMoralis();
	return (
		<div className="w-full">
			<div className="container mx-auto  px-4 border-2 border-red-500">
				<div className="mx-auto w-28">
					<ByMoralis
						variant="dark"
						style={{
							width: "100%",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Chaat;
