import { useAuth } from "../../../Context";

const UserProfile = () => {
  const { userData } = useAuth();

  if (!userData) return <p>No user data found</p>;


  const profilePicUrl = userData.profilePicture
    ? `https://coube-backend.vercel.app/uploads/${userData.profilePicture}`
    : null;
return (
  <div>
    <div className=" p-4 shadow  rounded flex items-center gap-4">
      {profilePicUrl ? (

        <img
          src={profilePicUrl}
          alt={`${userData.name}'s profile`}
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (

        <div className="w-16 h-16 rounded-full bg-white border border-gray-600"></div>
      )}

      <div className="">
        <h2 className="text-xl font-bold">Welcome, {userData.name}</h2>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  </div>
);
}

export default UserProfile;
