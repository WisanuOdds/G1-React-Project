import { useRef, useEffect } from "react";
interface AddTodoFormProps {
  setTask: (arg0: string) => void;
  setList: (arg0: string[]) => void;
  setcheckbox: (arg0: boolean[]) => void;
  task: string;
  list: string[];
  checkbox: boolean[];
}

const AddTodoForm = (props: AddTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handle = () => {
    props.setList([...props.list, props.task]);
    props.setcheckbox([...props.checkbox, false]);
    props.setTask("");
    console.log(props.list);
  };

  const handleDelete = () => {
    props.setList([]);
    props.setcheckbox([]);
  };

  return (
    <>
      <input
        ref={inputRef}
        className="input"
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
        placeholder="please input here"
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handle();
          }
        }}
      />
      <button onClick={handle} id="button">
        add
      </button>
      {props.list.length > 1 && (
        <button onClick={handleDelete} className="Delete" id="deleteButton">
          delete all
        </button>
      )}
    </>
  );
};

export default AddTodoForm;
