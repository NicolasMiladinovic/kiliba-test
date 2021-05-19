import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

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
                window.location.reload(false);
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return (
        <div className="Form">
            <form onSubmit={(e) => submit(e)}>
                <div>
                    <label>
                        Email :
          <input onChange={(e) => handle(e)} id="email" value={data.email} type="text" name="email"></input>
                    </label>
                </div>
                <div>
                    <label>
                        Note :
          <input onChange={(e) => handle(e)} id="note" value={data.note} type="number" name="note"></input>
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;