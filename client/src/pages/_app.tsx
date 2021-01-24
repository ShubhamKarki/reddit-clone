import Axios from 'axios';
import { useRouter } from 'next/router';

import Navbar from '../components/navbar';
import '../styles/tailwind.css';

Axios.defaults.baseURL = 'http://localhost:5000';
Axios.defaults.withCredentials = true;
function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();
	const authRoutes = ['/register', '/login'];
	const authRoute = authRoutes.includes(pathname);

	return (
		<>
			{!authRoute && <Navbar />}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
