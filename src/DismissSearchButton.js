import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DismissSearchButton extends Component {
    render() {
        const {onResetSearch}=this.props;
        return (
            <Link to="/">
                <button className="close-search" onClick={onResetSearch}>
                    Dismiss
                </button>
            </Link>
        );
    }

}

export default DismissSearchButton;