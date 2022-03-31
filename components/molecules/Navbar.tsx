/** @format */
import {HamburgerIcon, SearchIcon} from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Icon,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useMediaQuery,
} from "@chakra-ui/react";
import {BiCartAlt} from "react-icons/bi";

const Navbar = () => {
	const [mobileScreen] = useMediaQuery("(max-width: 768px)");
	const mobileNavbar = (
		<section>
			<Flex
				px="30px"
				py="7px"
				alignItems="flex-end"
				justifyContent="space-between"
			>
				<Flex>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="outline"
						/>
						<MenuList>
							<MenuItem>All Products</MenuItem>
							<MenuItem>SALE</MenuItem>
							<MenuItem>Sweaters</MenuItem>
							<MenuItem>Sports</MenuItem>
							<MenuItem>Dresses</MenuItem>
						</MenuList>
					</Menu>

					<Box>
						<Heading as="h6" size="xs" mr="60px">
							Anns Shop
						</Heading>
					</Box>
				</Flex>

				<Flex alignItems="flex-end">
					<Box px="4px">
						<SearchIcon />
					</Box>
					<Box px="4px">
						<Icon as={BiCartAlt} />
					</Box>
				</Flex>
			</Flex>
		</section>
	);
	const largeScreenNavbar = (
		<section>
			<Flex
				px="70px"
				py="15px"
				alignItems="flex-end"
				justifyContent="space-between"
			>
				<Flex>
					<Box>
						<Heading as="h6" size="xs" mr="60px">
							Anns Shop
						</Heading>
					</Box>

					<HStack>
						<Link px="8px">All products</Link>
						<Link px="8px">SALE</Link>
						<Link px="8px">Sweaters</Link>
						<Link px="8px">Sport</Link>
						<Link px="8px">Dresses</Link>
					</HStack>
				</Flex>

				<Flex alignItems="flex-end">
					<Box px="10px">
						<SearchIcon />
					</Box>
					<Box px="10px">
						<Icon as={BiCartAlt} />
					</Box>
				</Flex>
			</Flex>
		</section>
	);
	return <>{mobileScreen ? mobileNavbar : largeScreenNavbar}</>;
};

export default Navbar;
