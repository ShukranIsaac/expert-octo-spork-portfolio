import {createContext, useState} from 'react';

const DataItemsContext = createContext();

/**
 * Method allows having our data in a centralised state to be accessed by different components
 * 
 * @param {*} param0 
 * @returns 
 */
const DataItemsProvider = ({children}) => {

    const [dataItems, setDataItems] = useState([]);

    const refreshDataItems = async () => {
        try {
            const res = await fetch('/api/me');
            const latestDataItems = await res.json();
            setDataItems(latestDataItems);
        } catch(e) {
            console.error(e)
        }
    }

    return (
        <DataItemsContext.Provider
            value={{
                dataItems,
                setDataItems,
                refreshDataItems
            }}
        >
            {children}
        </DataItemsContext.Provider>
    );
}

export {DataItemsProvider, DataItemsContext}