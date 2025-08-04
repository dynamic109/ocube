import { useEffect, useState } from 'react';

 function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('user data');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className="user-profile">

      <h2 className="profile-name">{userData.name}</h2>
      <p className="profile-email">{userData.email}</p>
       <p className="profile-email">{userData.phonenumber}</p>
  
    </div>
  );
}


export default UserProfile;