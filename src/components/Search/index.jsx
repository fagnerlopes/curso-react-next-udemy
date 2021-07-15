import './styles.css';

export const Search = ({handleChange}) => {
    return (
        <div className="search-container">
            <input 
                onChange={handleChange} 
                type="search" 
                name="search" 
                id="search"
                placeholder="Type your search"
            />
        </div>
    );        
};