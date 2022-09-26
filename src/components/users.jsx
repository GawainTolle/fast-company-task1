import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
     // console.log(users, "users");
     // console.log(rest, "rest");
     return (
          <>
               (
               <table className="table">
                    <thead>
                         <tr>
                              <th scope="col">Имя</th>
                              <th scope="col">Качество</th>
                              <th scope="col">Профессия</th>
                              <th scope="col">Встретился, раз</th>
                              <th scope="col">Оценка</th>
                         </tr>
                    </thead>
                    <tbody>
                         {users.map((user) => (
                              <User {...user} {...rest} />
                         ))}
                    </tbody>
               </table>
               )
          </>
     );
};

export default Users;
