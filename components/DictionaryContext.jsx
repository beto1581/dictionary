import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DictionaryContext = createContext();

export const useDictionaryContext = () => {
    return useContext(DictionaryContext);
};

export const DictionaryProvider = ({ children }) => {
    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchDefinitions = async (word) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setDefinitions(response.data);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching definitions:', error);
            setLoading(false);
        }
    };

    return (
        <DictionaryContext.Provider value={{ definitions, loading, fetchDefinitions }}>
            {children}
        </DictionaryContext.Provider>
    );
};
