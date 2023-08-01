import { useState } from "react";

export const CreateCompany = () => {
    const [name, setName] = useState('');

    const onSubmit = () => {
        console.log(name)
    }

  return (
    <form onSubmit={onSubmit} className="flex h-full w-3/12 justify-start flex-col overflow-auto max-h-96 ">
        <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">Nome da empresa</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nome da empresa" onChange={(e) => setName(e.target.value)} value={name}/>
        <button type="submit" className={`px-6 w-full mt-4 py-3 transition-shadow duration-200 self-center ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-md bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover`}>
            Criar
        </button>
    </form>
  );
};
