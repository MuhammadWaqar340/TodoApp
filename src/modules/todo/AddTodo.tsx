import { useRef } from "react";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};
const AddTodo: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const handleOnchange = (e: any) => {
    setTodo(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="input_box"
        placeholder="Enter Task"
        type="input"
        onChange={handleOnchange}
        value={todo}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default AddTodo;
