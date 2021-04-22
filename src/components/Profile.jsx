import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="text-center my-5">
      <h1>{user.userData.userName}</h1>
      <div className="card-header">
        <img
          src={user.userData.image}
          style={{ borderRadius: "50%" }}
          alt="photo_Profile"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Perfil de usuario</h5>
        <p className="card-text">{user.userData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
