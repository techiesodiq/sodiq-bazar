/** @format */

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ChakraProvider} from "@chakra-ui/react";
import type {AppProps} from "next/app";
import "../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
	const client = new ApolloClient({
		uri: "https://rickandmortyapi.com/graphql",
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	);
}

export default MyApp;
