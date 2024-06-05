import { useAuth } from '../../contexts/useAuth';

const LoggedInMenu = () => {
  const { user, logout } = useAuth(); // Get the current user from the context
  return (
    <div className="flex absolute justify-center">
      {user && (
        <div className="text-center align-middle p-4 text-txtdark absolute bg-bgcol border-bordercol border rounded-lg overflow-hidden">
          <div className="flex-col justify center">
            <p className="mx-4">
              Account: <span className="text-txtbright">{user.username}</span>
            </p>
            <button
              onClick={logout}
              className="flex items-center mx-4 mt-4 text-txtbright hover:bg-bordercol border-bordercol border-[1px] rounded-lg w-20 h-8 p-4 text-sm ml-6 overflow-hidden"
            >
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInMenu;
