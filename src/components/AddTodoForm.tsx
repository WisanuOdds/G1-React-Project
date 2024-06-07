interface AddTodoFormProps {
  setTask: (arg0: string) => void
  setList: (arg0: string[]) => void
  setcheckbox: (arg0: boolean[]) => void
  task: string
  list: string[]
  checkbox: boolean[]
}

const AddTodoForm  = (props: AddTodoFormProps) => {
    const handle = () => {
        props.setList([...props.list, props.task]);
        props.setcheckbox([...props.checkbox, false]);
        props.setTask('');
    }
    
    return (
        <>   
            <input className="input" value={props.task} onChange={e=>props.setTask(e.target.value)} placeholder="please input here" type="text" onKeyDown={e => {
                if(e.key==='Enter'){
                    handle();
                }
            }} />
            <button onClick={handle} id="button">add</button>
        </>
    )
}

export default AddTodoForm