//------useProducer()--------
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// import { Button, ButtonGroup } from "@mui/material";
// import { useReducer } from "react";

// const initState = 0
// const upAction = 'up'
// const downAction = 'down'
// const reduce = (state, action) => {
//     switch (action) {
//         case upAction:
//             return state + 1
//         case downAction:
//             return state - 1

//         default:
//             throw new Error('Invalid Action');
//     }
// }

// function Ex6() {
//     const [count6, dispatch] = useReducer(reduce, initState)

//     return (
//         <div className="newSession">
//             <h4>Ex6: {count6}</h4>
//             <ButtonGroup disableElevation variant="contained">
//                 <Button
//                     onClick={() => dispatch(downAction)}
//                 >Down</Button>
//                 <Button
//                     onClick={() => dispatch(upAction)}
//                 >Up</Button>
//             </ButtonGroup>
//         </div>
//     )
// }

// export default Ex6

//---------TODO List-----
// - useReducer dùng cho project lớn, dùng để chia file: action (2), reducer (1,3)

import { Button, ListItemButton, ListItemText, TextField } from "@mui/material";
import { useReducer } from "react";

// 1. set initState
const initState = {
    job: '',
    jobs: []
}

// 2. set Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

    //nhận dữ liệu khi input onchange
const setJob = valueLoad => {
    return {
        type: SET_JOB,
        valueLoad
    }
}
const addJob = valueLoad => {
    return {
        type: ADD_JOB,
        valueLoad
    }
}
const deleteJob = valueLoad => {
    return {
        type: DELETE_JOB,
        valueLoad
    }
}

// 3. set reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.valueLoad
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.valueLoad]
            }
        case DELETE_JOB:
            {
                const newJobs = [...state.jobs]
                newJobs.splice(action.valueLoad, 1)
                return {
                    ...state,
                    jobs: newJobs
                }
            }

        default:
            throw new Error('Invalid Action');
    }
}

function Ex6() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state;

    const handleAdd = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
    }

    return (
        <div className="newSession">
            <h4>Ex6: TODO List</h4>
            <TextField id="standard-basic" label="Todo" variant="standard"
                value={job}
                onChange={e => dispatch(setJob(e.target.value))}
            />
            <Button variant="contained"
                onClick={handleAdd}
            >ADD</Button>

            {jobs.map((job, index) => (
                <ListItemButton key={index}
                    onClick={() => { dispatch(deleteJob(index)) }}
                >
                    <ListItemText primary={job} />
                </ListItemButton>
            ))}


        </div>
    )
}

export default Ex6