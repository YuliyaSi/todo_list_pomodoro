import type { NextPage } from 'next'
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import OutputList from "../components/OutputList";
import {useState} from "react";
import {ITask} from "../types";

const Home: NextPage = () => {
    const [todos, setTodos] = useState<ITask[] | []>([]);

    const addNewTask = (value: ITask) => {
        setTodos(prevState => [...prevState, value])
    }
    console.log(todos.length)
  return (
      <Layout>
          <InputField addNewTask={addNewTask}/>

          { todos.length !== 0 && <OutputList todos={todos}/> }

      </Layout>
  )
}

export default Home
