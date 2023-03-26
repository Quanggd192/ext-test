import axios from 'axios';

const config = {
	// Configuration
	baseURL: process.env.API_ENDPOINT,
	timeout: 8000,
	headers: {
		Accept: 'application/json',
		'x-rapidapi-key': '<your-key-here>'
	},
}

const AxiosInstance = axios.create(config);
