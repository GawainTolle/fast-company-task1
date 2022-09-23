import React, { useState } from "react";
import api from "../api";

const Users = (props) => {
     const [users, setUsers] = useState(api.users.fetchAll());
     const handleDelete = (userId) => {
          const newUsers = users.filter((person) => person.id !== userId);
          setUsers(newUsers);
     };
     const renderPhrase = (number) => {};
     return (
          <>
               <table class="table">
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
                         <tr>
                              <td>{users.name}</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr>
                         <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                         </tr>
                         <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                         </tr>
                    </tbody>
               </table>
          </>
     );
};
export default Users;
