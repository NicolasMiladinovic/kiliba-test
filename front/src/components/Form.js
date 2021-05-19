import React, { useState } from 'react'
import Axios from 'axios'

function Form() {
    const url = "/post/data"
    const [data, setData] = useState({
        email: "",
        note: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            note: data.note
        })
            .then(res => {
                console.log(res.data);
                window.location.reload(false);
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <label>
                    Email :
          <input onChange={(e) => handle(e)} id="email" value={data.email} type="text" name="email"></input>
                </label>
                <label>
                    Note :
          <input onChange={(e) => handle(e)} id="note" value={data.note} type="number" name="note"></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;