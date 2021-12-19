import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avatar({ username, logoutOnPress }) {
	const { user, logout } = useMoralis();
	const avaterImg = `https://avatars.dicebear.com/api.pixel-art/${
		username || user.get("username")
	}.svg`;
	return (
		<Image
			src={avaterImg}
			layout="fill"
			objectFit="cover"
			className="rounded-full bg-black cursor-pointer"
			onClick={() => logoutOnPress && logout()}
		/>
	);
}

export default Avatar;
