import { Avatar, Box, IconButton, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import persons from './data';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

const Slider: FC = props => {
    const [active, setActive] = useState(0);

    function nextHandler() {
        setActive((pre) => {
            const lastIndex = persons.length - 1;
            if (pre + 1 > lastIndex) {
                return 0;
            }
            return pre + 1;
        })
    }

    function prevHandler() {
        setActive((pre) => {
            const lastIndex = persons.length - 1;
            if (pre === 0) {
                return lastIndex
            }
            return pre - 1;
        })
    }

    return <Box m={2}>
        <Typography variant="h2">Reviews</Typography>
        <Box p={2}>
            <Avatar src={persons[active].image} />
            <Typography>{persons[active].name}</Typography>
            <Box mt={1}>
                <Typography>{persons[active].quote}</Typography>
            </Box>

            <IconButton color="primary" onClick={nextHandler}>
                <ArrowRight fontSize="large" />
            </IconButton>

            <IconButton color="secondary" onClick={prevHandler}>
                <ArrowLeft fontSize="large" />
            </IconButton>
        </Box>
    </Box>
}


export default Slider