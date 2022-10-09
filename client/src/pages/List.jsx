import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const List = () => {
    return (
        <div>
            <Navigation />
            <Header type="list" />
        </div>
    );
};

export default List;