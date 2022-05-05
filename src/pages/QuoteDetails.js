import React from "react"
import {useParams, Outlet} from "react-router-dom"
import {useEffect} from "react"
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from "../hooks/use-http"
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function QuoteDetails() {
    const params = useParams()
    const {sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true)
    const {id} = params

    useEffect(() => {
        sendRequest(id)
    }, [sendRequest, id]);

    if(status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if(error) {
        return <p className="centered focused">{error}</p>
    }

    if(!quote) {
        return <p>No quote found</p>
    }

    return (
        <React.Fragment>
            <HighlightedQuote 
                text={quote.text}
                author={quote.author}
            />
            <Outlet />
        </React.Fragment>
        
        
    )
}