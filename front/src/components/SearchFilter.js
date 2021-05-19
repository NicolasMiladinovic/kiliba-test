import React, { useEffect, useState } from "react";
import "../App.css";
import axios from 'axios'


function Search() {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get('/post/');
            console.log(response.data);
            setUsers(response.data);
        }
        loadUsers();

    }, [])


    const onChangeHandler = (text) => {
        let matches = []
        if (text.length>0) {
            // Filter of data (source youtube)
            matches = users.filter(user=>{
                const regex = new RegExp(`${text}`,"gi");
                return user.email.match(regex);
            })
        }
        console.log('matches',matches);
        setSuggestions(matches);
        setText(text);
    }

    return (
        <div className="">
            <input type="text" 
                onChange={e => onChangeHandler(e.target.value)} />
            { suggestions && suggestions.map((suggestion, i) => <div style={{marginTop:10}} key={i}>{suggestion.email}</div>)}
        </div>
    );
}

export default Search;