export default function TodoInput({ onAdd, inputValue, setInputValue }) {
  function handleAddTask() {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  }

  return (
    <header>
      <input
        type="text"
        placeholder="Enter tasks..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </header>
  );
}
