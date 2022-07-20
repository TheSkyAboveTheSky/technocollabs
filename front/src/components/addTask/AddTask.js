
import { useState, useRef, useEffect } from "react"
import Navbar from "../Navbar/Navbar";

const Form = () => {
    const [name, setName] = useState("");
    const [progress, setProgress] = useState(0);
    const priorityRef = useRef();
    const teamRef = useRef();
    const [description, setDescription] = useState("");
    const [due, setDueDate] = useState("");
    const [avatar, setAvatar] = useState("");
    const [isPending, setIsPending] = useState(false);

/*     useEffect(() => {
        if (teamRef.current.value === "Team One")
            setAvatar("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU")
    }, [teamRef]); */


/*     const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        // console.log(name, priorityRef.current.value, teamRef.current.value, description, dueDate);
        const task = {
            name,
            priority: priorityRef.current.value,
            team: teamRef.current.value,
            description,
            due,
            avatar,
            progress
        }
        fetch("http://localhost:3000/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(data => {
                setIsPending(false);
                alert("Task added successfully");
            })
            .catch(err => console.log(err))

    } */


    return (
    <div>
        <div >
            <ul className="nav nav-tabs page-header-tab ">
                <li className="nav-item" ><a
                          style={window.location.pathname === '/taskboard' ? { borderTop: "3px solid red" } : { color: "grey" }}
                          className={window.location.pathname === '/taskboard' ? 'nav-link active' : 'nav-link'}
                          data-toggle="tab" href="/taskboard">Task List</a></li>
                <li className="nav-item"><a
                          className={window.location.pathname === '/todo-add' ? 'nav-link active' : 'nav-link'}
                          style={window.location.pathname === '/todo-add' ? { borderTop: "3px solid red" } : { color: "grey" }}
                          data-toggle="tab" href="/todo-add">Add Task</a></li>
            </ul>
        </div>
        <div className="card">
            <div className="card-header">
                Add a Task
            </div>
            <div className="card-body">
                <form>
                        <div class="form-group row">
                            <label for="task-name" class="col-sm-2 col-form-label">Task Name <span style={{ "color": "red" }}> *</span></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="task-name" placeholder="Task Name"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="task-team" class="col-sm-2 col-form-label">Task Team <span style={{ "color": "red" }}> *</span></label>
                            <div class="col-sm-10">
                                <select className="form-control custom-select" id="task-team" required>
                                    <option>Team One</option>
                                    <option>Team two</option>
                                    <option>Team Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="task-priority" class="col-sm-2 col-form-label">Task Priority <span style={{ "color": "red" }}> *</span></label>
                            <div class="col-sm-10">
                                <select className="form-control custom-select" id="task-priority" required>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="task-progress" class="col-sm-2 col-form-label">Task Progress <span style={{ "color": "red" }}> *</span></label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="task-progress" placeholder="Task Progress"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="task-due" class="col-sm-2 col-form-label">Task Due Time <span style={{ "color": "red" }}> *</span></label>
                            <div class="col-sm-10">
                                <input type="datetime-local" class="form-control" id="task-due" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Form