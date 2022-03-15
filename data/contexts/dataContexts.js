import { createContext, useEffect, useState } from 'react';

const DataItemsContext = createContext();

/**
 * Method allows having our data in a centralised state to be accessed by different components
 * 
 * @param {*} param0 
 * @returns 
 */
const DataItemsProvider = ({ children }) => {
    const [dataItems, setDataItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const refreshDataItems = async () => {
            setLoading(true)
            try {
                const res = await fetch('http://localhost:8080/v1/users/me', { method: 'GET' });
                const latestDataItems = await res.json();
                setDataItems(latestDataItems);
                setLoading(false)
            } catch (e) {
                setLoading(false)
                console.error(e)
            }
        }

        refreshDataItems()
    }, [])

    return (
        <DataItemsContext.Provider
            value={{
                dataItems,
                setDataItems, 
                loading
            }}
        >
            {children}
        </DataItemsContext.Provider>
    );
}

export { DataItemsProvider, DataItemsContext }