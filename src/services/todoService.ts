import axios from 'axios';
import Todo from "./Todo";

const base_url = 'https://nickb-todos-app-for-woz.herokuapp.com/api/todos'


export const getTodos = async () => {
    try{
        let response = await axios.get(base_url);
        console.log("Response: ", response);
        console.log("Data: ", response.data);
        return response.data;
    } catch(error){
        return error;
    }

};

export const getTodoByID = (id: number) => {

};

export const postTodo = async (todo: Todo) => {
    try{
        let response = await axios.post(base_url, todo);
        console.log("Post underway");
        console.log("Response: ", response);
        console.log("Data: ", response.data);
        return response.data;
    } catch(error){
        console.log("Post failed");
        return error;
    }
};

export const updateTodoById = async (todo: Todo) => {
    try{
        let response = await axios.put(`${base_url}/${todo.id}`, todo);
        console.log("Update underway");
        console.log("Response: ", response);
        console.log("Data: ", response.data);
        return response.data;
    } catch(error){
        console.log("Update failed");
        return error;
    }
}

export const deleteTodoById = async (id: number) => {
    try{
        let response = await axios.delete(`${base_url}/${id}`);
        console.log("Delete underway");
        console.log("Response: ", response);
    } catch(error){
        console.log("Delete failed");
        return error;
    }
}