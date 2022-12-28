import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";


export default function User() {
  const {getUser, user} = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login)
  }, []);

  return (
    <div>{user.login}</div>
  )
}