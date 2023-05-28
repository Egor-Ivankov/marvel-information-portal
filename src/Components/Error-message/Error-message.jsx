import img from "./error.gif";

export default function ErrorMessage() {
    return (
        <div>
            <img src={img} alt="error" className="error-img"/>
        </div>
    )
}