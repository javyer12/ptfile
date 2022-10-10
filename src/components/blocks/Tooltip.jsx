import React from 'react'
import { Box, Grid, Button, Tooltip } from '@mui/material/';

function Tooltips(props) {
        return (
                <div>
                        <Tooltip title={props.tool} placement={props.title}>
                                <Button>{props.title}-</Button>
                        </Tooltip>
                </div>
        )
}

export default Tooltips;