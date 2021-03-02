import { Box } from "@material-ui/core"
import { useEffect, useState } from "react"
import Tour from "./Tour"

const url = 'https://course-api.com/react-tours-project'

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    function handleIntersting(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    const getTours = async () => {
        try {
            setIsLoading(true)
            const tours = await fetch(url);
            const data = await tours.json();
            setTours(data)
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getTours();
    },[])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (!isLoading && !tours.length) {
        return <button onClick={getTours}>Refresh</button>
    }

    return <Box p={1} display="flex" flexDirection="column">
        Tours
    {tours.map(tour => (<Tour key={tour.id} tour={tour} handleIntersting={handleIntersting} />)) }
    </Box>
}

export default Tours