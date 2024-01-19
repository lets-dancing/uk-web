import { useEffect, useState } from "react";
import AnimPreloaderAjax from "../animations/preloader/Preloader";

function News() {
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

export default News;