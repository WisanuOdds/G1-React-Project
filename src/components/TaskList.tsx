import Task from "./Task"
interface TaskListProps {
  list: string[]
  checked:boolean[]
  onCheck: (id:number) => void
  
}
const Tasklist = (props: TaskListProps) => {
  return (
    <ul>
      {props.list.map((task, index) => (
        <Task task={task}
        index={index}
        onChecked={props.onCheck}
        checked={props.checked}
        />
      ))}
    </ul>  
  )
}
export default Tasklist