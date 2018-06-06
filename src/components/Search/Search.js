import React, { Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchForm } from './SearchForm';
import SearchResultsReactTable from './SearchResultsReactTable';
import {makeApiRequest} from '../utils/api';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            results: [],
            didSearchReturnResults: false,
            firstSearch: true,
            url: "not updated url"
        }
        this.createSearchUrl = this.createSearchUrl.bind(this);
        this.searchPlayerFromApi = this.searchPlayerFromApi.bind(this);
    }

    searchPlayerFromApi() {
        console.log("logging the URl, needs to be AFTer teh state updates!", this.state.url)
        makeApiRequest(this.state.url)
            .then((response) => {
                this.setState({
                    results: response.data.value,
                    firstSearch: false,
                    didSearchReturnResults: response.data.value.length === 0 ? false : true
                })
            })
            .catch((error) => {
                console.log("In searchPlayerFromApi url:", this.state.url)
                console.log(error)
                return []
            })

    }

    createSearchUrl(query) {
        this.setState({
            url: query,
         },
        () => this.searchPlayerFromApi()
        )
        //this.searchPlayerFromApi(this.state.url)
    }

    componentDidMount() {
        const url = `players/melee/?OrderBy=tag&pageNumber=1&pageSize=1500`
        makeApiRequest(url)
            .then((response) => {
                this.setState({
                    players: response.data.value
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <SearchForm players={this.state.players}
                            searchPlayers={this.createSearchUrl}/>
                
                {(this.state.didSearchReturnResults || this.state.firstSearch) ? 
                <div>
                <h1>{(!this.state.firstSearch) ? <div>{this.state.results.length} player(s) found!</div> : null}</h1> 
                {/* <SearchResults results={this.state.results} /> */}
                <SearchResultsReactTable results={this.state.results} /> 
                </div> :
                <div>
                <h1>No players found!</h1>
                <SearchResultsReactTable results={this.state.results} /> 
                </div>
                }
            </div>
        )
    }
}

export default Search;
