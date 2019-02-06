import React, { Component, Fragment } from 'react';

class InfiniteScroll extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){   
        window.addEventListener('scroll', this.onScroll.bind(this), false);
    }

    onScroll() {
        if (this.props.error || this.props.isLoading || !this.props.hasMore) return;
        if (window.innerHeight + window.scrollY === document.documentElement.offsetHeight) {
            this.props.fetchData();  
        }
    }

    render() {
        return (
            <Fragment>
                <div>{this.props.children}</div>
                {this.props.error &&
                    <div className="text-danger text-uppercase">An error occured, sorry(</div>
                }
                {this.props.isLoading &&
                <div className="d-block font-weight-bold text-center">Loading...</div>}
                {!this.props.hasMore &&
                <div className="d-block font-weight-bold text-center">You did it! You reached the end!</div>}
            </Fragment>
        )
    }
}

export default InfiniteScroll;