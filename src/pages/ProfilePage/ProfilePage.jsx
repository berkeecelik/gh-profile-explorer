import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { userName } = useParams();

  return <div>{userName}</div>;
}

export default ProfilePage;
