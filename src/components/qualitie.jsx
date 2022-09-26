const Qualitie = ({ color, name, _id }) => {
     return (
          <li className={`btn btn-${color} btn-sm m-2`} key={_id}>
               {name}
          </li>
     );
};

export default Qualitie;
