import { Mic, SearchRounded } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Search.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) { // true or false doesnt change anything 
    //  because we are talking about whether this prop is passed or not;
    // and  {true or false} isnt hideButtons' value

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();     //prevent refresh
        console.log('you searched for : ', input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })

        //do something with the input
        navigate('/search');

    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchRounded className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Mic />
            </div>


            {!hideButtons ? ( //if prop (hideButtons) not passed, then display the buttons else not
                <div className="search__buttons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky!</Button>
                </div>
            ) : (
                <div className="search__buttons search__buttonsHidden ">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky!</Button>
                </div>
            )

            }

        </form>
    )
}

export default Search;
