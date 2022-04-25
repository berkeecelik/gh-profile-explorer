import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageBase from "../../components/ProfilePageBase/ProfilePageBase";
import ProfilePageError from "../../components/ProfilePageError/ProfilePageError";
import ProfilePageResult from "../../components/ProfilePageResult/ProfilePageResult";
import useFetchRepoData from "../../useFetchRepoData";
import useFetchUserData from "../../useFetchUserData";
import "./ProfilePage.css";

function ProfilePage() {
  const { userName } = useParams();
  const { data, loading, error } = useFetchUserData(userName);
  const { repoData, repoLoading, repoError } = useFetchRepoData(userName);

  if (!error || !repoError) {
    if (!loading && !repoLoading && data && repoData) {
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
  } else {
    return (
      <div className="profile-page">
        <ProfilePageError error={error} />
      </div>
    );
  }
}

export default ProfilePage;
