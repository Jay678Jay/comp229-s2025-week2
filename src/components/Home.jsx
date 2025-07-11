// File Name: Home.jsx
// Student Name: Jongwon Lee
// Student ID: 401380980
// Date: May 18, 2025

import { useState, useEffect } from "react";

// Home page with welcome message 
export default function Home() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(dataFromServer => setData(dataFromServer))
    }, []);



    return (
    <div>
        <h1>Home</h1>
        <p style={{ fontSize: '30px' }}><strong>Welcome to my portfolio!</strong></p>
        <p style={{ fontSize: '20px' }}>This portfolio showcases my skills and projects. As a student, my mission is to apply what I learn to build functional, user-friendly applications and to grow as a developer by continuous learning and hands on experience.</p>
        <h2>{data && <p>{data.message}</p>}</h2>
    </div>
)
}