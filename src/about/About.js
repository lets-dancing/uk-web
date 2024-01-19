import { useEffect } from "react";
import AnimPreloaderAjax from "../animations/preloader/Preloader";
import { useState } from "react";
import "../animations/preloader/Preloader"


function About() {
    // eslint-disable-next-line
    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false));
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <AnimPreloaderAjax />
        </div>
    );
}

export default About;