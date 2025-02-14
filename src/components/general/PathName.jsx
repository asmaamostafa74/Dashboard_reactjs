import { useLocation } from "react-router"

const PathName = () => {
    const location = useLocation()
    return (
        <p>
            Pages / <span className="capitalize">{location.pathname.split("/")[1]}</span>
        </p>
    )
}

export default PathName
