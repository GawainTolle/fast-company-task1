import React from "react";

const SearchStatus = ({ users }) => {
     if (users.length === 0) {
          return <div className="btn btn-danger">Никто с тобой не тусанет</div>;
     } else if (users.length === 3 || users.length === 2 || users.length === 4) {
          return <div className="btn btn-primary">{`${users.length} человека туснет с тобой сегодня`}</div>;
     }
     return <div className="btn btn-primary ">{`${users.length} человек туснет с тобой сегодня`}</div>;
};
export default SearchStatus;
