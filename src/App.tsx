
import { useState } from 'react';
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { TaskListContainer } from './components/TaskListContainer'

export interface Task {
  id: number;
  content: string;
}


export function App() {
  const [taskArr, setTaskArr] = useState(Array())

  function handleNewTask(task: Task) {
    setTaskArr(Array(task, ...taskArr))
  }

  function handleDeleteTask(taskArr: Array<Task>) {
    setTaskArr(taskArr)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <TaskInput onInsertTask={handleNewTask} />
        <TaskListContainer taskList={taskArr} deleteTaskFnc={handleDeleteTask} />
      </main>
    </>
  )
}

