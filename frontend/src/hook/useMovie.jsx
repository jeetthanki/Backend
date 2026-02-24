import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const useMovie = () => {
    const context = useContext(MovieContext);
    if(!context) {
        throw new Error('useMovie must be used within MovieProvider');
    }
    return context;
};

export default useMovie;