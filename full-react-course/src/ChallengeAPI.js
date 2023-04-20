import React, { useState, useEffect } from 'react'

const ChallengeAPI = () => {
    // Constants
    const API_URL = "https://jsonplaceholder.typicode.com";

    // State variables
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch posts items from JSON placeholder API when page loads
    useEffect(() => {
        fetchItems("users");
    }, [])

    // Helper method to fetch items from JSONplaceholder API
    const fetchItems = async (endpoint) => {
        try {
            const response = await fetch(`${API_URL}/${endpoint}`);

            // If the response is not OK, throw an error
            if (!response.ok) throw Error("Failed to fetch items");

            // Get the fetched items from the API
            const data = await response.json();

            setItems(data);
        } catch (err) {
            setFetchError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    // Button handler for changing api endpoint and fetching new items
    const buttonHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        // Fetch new items when the button is clicked
        fetchItems(e.target.innerText);
    }

    return (
        <div className="container">
            <div className="buttonContainer">
                <button autoFocus onClick={(e) => buttonHandler(e)}>users</button>
                <button onClick={(e) => buttonHandler(e)}>posts</button>
                <button onClick={(e) => buttonHandler(e)}>comments</button>
            </div>
            {isLoading && <p>Loading...</p>}
            {fetchError && <p>{fetchError}</p>}
            {!fetchError && !isLoading &&
                <table>
                    <tbody>
                        {items.map(item => {
                            return (
                                <tr key={item.id}>
                                    {Object.entries(item).map(([key, value]) => {
                                        return (
                                            <td key={key}>{JSON.stringify(value)}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
        </div>
    )
}

export default ChallengeAPI