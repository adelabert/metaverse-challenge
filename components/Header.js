import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
	const { user, logout } = useMoralis();

	return (
		<div className="w-full py-4 sticky">
			<div className="container mx-auto grid grid-cols-2 px-4">
				<div className="inline-flex space-x-4 items-center">
					<div className="relative w-8 h-8 ">
						<Avatar />
					</div>
					<div className="text-red text-bold">Welcome {user.getUsername()}!</div>
				</div>
				<div className="inline-flex space-x-4 items-center justify-end">
					<ChangeUsername />
					<button onClick={logout} className="bg-gray-200 px-4 py-2 rounded-md text-gray-500">
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
