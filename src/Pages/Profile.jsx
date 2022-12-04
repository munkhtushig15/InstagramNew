import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Loading from "../Components/Loading";
const Profile = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getDataById = async (id) => {
    setIsLoading(true);
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    setData(response.data);
    setIsLoading(false);
  };
  

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="profileContainer">
          <div className="mainContainer">
            <header>
              <div className="partOne">
                <img
                  className="zuragProfile"
                  src={data.image}
                  alt={data.image}
                />
              </div>
              <div className="partTwo">
                <div className="aaaa">
                  <span>{data.maidenName}</span>
                  <button>Following</button>
                  <button>Message</button>
                  <button>
                    <img
                      className="zurag"
                      src="https://cdn-icons-png.flaticon.com/512/748/748137.png"
                      alt=".!.."
                    />
                  </button>
                </div>
                <div className="aaab">
                  <span>
                    <strong>{data.age}</strong> posts
                    
                  </span>
                  <span>
                    <strong>{data.height}K</strong> followers
                  </span>
                  <span>
                    <strong>{data.weight}K</strong> following
                  </span>
                </div>
                <div>
                  <span>{data.firstName}</span>
                  <span>{data.email}</span>
                </div>
              </div>
            </header>
            <hr />
            <div className="posts">
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
