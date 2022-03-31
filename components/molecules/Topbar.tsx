/** @format */

import {Flex, Text} from "@chakra-ui/react";

const Topbar = () => {
	return (
		<section>
			<Flex
				alignItems="center"
				justifyContent="center"
				backgroundColor="#000"
				p={1}
			>
				<Flex>
					<Text color="white" p={1}>
						-45% on all products
					</Text>
				</Flex>
			</Flex>
		</section>
	);
};

export default Topbar;
