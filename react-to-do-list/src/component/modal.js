export default function Modal(id, task, type, isImportant, isDone, setTaskObj) {
    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTaskObj([...setTask, task.value])}
                placeholder='task oruulna uu'
            />
            <button className='btn btn-primary' onClick={addTask}>
                Add
            </button>
        </div>
    )
}