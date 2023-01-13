import React from "react";

const SignUp = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-5 py-10"
    >
      <div>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="email"
          id="email"
          required
          placeholder="Saisissez votre adresse"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-bold">
          Mot de passe
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="password"
          id="password"
          required
          placeholder="Saisissez votre mot de passe"
        />
      </div>
      <div>
        <label htmlFor="prenom" className="font-bold">
          Prénom
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="text"
          id="prenom"
          required
          placeholder="Saisissez votre prénom"
        />
      </div>
      <div>
        <label htmlFor="nom" className="font-bold">
          Nom
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="text"
          id="nom"
          required
          placeholder="Saisissez votre nom"
        />
      </div>
      <div>
        <label htmlFor="date" className="font-bold">
          Date de naissance
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="date"
          id="date"
          required
          placeholder="JJ / MM / AAAA"
        />
      </div>
      <div>
        <label htmlFor="number" className="font-bold">
          Téléphone portable
        </label>
        <input
          className="w-full border-2 rounded-md p-2"
          type="number"
          id="number"
          required
          placeholder="Saisissez votre numéro de téléphone"
        />
      </div>
      <button className="rounded-md bg-gray-200 hover:bg-main w-max py-1 px-2 text-white duration-300">
        S&apos;inscrire
      </button>
    </form>
  );
};

export default SignUp;
