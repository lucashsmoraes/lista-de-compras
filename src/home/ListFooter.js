import React from 'react';

const ListFooter = (props) => {
    return (
        <div className="list-footer">
        <p> 01/01/2019</p>
        <p>R$ {props.total}</p>
      </div>
    );
};

export default ListFooter;