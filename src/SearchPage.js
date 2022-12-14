import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
// import Response from './response';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import google_logo from './images/google_logo.jpg';
import Search from './Search'
import { Description, Image, LocalOffer, MoreVert, Room, SearchRounded } from '@material-ui/icons';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //LIVE API CALL
    const { data } = useGoogleSearch(term);

    //mock api call
    //const data = Response;
    // console.log(term);
    // console.log(data);

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to='/'>
                    <img className="searchPage__logo" src={google_logo} alt="google logo" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">

                        <div className="searchPage__optionsLeft">
                            <div className="searchPage_option">
                                <SearchRounded />
                                <Link to="all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage_option">
                                <Image />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <Room />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVert />
                                <Link to='/more'></Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage_option">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults}
                        results ({data?.searchInformation.formattedSearchTime} seconds)
                        for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchPage__resultImage"
                                            src={
                                                item.pagemap?.cse_image?.length > 0 &&
                                                item.pagemap?.cse_image[0]?.src
                                            }
                                            alt="search image"
                                        />
                                    )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet" >
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;


