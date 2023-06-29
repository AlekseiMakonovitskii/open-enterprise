import { createContext, useContext, useState } from "react";


const GlobalContext = createContext();

export const useGlobalCOntext = () => useContext(GlobalContext);


const AppContext = ({children}) => {
	const [alert, setAlert] = useState(false);
	const alertMessage = 'This is a demo, this functionality is not currently available...';

	const handleAlert = () => {
		const audio = new Audio('src/assets/alertsound.mp3');
		audio.play();
		setAlert(true);
		setTimeout(() => {
			setAlert(false)
		}, 3000)
	
	}


	return (
		<GlobalContext.Provider value={{alert, handleAlert, alertMessage}}>
			{children}
		</GlobalContext.Provider>
	)
}

export default AppContext;