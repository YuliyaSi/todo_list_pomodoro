import type { NextPage } from 'next'
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import OutputList from "../components/OutputList";
import {useState} from "react";
import {IList, ITask} from "../types";

const Home: NextPage = () => {
    const [todos, setTodos] = useState([]);

    const addNewTask = (value: ITask) => {
        // @ts-ignore
        setTodos((prevState: Pick<IList, 'todos'>) => [...prevState, value])
    }

  return (
      <Layout>
          <InputField addNewTask={addNewTask}/>
          { todos.length !== 0 && <OutputList todos={todos}/>}

      </Layout>
  )
}

export default Home
