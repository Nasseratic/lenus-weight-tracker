import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <>
      <nav className="w-full flex relative justify-between items-center mx-auto px-8 h-20 z-10">
        <div className="inline-flex">
          <Link className="_o6689fn" to="/">
            <div className="hidden md:block">
              <img
                className="filter invert"
                style={{ maxWidth: 170 }}
                alt="lenus"
                src="https://lenusehealth.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGbGVudXNlaGVhbHRoLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMSUyRjA1JTJGbG9nby13aGl0ZS5wbmcmY2FjaGVNYXJrZXI9MTYyMjUzODcxMy0xNDg1JnRva2VuPTU3ZTczZWUyNzkyODgzNjc.q.png"
              />
            </div>
            <div className="block md:hidden">
              <img
                className="filter invert"
                style={{ maxWidth: 50 }}
                alt="lenus"
                src="https://lenusehealth.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGbGVudXNlaGVhbHRoLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMSUyRjA1JTJGbG9nby13aGl0ZS5wbmcmY2FjaGVNYXJrZXI9MTYyMjUzODcxMy0xNDg1JnRva2VuPTU3ZTczZWUyNzkyODgzNjc.q.png"
              />
            </div>
          </Link>
        </div>
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            {isAuthenticated && (
              <div className="flex mr-4 items-center">
                <Link
                  className="inline-block focus:outline-none border-gray-300 border py-2 px-3 hover:bg-green-500 hover:shadow-lg hover:text-white hover:font-bold rounded-full"
                  to="/new"
                >
                  <div className="flex items-center  relative cursor-pointer whitespace-nowrap">
                    <FaPlus />
                    <span className="mx-3">Add New Measurement</span>
                  </div>
                </Link>
              </div>
            )}
            {!isAuthenticated && !isLoading && (
              <button
                type="button"
                onClick={() => loginWithRedirect()}
                className="flex focus:border-none items-center relative py-2 px-3 mx-5 border border-gray-300 rounded-full hover:shadow-lg"
              >
                <span className="px-2">Login</span>
              </button>
            )}

            <div className="block">
              <div className="inline-block relative">
                {isAuthenticated && (
                  <button
                    type="button"
                    className="flex focus:border-none items-center relative py-2 px-3  border border-gray-300 rounded-full hover:shadow-lg"
                  >
                    <span className="px-2">{user?.name}</span>
                    <div className="block h-7 w-7">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "100%",
                          width: "100%",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {isAuthenticated && (
              <button
                type="button"
                onClick={() =>
                  logout({
                    returnTo: window.location.origin,
                  })
                }
                className="flex focus:border-none items-center relative py-2 px-3 mx-5 border border-gray-300 rounded-full hover:shadow-lg"
              >
                <span className="px-2">Logout</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
