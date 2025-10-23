import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard {...props} index={index} key={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
