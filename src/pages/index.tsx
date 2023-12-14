import React from "react";
import Head from "next/head";
import ClientOnly from "@components/ClientOnly";
import ImageApp from "@components/ImageApp";

export default function Home() {
	return (
		<>
			<Head>
				<title>Next CRUD Demo</title>
				<meta name="theme-color" content="#f7cb45" />
			</Head>
			<main className="container h-full overflow-auto py-4 max-xs:p-[5vw]">
				<ClientOnly>
					<ImageApp />
				</ClientOnly>
			</main>
		</>
	);
}
