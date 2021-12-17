import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
	const { authenticate } = useMoralis();

	return (
		<div className="bg-black relative text-white">
			<div className="absolute z-10 flex flex-col items-center justify-center w-full h-full space-y-4">
				<Image src="/images/logo.png" width={150} height={200} />

				<button
					className="bg-black rounded-lg p-5 font-bold text-orange-600"
					onClick={authenticate}
				>
					Login
				</button>
			</div>
			<div className="w-full h-screen">
				<Image src="https://picsum.photos/1024/768" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}

export default Login;
