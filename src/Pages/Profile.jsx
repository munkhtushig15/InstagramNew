import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
  const params = useParams();
  const [data, setData] = useState();
  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div>
      {data && (
        <div className="userProfileMun">
          <center>
            <p>{data.firstName}</p>
            <p>{data.lastName}</p>
            <p>{data.maidenName}</p>
            <p>{data.age}</p>
          </center>
        </div>
      )}
    </div>
  );
};
export default Profile;
