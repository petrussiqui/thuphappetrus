import { Button, ButtonGroup, Slider, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/Delete"
import React, { useState } from "react";

function Ex8() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (e) => {
        setAlignment(e.target.value);
    };
    return (
        <div className="MUISession">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="web">Web</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
                <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
            <ButtonGroup variant='contained'>
                <Button
                    startIcon={<SaveIcon />}
                    color="primary"
                >Save</Button>
                <Button
                    startIcon={<DeleteIcon />}
                    color="success"
                >Delete</Button>
            </ButtonGroup>
        </div>
    )
}
export default Ex8