import React, { Fragment } from 'react';

const BtnLoad = (props) => {
    return (
        <Fragment>
            {(props.isLoading) ?
                <p className="text-center font-weight-bold">Loading...</p>
            : (props.error) ?
                <p className="text-center text-uppercase text-danger">An error occured!</p>
            :
                <button href="#" className="btn btn-info btn-block btn-lg" onClick={props.click}>Load More</button>}
        </Fragment>
    )
}

export default BtnLoad;