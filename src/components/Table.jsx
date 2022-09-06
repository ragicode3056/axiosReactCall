import axios from 'axios';
import React, { useState, useEffect } from 'react';

 
export const Table = () => {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/posts';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        axios.get(URL)
           
            .then((response) => {
                console.log(response.data);
                getData(response.data);
            })
 
    }
 
    return (
        <>
         
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
