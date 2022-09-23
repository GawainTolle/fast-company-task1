import React, { useState } from "react";
import api from "../api";

const Users = () => {
     const [users, setUsers] = useState(api.users.fetchAll());
     console.log(users);
     const handleDelete = (userId) => {
          const newUsers = users.filter((person) => person.userId !== userId);
          setUsers(newUsers);
     };
     const getUser = users.map((user) => {
          return user;
     });
     // console.log("getuser");
     const renderPhrase = (number) => {
          return (
               getUser.length && (
                    <ul>
                         {users.map((user) => (
                              <li className="btn btn-primary btn-sm m-2">{user.length}</li>
                         ))}
                    </ul>
               )
          );
     };
     const desingQualities = () => {
          // let desing = "badge m-2";
          const retriveDesing = users.map((user) => {
               return user.qualities.map((c) => {
                    return c.color;
               });
          });
          return `badge bg-${retriveDesing}`;
     };
     return (
          <>
               <table class="table">
                    <thead>
                         {renderPhrase()}
                         <tr>
                              <th scope="col">Имя</th>
                              <th scope="col">Качество</th>
                              <th scope="col">Профессия</th>
                              <th scope="col">Встретился, раз</th>
                              <th scope="col">Оценка</th>
                         </tr>
                    </thead>
                    <tbody>
                         {users.map((user) => {
                              return (
                                   <tr>
                                        <td>{user.name}</td>
                                        <td className={desingQualities}>
                                             {user.qualities.map((u) => {
                                                  return u.name;
                                             })}
                                        </td>
                                        <td>{user.profession.name}</td>
                                        <td>{user.completedMeetings}</td>
                                        <td>{user.rate}</td>
                                        <td>
                                             {" "}
                                             <button className="btn btn-danger btn-sm m-2" onClick={handleDelete}>
                                                  delete
                                             </button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </>
     );
};
export default Users;
