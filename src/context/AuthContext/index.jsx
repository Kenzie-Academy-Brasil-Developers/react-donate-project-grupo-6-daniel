import React from "react";
import { createContext } from "react";
import { api } from "../../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = React.useState([]);
	const [donation, setDonation] = React.useState([]);


	React.useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		try {
			const res = await api.get("users", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await res.data;

			setUsers(json);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		const getDonations = async () => {
			try {
				const res = await api.get(`donations`, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const json = await res.data;

				setDonation(json);
			} catch (error) {
				console.log(error);
			}
		};
		getDonations();
	}, []);

	return (
		<AuthContext.Provider value={{ users, donation }}>
			{children}
		</AuthContext.Provider>
	);
};
