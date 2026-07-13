function TodoForm({onAddTask}) {
    return (<>
        <div className="form">
            <form>
                <input type="text" placeholder="masukkan tugas"></input>
                <button>tambah</button>
            </form>
        </div>
    </>);
}

export default TodoForm;