import React, { FC, useEffect, useState } from "react";

interface User {
  id: number;
  login: string;
}

const UserAccount: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://example.com/api/user");
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Account</h2>
      {user ? (
        <div>
          <p>Username: {user.login}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserAccount;
