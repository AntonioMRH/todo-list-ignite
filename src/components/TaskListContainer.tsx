import styles from './TaskListContainer.module.css';
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Task } from "../App"
import { TaskBox } from './TaskBox'
import { useState } from 'react'

interface Props {
    taskList: Task[];
    deleteTaskFnc: (arrTask: Task[]) => void;
}

export function TaskListContainer({ taskList, deleteTaskFnc }: Props) {
    const [completedTasks, setCompletedTasks] = useState(0)

    let tasklistLength = taskList.length;

    function handleTaskCompletion(taskMark: boolean) {
        taskMark ? setCompletedTasks((prev) => prev + 1) : setCompletedTasks((prev) => prev - 1)
    }

    function handleDeleteTask(taskToDelete: string) {
        let newTaskArr = taskList.filter(task => {
            return task.content !== taskToDelete
        })
        deleteTaskFnc(newTaskArr)
    }



    return (
        <article className={styles.taskContainer}>
            <section className={styles.taskContainer_header}>
                <p className={styles.taskContainer_header__createdTasks}>
                    Tarefas criadas <span>{tasklistLength}</span>
                </p>
                <p className={styles.taskContainer_header__completedTasks}>
                    Concluídas <span>
                        {tasklistLength > 0 ?
                            (`${completedTasks} de ${tasklistLength}`) : (0)}
                    </span>
                </p>
            </section>

            {tasklistLength < 1 && (
                <section className={styles.taskContainer_main}>
                    <ClipboardIcon className={styles.taskContainer_main__icon} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </section>
            )}

            {tasklistLength > 0 && (
                taskList.map((task) => {
                    return (
                        <TaskBox
                            key={task.id}
                            content={task.content}
                            onDelete={handleDeleteTask}
                            onComplete={handleTaskCompletion}
                        />
                    )
                })
            )}
        </article>
    )
}