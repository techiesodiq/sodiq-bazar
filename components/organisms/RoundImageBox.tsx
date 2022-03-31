/** @format */

import {Flex, HStack} from "@chakra-ui/react";
import styles from "../../styles/RoundImageBox.module.css";
import RoundImage from "../molecules/RoundImage";

const RoundImageBox = () => {
	return (
		<div className={styles.container}>
			<Flex justifyContent="center" alignItems="center">
				<HStack>
					<RoundImage />
				</HStack>
			</Flex>
		</div>
	);
};

export default RoundImageBox;
