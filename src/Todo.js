import React , { useState, useStyle } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Modal } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';

import './Todo.css';

function Todo(props) {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
            
        >
            <div>
                <h1>{props.todo.todo}</h1>
                <button onClick={e => setOpen(false)}></button>
            </div>
        </Modal>
        <List className="todo__container">
            <ListItem className="todo__list">
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline..." />
            </ListItem>
            
            <Button type="submit" onClick={e => setOpen(true)} variant="contained" color="primary">
                View
            </Button>

            <DeleteIcon />
            <Button className="button" onClick={event => db.collection('todos').doc(props.todo.id).delete()}> DELETE ME</Button>
            
        </List>
        </>
    )
}

export default Todo;
