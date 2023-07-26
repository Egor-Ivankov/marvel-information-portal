import HeroSceleton from "../Components/Hero-skeleton/Hero-sceleton";
import Spinner from "../Components/Spinner/Spinner";
import ErrorMessage from "../Components/Error-message/Error-message";

const setContent = (process, Component, data) => {
    switch (process) {
        case "waiting":
            return <HeroSceleton />
        case "loading":
            return <Spinner />
        case "complete":
            return <Component data={data} />
        case "error":
            return <ErrorMessage />
        default:
            throw new Error('get unexpected process')
    }
}

const setContentList = (process, Component, newItem) => {
    switch (process) {
        case "waiting":
            return
        case "loading":
            return newItem ? <Component /> : <Spinner />
        case "complete":
            return <Component />
        case "error":
            return <ErrorMessage />
        default:
            throw new Error('get unexpected process');
    }
}

const setContentSearch = (process, Component) => {
    switch (process) {
        case "waiting":
            return;
        case "loading":
            return;
        case "complete":
            return <Component />
        case "error":
            return (
                <div className="search-hero-critical-error">
                    <ErrorMessage />
                </div>
            )
        default:
            throw new Error('get unexpected process');
    }
}
export { setContent, setContentList, setContentSearch };