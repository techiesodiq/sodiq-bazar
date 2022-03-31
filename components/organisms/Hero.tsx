/** @format */

import {Container, Flex} from "@chakra-ui/react";
import styles from "../../styles/Hero.module.css";
import SocialLink from "../molecules/SocialLink";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<Container>
				<Flex alignItems="center" justifyContent="center">
					<Flex>
						<SocialLink />
					</Flex>
				</Flex>
			</Container>
		</section>
	);
};

export default Hero;
