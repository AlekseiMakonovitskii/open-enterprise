import { createContext, useContext, useState } from "react";
import alertSound from '../assets/alertsound.mp3';


const GlobalContext = createContext();

export const useGlobalCOntext = () => useContext(GlobalContext);


const AppContext = ({children}) => {
	const [alert, setAlert] = useState(false);
	const alertMessage = 'This is a demo, this functionality is not currently available...';

	const handleAlert = () => {
		const audio = new Audio(alertSound);
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