/** @format */

import {HStack, Icon, Link} from "@chakra-ui/react";
import {
	FaFacebook,
	FaInstagramSquare,
	FaLinkedin,
	FaTiktok,
	FaTumblr,
	FaTwitter,
} from "react-icons/fa";

const SocialLink = () => {
	return (
		<>
			<HStack background="#fff" my="10px" pt="4px" px="10px">
				<Link px="10px">
					<Icon as={FaInstagramSquare} />
				</Link>
				<Link px="10px">
					<Icon as={FaFacebook} />
				</Link>
				<Link px="10px">
					<Icon as={FaTwitter} />
				</Link>
				<Link px="10px">
					<Icon as={FaTiktok} />
				</Link>
				<Link px="10px">
					<Icon as={FaTumblr} />
				</Link>
				<Link px="10px">
					<Icon as={FaLinkedin} />
				</Link>
			</HStack>
		</>
	);
};

export default SocialLink;
