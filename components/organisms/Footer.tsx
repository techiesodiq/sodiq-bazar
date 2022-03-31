/** @format */

import {Flex, HStack, Icon, Link, Text, useMediaQuery} from "@chakra-ui/react";
import type {NextPage} from "next";
import {FaEnvelopeSquare} from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer: NextPage = () => {
	const [mobileScreen] = useMediaQuery("(max-width: 768px)");
	const mobileFooter = (
		<Flex
			alignItems="flex-end"
			justifyContent="space-between"
			flex-direction="column"
			color="#FFF"
			backgroundColor="#000"
			px="35px"
			py="8px"
		>
			<Flex>
				<Text>
					Powered by <Link>Bazar</Link>
				</Text>
			</Flex>
			<Flex>
				<HStack>
					<Icon as={FaEnvelopeSquare}></Icon>
					<Text>michael384@gmail.com</Text>
				</HStack>
			</Flex>
			<Flex>
				<Link textDecoration="underline" px="8px">
					Terms and Conditions
				</Link>
				<Link textDecoration="underline" px="8px">
					Privacy Policy
				</Link>
				<Link textDecoration="underline" px="8px">
					Shipping and returns
				</Link>
			</Flex>
		</Flex>
	);
	const largeScreenFooter = (
		<Flex
			alignItems="flex-end"
			justifyContent="space-between"
			color="#FFF"
			backgroundColor="#000"
			px="70px"
			py="15px"
		>
			<Flex>
				<Text>
					Powered by <Link>Bazar</Link>
				</Text>
			</Flex>
			<Flex>
				<HStack>
					<Icon as={FaEnvelopeSquare}></Icon>
					<Text>michael384@gmail.com</Text>
				</HStack>
			</Flex>
			<Flex>
				<Link textDecoration="underline" px="8px">
					Terms and Conditions
				</Link>
				<Link textDecoration="underline" px="8px">
					Privacy Policy
				</Link>
				<Link textDecoration="underline" px="8px">
					Shipping and returns
				</Link>
			</Flex>
		</Flex>
	);
	return (
		<div className={styles.footer}>
			<footer>{mobileScreen ? mobileFooter : largeScreenFooter}</footer>
		</div>
	);
};

export default Footer;
