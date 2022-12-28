import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

export default function UserSearch() 
{
  const [text, setText] = useState('')

  const {users, searchUsers, clearUsers} = useContext(GithubContext)

  const { setAlert } = useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter something', 'error')
    } else {
      searchUsers(text)

      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search for a user..."
              />
              <button className="absolute top-0 right-0 w-36 rounded-l-none btn btn-lg btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
        <button onClick={clearUsers} className="btn btn-ghost btn-lg">
          Clear
        </button>
        )}
      </div>
    </div>
  )
}