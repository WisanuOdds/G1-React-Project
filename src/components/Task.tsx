interface TaskProps {
    task: string
    index: number
    checked: boolean[]
    onChecked: (id:number) => void
}
const Task = (props: TaskProps) => {
    return (
        <div className="li-box">
            <li  id={`${props.index}`}>
                <input type="checkbox" id={`${props.index}`} checked={props.checked[props.index]} 
                 onChange={() => props.onChecked(props.index) }
                />
                {props.checked[props.index] ? <del className="del">{props.task}</del> : <span className="p">{props.task}</span>}   
            </li>
        </div>
    )
}
export default Task