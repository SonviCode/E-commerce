import React from "react";

const Filter = () => {
  return (
    <div className="flex py-5 justify-between relative items-center">
      <div className="flex gap-2">
        <div className=" rounded-lg border bg-gray-300 w-fit text-gray-700 py-1 px-2 relative">
          <input
            type="checkbox"
            className="peer absolute top-0 left-0 right-0 bottom-0 peer appearance-none cursor-pointer"
          />
          <span>Tailles</span>{" "}
          <i className="fa-solid fa-chevron-down  pointer-events-none ml-1"></i>
          <ul className="peer-checked:flex  flex flex-col hidden absolute z-10 bg-white rounded-md w-full left-0 top-10 border border-gray-300 px-2">
            <li className="flex cursor-pointer">
              <input id="S" type="checkbox" />
              <label htmlFor="S">
                S
              </label>
            </li>
            <li className="flex">
              <input type="checkbox" />M
            </li>
            <li className="flex">
              <input type="checkbox" />L
            </li>
            <li className="flex">
              <input type="checkbox" />
              XL
            </li>
          </ul>
        </div>

        <div className=" rounded-lg border bg-gray-300 w-fit text-gray-700 py-1 px-2 relative">
          <input
            type="checkbox"
            className="peer absolute top-0 left-0 right-0 bottom-0 peer appearance-none cursor-pointer"
          />
          <span>Marque</span>{" "}
          <i className="fa-solid fa-chevron-down  pointer-events-none ml-1"></i>
          <ul className="peer-checked:flex flex flex-col hidden absolute z-10 bg-white rounded-md w-full left-0 top-10 border border-gray-300 px-2">
            <li className="flex">
              <input type="checkbox" />
              Quechua
            </li>
            <li className="flex">
              <input type="checkbox" />
              Lafuma
            </li>
            <li className="flex">
              <input type="checkbox" />
              Millet
            </li>
          </ul>
        </div>

        <div className="peer rounded-lg border bg-gray-300 w-fit text-gray-700 py-1 px-2 relative">
          <input
            type="checkbox"
            className="peer absolute top-0 left-0 right-0 bottom-0 peer appearance-none cursor-pointer"
          />
          <span>Sports</span>{" "}
          <i className="fa-solid fa-chevron-down  pointer-events-none ml-1 "></i>
          <ul className="peer-checked:flex flex flex-col hidden absolute  z-10 bg-white rounded-md w-full left-0 top-10 border border-gray-300 px-2">
            <li className="flex">
              <input type="checkbox" />
              Rando
            </li>
            <li className="flex">
              <input type="checkbox" />
              Vélo
            </li>
            <li className="flex">
              <input type="checkbox" />
              Alpinisme
            </li>
            <li className="flex">
              <input type="checkbox" />
              Détente
            </li>
          </ul>
        </div>

        <div className="rounded-lg border bg-gray-300 w-fit text-gray-700 py-1 px-2 relative ">
          <input
            type="checkbox"
            className="peer absolute top-0 left-0 right-0 bottom-0 peer appearance-none cursor-pointer"
          />
          <span>Sexe</span>{" "}
          <i className="fa-solid fa-chevron-down  pointer-events-none ml-1"></i>
          <ul className="peer-checked:flex hidden absolute flex flex-col  z-10 bg-white rounded-md w-full left-0 top-10 border border-gray-300 px-2">
            <li className="flex">
              <input type="checkbox" />
              Homme
            </li>
            <li className="flex">
              <input type="checkbox" />
              Femme
            </li>
          </ul>
        </div>

        <div className="rounded-lg border bg-gray-300 w-fit text-gray-700 py-1 px-2 relative ">
          <input
            type="checkbox"
            className="peer absolute top-0 left-0 right-0 bottom-0 peer appearance-none cursor-pointer"
          />

          <span>Prix</span>
          <i className="fa-solid fa-chevron-down  pointer-events-none ml-1"></i>
          <ul className="peer-checked:flex hidden absolute z-10 bg-white rounded-md w-full left-0 top-10 border border-gray-300 px-2">
            <li>
              <input type="range" />
            </li>
          </ul>
        </div>
      </div>

      <select className="rounded-md border border-gray-300 appearance-none w-fit bg-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer relative">
        <option>Les nouveautés</option>
        <option>Prix croissants</option>
        <option>Prix décroissants</option>
        <option>Les plus populaires</option>
      </select>
      <i className="fa-solid fa-chevron-down absolute pointer-events-none right-2"></i>
    </div>
  );
};

export default Filter;
