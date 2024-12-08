import React from 'react';
import Data from "./data.json";
function App() {
    return (
        <div className="App">
            <div className='posts'>
            {Data.map(post => {

                return (

                    <div key={post.id}>
                        <h3>{post.name}</h3>
                        <p>{post.price}</p>
                    </div>


                )
            }
            )};
            </div>
        </div>
    )
};

export default App;
