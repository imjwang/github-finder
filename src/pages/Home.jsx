import UserResults from "../components/users/UserResults"

export default function Home() {
    return (
        <div>
            <UserResults />
            <p className="lead">{process.env.REACT_APP_GITHUB_TOKEN}</p>
        </div>
    )
}