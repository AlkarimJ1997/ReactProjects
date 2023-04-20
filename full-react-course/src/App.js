import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import apiRequest from './apiRequest';

function App() {
    // Constants
    const API_URL = "http://localhost:8000/items";

    // State variables
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch items from JSON-Server API when page loads
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);

                // If the response is not OK, throw an error
                if (!response.ok) throw Error("Failed to fetch items");

                // Get the fetched items from the API
                const data = await response.json();

                setItems(data);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        // Fetch items when the page loads
        setTimeout(() => {
            fetchItems();
        }, 2000);
    }, [])

    // Handle checking of items
    const handleCheck = async id => {
        const updatedItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);

        setItems(updatedItems);

        // Set api options and do the PATCH request
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ checked: updatedItems.find(item => item.id === id).checked })
        }

        const result = await apiRequest(`${API_URL}/${id}`, options);

        // If there is an error, set it to the state
        if (result) setFetchError(result);
    }

    // Handle deleting of items
    const handleDelete = async id => {
        const updatedItems = items.filter(item => item.id !== id);

        setItems(updatedItems);

        // Set api options and do the DELETE request
        const options = {
            method: "DELETE"
        }

        const result = await apiRequest(`${API_URL}/${id}`, options);

        // If there is an error, set it to the state
        if (result) setFetchError(result);
    }

    // Handle adding of items
    const handleSubmit = async e => {
        e.preventDefault();

        // If there is no text in the input, do nothing
        if (!newItem) return;

        const newItemObj = {
            id: items.length ? items[items.length - 1].id + 1 : 1,
            checked: false,
            item: newItem
        }

        setItems([...items, newItemObj]);

        // Set api options and do the POST request
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItemObj)
        }

        const result = await apiRequest(API_URL, options);

        // If there is an error, set it to the state
        if (result) setFetchError(result);

        setNewItem("");
    }

    return (
        <div className="App">
            <Header title="Grocery List" />
            <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            <SearchItem search={search} setSearch={setSearch} />
            <main>
                {isLoading && <p>Loading...</p>}
                {fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}
                {!fetchError && !isLoading && <Content
                    items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />}
            </main>
            <Footer itemCount={items.length} />
        </div>
    );
}

export default App;
