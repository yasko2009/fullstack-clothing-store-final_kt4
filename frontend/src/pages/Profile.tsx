import { useEffect, useState } from "react";
import api from "../api/api";

interface UserProfile {
  id: number;
  email: string;
  name: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get<UserProfile>("/api/profile");

        console.log("Profile response:", response.data);

        setUser(response.data);
      } catch (error) {
        console.error("Profile error:", error);
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-gray-600">Loading profile...</p>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-red-600">
          {error || "Profile not found."}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Profile
        </h1>

        <div className="mt-8 space-y-5">
          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="mt-1 text-lg font-medium text-gray-900">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="mt-1 text-lg font-medium text-gray-900">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              User ID
            </p>

            <p className="mt-1 text-lg font-medium text-gray-900">
              {user.id}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Logout
        </button>
      </div>
    </main>
  );
}