import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsDown} from '@fortawesome/free-regular-svg-icons';

const Overview = (props) => {
    const {tasks, deleteTask} = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.taskId}> {task.taskNum} {task.taskName}
                <button type="button" onClick={() => deleteTask(task.taskId)}> 
                    <FontAwesomeIcon icon={faThumbsDown}/>
                 </button>
                </li>
            })}
        </ul>
    );
};

export default Overview;