import { Avatar, Box, IconButton, Typography, useTheme } from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import React, { FC, useEffect, useState } from 'react';
import persons from './data';
import teal from '@material-ui/core/colors/teal';

const Slider2: FC = props => {
    const [active, setActive] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        const lastIndex = persons.length - 1;
        if (active > lastIndex) {
            setActive(0);
        } else if (active < 0) {
            setActive(lastIndex)
        }
        const interval = setInterval(() => setActive(pre => pre + 1), 5000)

        return () => {
            return clearInterval(interval)
        }
    }, [active])

    if (active > persons.length - 1 || active < 0) {
        return null
    }

    return <Box mr={2} my={2}>
        <Typography variant="h2">Reviews</Typography>
        <Box px={2}>
            <Avatar src={persons[active].image} />
            <Typography>{persons[active].name}</Typography>
            <Box mt={1}>
                <Typography style={{ color: teal[700] }}>{persons[active].quote}</Typography>
            </Box>

            <IconButton style={{ color: theme.palette.warning.dark }} onClick={() => setActive(pre => pre + 1)}>
                <ArrowRight fontSize="large" />
            </IconButton>

            <IconButton color="secondary" onClick={() => setActive(pre => pre - 1)}>
                <ArrowLeft fontSize="large" />
            </IconButton>
        </Box>
    </Box>
}


export default Slider2