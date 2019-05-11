import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
        <div className="jumbotron">
            <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Search</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a Book"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
);

export default SearchBar;