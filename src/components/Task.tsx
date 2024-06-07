
interface TaskProps {
    task: string
    index: number
    checked: boolean[]
    onChecked: (id:number) => void
}



const Task = (props: TaskProps) => {
    return (
        <>
            <li  id={`${props.index}`}>
                <input type="checkbox" id={`${props.index}`} checked={props.checked[props.index]} 
                 onChange={() => props.onChecked(props.index) }
                />
                {props.checked[props.index] ? <del>{props.task}</del> : (props.task)}
                
                
            </li>
        </>
    )
}

export default Task