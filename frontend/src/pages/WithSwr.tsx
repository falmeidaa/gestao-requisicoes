import useSWR from "swr";
import { axiosService } from "../services/infra";
import { Company } from "../components/Company";

type Company = {
  id: string;
  name: string;
};

export const WithSwr = () => {
  const getCompanyListFetcher = async (url: string) => {
    const res = await axiosService.get(url);
    return res.data;
  };

  const { data, isLoading } = useSWR<Company[]>(
    "/companies",
    getCompanyListFetcher,
    {
      // dedupingInterval: 100000000
    }
  );

  return (
    <div className="flex h-full w-6/12 justify-start flex-col overflow-auto max-h-96 border-2 border-gray-400 bg-gray-500 py-4 px-4 rounded-2xl">
      {isLoading && <div  className="text-gray-100">Carregando...</div>}
      {!isLoading && (
        <>
          {data?.map((company) => (
            <Company key={company.id} name={company.name}/>
          ))}
          {data?.length === 0 && (
            <h5 className="text-gray-100">Sem conteúdo</h5>
          )}
        </>
      )}
    </div>
  );
};
