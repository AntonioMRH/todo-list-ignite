import { useState } from 'react'
import styles from './TaskBox.module.css';
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa";

interface TaskBoxProps {
    content: string;
    onDelete: (taskToDelete: string) => void;
    onComplete: (taskStatus: boolean) => void;
}

export function TaskBox({ content, onDelete, onComplete }: TaskBoxProps) {

    const [taskStatus, setTaskStatus] = useState(false)



    function handleButtonClick() {
        let newTaskStatus = !taskStatus
        setTaskStatus(newTaskStatus)
        onComplete(newTaskStatus)
    }

    function handleDeleteTask() {
        onDelete(content)
    }

    return (
        <div className={styles.taskBox}>
            <div className={styles.taskBox_innerBox}>

                <button
                    className={styles.taskBox_button}
                    onClick={handleButtonClick}
                >
                    {taskStatus ? (
                        <FaCheckCircle className={styles.completedTask} />
                    ) : (
                        <FaRegCircle className={styles.uncompletedTask} />
                    )}
                </button>

                {taskStatus ? (
                    <p className={styles.completedTaskParagraph}>{content}</p>
                ) : (
                    <p >{content}</p>
                )}

            </div>
            <button
                className={styles.deleteTask_button}
                onClick={handleDeleteTask}
            >
                <FaRegTrashAlt className={styles.trashIcon} />
            </button>
        </div>
    )
}