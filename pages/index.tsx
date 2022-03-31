/** @format */

import type {NextPage} from "next";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import Hero from "../components/organisms/Hero";
import Products from "../components/organisms/Products";
import RoundImageBox from "../components/organisms/RoundImageBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Hero />
			<RoundImageBox />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
