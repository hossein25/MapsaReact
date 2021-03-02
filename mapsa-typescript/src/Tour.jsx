import { Box, Button, createStyles, makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => createStyles({
    image: {
        height: '10rem',
        width: "100%"
    }
}))

const Tour = ({tour, handleIntersting}) => {
    const classes = useStyles();
    useDocumentTitle('Home');

    const [isCollapsed, setIsCollapsed] = useState(false)

    function toggle(){
        setIsCollapsed(pre => !pre)
    }

    return <Box width={500} p={1}>
        <img className={classes.image} src={tour.image} alt={tour.name} />
        {tour.name}
        {isCollapsed ? tour.info : tour.info.slice(0 , 200)}
        {isCollapsed ?  null : "..." }

        <button onClick={toggle}>{isCollapsed ? "Show Less" : "Read More"}</button>

        <Button variant="contained" color="secondary" onClick={() => handleIntersting(tour.id)}>Not Intersted</Button>
    </Box>
} 

export default Tour;

function useDocumentTitle(title) {
    useEffect(() => {
        window.title = title
    },[title])
}