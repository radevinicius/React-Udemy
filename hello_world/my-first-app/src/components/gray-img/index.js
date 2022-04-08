import React, {Fragment} from "react";

const Planetas = (props) => {
    return (
        <Fragment>
            <img className="planeta" src={props.img_url}></img>
        </Fragment>
    )
}

export default Planetas;