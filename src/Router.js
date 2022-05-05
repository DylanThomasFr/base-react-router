import {Navigate, Route, Routes, Link} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
import React from "react";

export default function Router() {
    return (
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
    )
}