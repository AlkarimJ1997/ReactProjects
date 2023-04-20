import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataURL) => {
    // State variables
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Track mounted state
        let isMounted = true;

        // Allows us to cancel the request if the component unmounts (axios docs)
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            // Set loading state to true
            setIsLoading(true);

            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });

                // If component is no longer mounted, cancel the request
                if (!isMounted) return;

                // Set the data from the response
                setData(response.data);
                setFetchError(null);
            } catch (err) {
                // If component is no longer mounted, cancel the request
                if (!isMounted) return;

                // Set the error state
                setFetchError(err);
                setData([]);
            } finally {
                // Set loading state to false
                isMounted && setIsLoading(false);
            }
        }

        // Fetch data on page load
        fetchData(dataURL);

        // Clean up (unmount)
        return () => {
            isMounted = false;
            source.cancel();
        }
    }, [dataURL]);

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;