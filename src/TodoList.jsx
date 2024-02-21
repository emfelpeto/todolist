export function TodoList({tasks, deleteHandler}) {
    return (
        <ul style={{listStyleType: 'none'}}>
            {tasks.map((task, i) =>(
                <li key={i} style={{marginBottom:'10px'}}>{task.name} <button onClick={()=>deleteHandler(task.id)} style={{marginLeft:'10px',background: '#391515'}}>delete</button></li>
            ))}
        </ul>
    )
}