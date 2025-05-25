import type { User } from "../types/types";

function Card({ user }: { user: User }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 max-w-md p-5 border border-gray-100 space-y-3">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-gray-800">
          {user.name.firstname} {user.name.lastname}
        </h2>
        <p className="text-gray-600 text-sm">Username: {user.username}</p>
        <p className="text-gray-600 text-sm">Email: {user.email}</p>
        <p className="text-gray-600 text-sm">Phone: {user.phone}</p>
      </div>

      <div className="border-t pt-3 space-y-1 text-sm text-gray-600">
        <h4 className="font-medium text-gray-700">Address</h4>
        <p>
          {user.address?.number} {user.address?.street}, {user.address?.city}, {user.address?.zipcode}
        </p>
        {user.address?.geolocation && (
          <p className="text-xs text-gray-500">
            Geo: Lat {user.address.geolocation.lat}, Long {user.address.geolocation.long}
          </p>
        )}
      </div>

      <div className="border-t pt-3 flex justify-between text-xs text-gray-400">
        <span>User ID: {user.id}</span>
        <span>Version: {user.__v}</span>
      </div>
    </div>
  );
}

export default Card;
