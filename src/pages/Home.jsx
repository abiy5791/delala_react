import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "../api/axios";
dayjs.extend(relativeTime);

const Home = () => {
  const [props, setProps] = useState([]);
  const [search, setSearch] = useState("");
  const getProps = async () => {
    await axios.get("api/prop").then((response) => {
      setProps(response.data);
    });
  };
  useEffect(() => {
    getProps();
  }, []);

  return (
    <>
      <section className="py-1 dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:flex-row">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-5xl font-bold leadi">Welcom To Delala.com</h1>
            <p className="text-lg">
              "Effortlessly Find, Rent, or Buy Properties with our Revolutionary
              Broker App"
            </p>
          </div>
        </div>
      </section>

      <div class="max-w-3xl mx-auto px-5">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4 px-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold leadi">Get More You Need</h1>
            <p className="text-lg">
              Search what you need to find out about the latest and greatest
              news about just about everything!
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
            <div className="flex flex-row">
              <form onChange={(e) => setSearch(e.target.value)}>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="py-16">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
            {props
              .filter((prop) => {
                return search.toLowerCase() === ""
                  ? prop
                  : prop.title?.toLowerCase().includes(search) ||
                      prop.name?.toLowerCase().includes(search) ||
                      prop.skills?.toLowerCase().includes(search) ||
                      prop.Gender?.toLowerCase().includes(search) ||
                      prop.age?.toString().includes(search) ||
                      prop.price?.toString().includes(search) ||
                      prop.type?.toString().includes(search) ||
                      prop.model?.toLowerCase().includes(search) ||
                      prop.status?.toLowerCase().includes(search) ||
                      prop.location?.toLowerCase().includes(search) ||
                      prop.make?.toLowerCase().includes(search) ||
                      prop.color?.toLowerCase().includes(search) ||
                      prop.mileage?.toLowerCase().includes(search) ||
                      prop.salary?.toString().toLowerCase().includes(search);

                // data.mile.toLowerCase().includes(search);
              })
              .map((prop) => {
                return (
                  <div class="group space-y-6 inline-block w-full">
                    {/* <img
                      src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                      alt="art cover"
                      loading="lazy"
                      width="1000"
                      height="667"
                      class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                    /> */}

                    {prop.image && (
                      <img
                        class="h-40 w-60 rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        loading="lazy"
                        width="100"
                        heighimageIndext="667"
                        src={`http://127.0.0.1:8000/${
                          prop.image.split("|")[0]
                        }`}
                        alt={`prop Image `}
                      />
                    )}
                    <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
                      <Link to={`${prop.model_type}/${prop.id}`}>
                        {prop.title}
                      </Link>
                    </h3>
                    {/* <p class="text-gray-600 dark:text-gray-300 w-full">
                      Finding the right open source project for your first
                      contribution can feel daunting. It took me years to find a
                      repository that fit my skills and interests.
                    </p> */}
                    <div class="flex gap-6 items-center">
                      {/* <a
                        href="#"
                        class="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          class="w-8 h-8 object-cover rounded-full"
                          src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                          alt=""
                        ></img>
                        <span class="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          Posted:
                        </span>
                      </a>
                      <span class="w-max block font-light text-gray-500 sm:mt-0">
                       
                      </span> */}
                      <div class="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Posted: {dayjs(prop.created_at).fromNow()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
