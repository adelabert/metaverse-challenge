import { useMoralis } from "react-moralis";

function ChangeUsername() {
	const { setUserData, isUserUpdating, userError, user } = useMoralis();
	const onChangeUsername = () => {
		const username = prompt("Enter your new username");

		if (!username) {
			return;
		}

		setUserData({
			username: username,
		});
	};
	return (
		<button className="cursor-pointer" onClick={onChangeUsername}>
			Change Username
		</button>
	);
}

export default ChangeUsername;
