import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="max-w-[800px] w-full flex flex-col gap-3.5 items-center">
      {todos.map((todo, index) => {
        return (
          <TodoCard {...props} index={index} key={index}>
            <div className="flex-1 min-w-0">
              <p className="wrap-break-word">{todo}</p>
            </div>
          </TodoCard>
        );
      })}
    </ul>
  );
}
