import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ _id, name, qualities, profession, completedMeetings, rate, onDelete, bookmark, onToggleBookMark }) => {
     console.log(bookmark, "usersbookmark");
     console.log(onToggleBookMark, "usersOntoggle");
     return (
          <tr>
               <td>{name}</td>
               <td>
                    {qualities.map((quality) => {
                         return <Qualitie key={quality._id} {...quality} />;
                    })}
               </td>
               <td>{profession.name}</td>
               <td>{completedMeetings}</td>
               <td>{rate}</td>
               <td>
                    <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
               </td>
               <td>
                    <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(_id)}>
                         delete{" "}
                    </button>
               </td>
          </tr>
     );
};
export default User;
