import React from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import classes from './FormEditButton.module.css';
const formeditbutton = (props) =>{

    return(
        <Auxilary>
            <h3>Edit Your Category Please...</h3>
            <p>Its Your Choice</p>
            <ul>
                <input placeholder = "Edit Your Category Please"></input>
            </ul>
            <div><button>Cancel</button>
                 <button>Edit</button>
            </div>
            
        </Auxilary>
    );
}

export default formeditbutton;