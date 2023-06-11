import img from "./error.gif";

export default function ErrorMessage() {
    return (
        <>
            <img src={img} alt="error" className="error-img"/>
        </>
    )
}