export function MenuNav() {
  return (
    <div
      id="navbar-user"
      // className="hidden w-full md:flex md:items-center md:justify-between md:w-auto md:order-1"
      className="md:flex md:items-center md:justify-between md:w-auto md:order-1"
      // className="  flex items-center justify-between w-auto order-1"
      // style={{ backgroundColor: "tomato" }}
    >
      <ul
        // className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 border
        // border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white
        // dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"

        className="flex  flex-wrap space-x-8 font-medium p-4 p-0 mt-4 mt-0 border
            border-gray-100 rounded-lg bg-gray-50 border-0 bg-white
            dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
