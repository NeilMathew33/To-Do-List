import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ToDoNavbar from './ToDoNavbar'

const ViewAllTodos = () => {

    const [ToDoData, setTodoData] = useState(
        { "todos": [], }
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then(
            (response) => {
                setTodoData(response.data)
            }
        ).catch()
    }

    useEffect(() => {fetchData()}, [])
    return (
        <div>
<ToDoNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">ToDo</th>
                                        <th scope="col">Completed</th>
                                        <th scope="col">User ID</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {ToDoData.todos.map(
                                        (value, index) => {
                                            return (

                                                <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.todo}</td>
                                                    <td>{value.completed}</td>
                                                    <td>{value.userId}</td>
                                                </tr>

                                            )
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllTodos