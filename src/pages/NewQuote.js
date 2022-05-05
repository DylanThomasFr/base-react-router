import {useEffect} from "react";
import { useNavigate } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'

import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api";

export default function NewQuote() {
    const {sendRequest, status} = useHttp(addQuote)
    const navigate = useNavigate()
    useEffect(() => {
        if(status === 'completed') {
            navigate('/quotes')
        }
    }, [status, navigate]);

    const addNewQuoteHandler = (quote) => {
        sendRequest(quote)
    }
    return (
        <QuoteForm
            onAddQuote={addNewQuoteHandler}
            isLoading={status === 'pending'}
        />
    )
}