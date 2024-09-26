import { todos } from "../data/data"

const HomePage = () => {
  return (
    <div className="bg-current">
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default HomePage
