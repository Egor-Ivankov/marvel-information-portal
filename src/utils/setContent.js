import HeroSceleton from "../Components/Hero-skeleton/Hero-sceleton";
import Spinner from "../Components/Spinner/Spinner";
import ErrorMessage from "../Components/Error-message/Error-message";

const setContent = (process, Component, data) => {
    switch(process) {
        case "waiting": 
            return <HeroSceleton/> 
        case "loading": 
            return <Spinner/>
        case "complete": 
            return <Component data={data}/>
        case "error": 
            return <ErrorMessage/>
        default:
            throw new Error ('get unexpected process')
    }
}

export default setContent;