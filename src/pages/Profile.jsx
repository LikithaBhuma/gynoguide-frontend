import React from "react";

const Profile = () => {

const user = JSON.parse(localStorage.getItem("user"));

return (

<div className="container py-5">

<h2>My Profile</h2>

<hr/>

<h5>Name</h5>

<p>{user?.name}</p>

<h5>Email</h5>

<p>{user?.email}</p>

</div>

);

};

export default Profile;