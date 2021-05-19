import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Form() {
    // API url
    const url = "/post/data"
    const [data, setData] = useState({
        email: "",
        note: ""
    })

    function submit(e) {
        e.preventDefault();
        // Appel API with axios
        Axios.post(url, {
            email: data.email,
            note: data.note
        })
            .then(res => {
                window.location.reload(false);
            })
    }

    function handle(e) {
        // Get form body with ...
        const newdata = { ...data }
        // Get values froms id for each input
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    // Render elements on From module
    // onChange detects when the value of an input change then handle it
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

// Export module to be use in other programs
export default Form;