import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Chaat from "../components/Chaat";

export default function Home() {
	const { isAuthenticated } = useMoralis();

	if (!isAuthenticated) return <Login />;

	return (
		<>
			<Head>
				<title>Metaverse wallet</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-full h-screen relative z-50">
				{/* header */}
				<Header />

				{/* message */}
				<Chaat />
			</div>
			<div className="w-full h-screen absolute top-0 left-0 z-0 pointer-events-none bg-orange-300">
				{/* canvas */}
			</div>
		</>
	);
}
