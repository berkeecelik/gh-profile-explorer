import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageBase from "../../components/ProfilePageBase/ProfilePageBase";
import ProfilePageResult from "../../components/ProfilePageResult/ProfilePageResult";
import useFetchRepoData from "../../useFetchRepoData";
import useFetchUserData from "../../useFetchUserData";
import "./ProfilePage.css";

function ProfilePage() {
  const { userName } = useParams();
  const { data, loading } = useFetchUserData(userName);
  const { repoData, repoLoading } = useFetchRepoData(userName);

  if (!loading && !repoLoading) {
    return (
      <div className="profile-page">
        <ProfilePageResult
          userData={data}
          repoData={repoData}
          repoLoading={repoLoading}
        />
      </div>
    );
  } else {
    return (
      <div className="profile-page">
        <ProfilePageBase />
      </div>
    );
  }
}

export default ProfilePage;
