import styles from "./TaskInput.module.css";
import { IoAddCircleOutline } from "react-icons/io5"
import { useState, FormEvent, ChangeEvent } from "react";
import { Task } from "../App"

interface TaskInputProps {
    onInsertTask: (task: Task) => void;
}



export function TaskInput({ onInsertTask }: TaskInputProps) {
    const [newInputText, setNewInputTask] = useState('');



    function handleTaskSubmit(event: FormEvent) {
        event.preventDefault();
        onInsertTask(
            {
                id: Math.random(),
                content: newInputText
            }
        )
        setNewInputTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewInputTask(event.target.value)
    }



    return (
        <form onSubmit={handleTaskSubmit} className={styles.inputSection} >
            <input
                type="text"
                name="taskinput"
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                value={newInputText}
            />
            <button type="submit">
                Criar <IoAddCircleOutline className={styles.btnIcon} />
            </button>
        </form>
    )
}