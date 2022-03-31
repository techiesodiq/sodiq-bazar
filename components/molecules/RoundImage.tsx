/** @format */

import {Box, Flex, Image, Text, useMediaQuery} from "@chakra-ui/react";

const RoundImage = () => {
	const imgData = [
		{id: "1", title: "SALE", imgUrl: "https://bit.ly/dan-abramov"},
		{id: "2", title: "Sweaters", imgUrl: "https://bit.ly/dan-abramov"},
		{id: "3", title: "Sport", imgUrl: "https://bit.ly/dan-abramov"},
		{id: "4", title: "Popular", imgUrl: "https://bit.ly/dan-abramov"},
		{id: "5", title: "Dresses", imgUrl: "https://bit.ly/dan-abramov"},
	];
	const [mobileScreen] = useMediaQuery("(max-width: 768px)");
	const mobileRoundImage = (
		<>
			{imgData.slice(0, 2).map((item: any, index) => (
				<Box key={index} px="30px">
					<Image
						borderRadius="full"
						boxSize="150px"
						src={item.imgUrl}
						alt={item.title}
						mb="10px"
					/>
					<Flex justifyContent="center" alignItems="center">
						<Text>{item.title}</Text>
					</Flex>
				</Box>
			))}
		</>
	);

	const largeScreenRoundImage = (
		<>
			{imgData.map((item: any, index) => (
				<Box key={index} px="80px">
					<Image
						borderRadius="full"
						boxSize="150px"
						src={item.imgUrl}
						alt={item.title}
						mb="20px"
					/>
					<Flex justifyContent="center" alignItems="center">
						<Text>{item.title}</Text>
					</Flex>
				</Box>
			))}
		</>
	);

	return <>{mobileScreen ? mobileRoundImage : largeScreenRoundImage}</>;
};

export default RoundImage;
