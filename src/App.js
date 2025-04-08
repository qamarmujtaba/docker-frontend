import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Change the URL to a relative path
        fetch("/api")
            .then((res) => res.text())
            .then((data) => setMessage(data));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>New Frontend is working! Through Pipeline</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;

