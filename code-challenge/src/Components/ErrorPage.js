import React from 'react';
import '../css/styles.css';

function ErrorPage() {
    return (
        <div className="container">
            <div id="errorMessage">
                The username and/or password you entered is incorrect. Please press the back arrow and try again.
            </div>
        </div>
    )
};

export default ErrorPage;