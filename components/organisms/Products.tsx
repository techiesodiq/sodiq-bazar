/** @format */

import {gql, useQuery} from "@apollo/client";
import {
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

const GET_PRODUCTS = gql`
	query {
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

const Products = () => {
	const [mobileScreen] = useMediaQuery("(max-width: 768px)");
	const {error, loading, data} = useQuery(GET_PRODUCTS);

	if (loading)
		return (
			<Flex alignItems="center" justifyContent="center">
				<Text>Loading...</Text>
			</Flex>
		);

	if (error)
		return (
			<Flex alignItems="center" justifyContent="center">
				<Text>Something went wrong</Text>
			</Flex>
		);

	console.log({error, loading, data});

	const mobileScreenProducts = (
		<Grid
			pl="70px"
			pt="10px"
			pb="100px"
			mt="0"
			templateColumns="repeat(2, 1fr)"
			gap={6}
		>
			{data.characters.results.slice(0, 16).map((item: any, index: number) => (
				<GridItem mb="70px" mt="0px" pt="0px" w="100%" h="100px" key={item.id}>
					<Image src={item.image} alt={item.name} />

					<Text>{item.name}</Text>
					<Heading as="h6" size="xs">
						$28.15
					</Heading>
				</GridItem>
			))}
		</Grid>
	);

	const largeScreenProducts = (
		<Grid
			pl="70px"
			pt="10px"
			pb="100px"
			mt="0"
			templateColumns="repeat(4, 1fr)"
			gap={6}
		>
			{data.characters.results.slice(0, 16).map((item: any, index: number) => (
				<GridItem mb="190px" mt="0px" pt="0px" w="100%" h="140px" key={item.id}>
					<Image src={item.image} alt={item.name} />

					<Text>{item.name}</Text>
					<Heading as="h6" size="xs">
						$28.15
					</Heading>
				</GridItem>
			))}
		</Grid>
	);

	return (
		<main className={styles.footer}>
			{mobileScreen ? mobileScreenProducts : largeScreenProducts}
		</main>
	);
};

export default Products;
