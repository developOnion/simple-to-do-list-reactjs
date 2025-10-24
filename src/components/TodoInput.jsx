export default function TodoInput({ onAdd, inputValue, setInputValue }) {
  function handleAddTask() {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  }

  return (
    <header className="flex items-stretch content-center gap-2 w-full max-w-[800px]">
      <input
        className="focus:outline-2 focus:outline-slate-600 flex-1 bg-slate-50 px-3.5 py-[18px] rounded-[14px]"
        type="text"
        placeholder="Enter tasks..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="px-8 py-3.5 font-bold outline-1 outline-slate-500 bg-slate-50 hover:bg-slate-100 rounded-[14px] cursor-pointer"
        onClick={handleAddTask}
      >
        Add
      </button>
    </header>
  );
}
