import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Tile = (props) => {
    return (
        <Grid item xs={3} style={{height: '20vh'}}>
            {props.children}
        </Grid>
    )
}

const Village = (props) => {
    return(
        <Grid style={{backgroundColor: 'lightGray'}} container spacing={0}>
            <Tile/>
            <Tile>
                <Paper style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Agrar {props.G.agrar.currentCitizens}</Paper>
            </Tile>
            <Tile/>
            <Tile>
                <Paper>Culture</Paper>
            </Tile>

            <Tile/>
            <Tile>
                <Paper >Fruits</Paper>
            </Tile>
            <Tile/>
            <Tile>
                <Paper >Stone</Paper>
            </Tile>

            <Tile>
                <Paper >Village</Paper>
            </Tile>
            <Tile>
                <Paper >Fishing</Paper>
            </Tile>
            <Tile/>
            <Tile/>
        </Grid>
    );
}

export default Village;