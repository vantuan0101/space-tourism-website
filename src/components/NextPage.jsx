import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

NextPage.propTypes = {
    
};

function NextPage(props) {
    const {pathNextPage} =props;
    return (
        <div>
            <Link to={pathNextPage}>Next Page</Link>
        </div>
    );
}

export default NextPage;