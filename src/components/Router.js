import React, {Suspense} from 'react'

import {Navigate, Route, Routes, Link} from "react-router-dom"

import LoadingSpinner from "./UI/LoadingSpinner";

const AllQuotes = React.lazy(() => import("../pages/AllQuotes"))
const NewQuote = React.lazy(() => import("../pages/NewQuote"))
const QuoteDetails = React.lazy(() => import("../pages/QuoteDetails"))
const NotFound = React.lazy(() => import("../pages/NotFound"))
const Comments = React.lazy(() => import("./comments/Comments"))

export default function Router() {
    return (
        <Suspense fallback={
            <div className="centered">
                <LoadingSpinner />
            </div>
        }>
            <Routes>
                <Route exact path="/" element={<Navigate to="/quotes" />} />
                <Route exact path="/quotes" element={<AllQuotes />} />
                <Route path="/quotes/:id" element={<QuoteDetails />} >
                    <Route
                        path=''
                        element={
                            <div className="centered">
                                <Link className="btn--flat" to='comments'>Load comments</Link>
                            </div>
                        }
                    />
                    <Route
                        path='comments'
                        element={<Comments />}
                    />
                </Route>
                <Route path="/new-quote" element={<NewQuote />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}