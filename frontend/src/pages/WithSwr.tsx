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
    <div>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <>
          {data?.map((company) => (
            <Company key={company.id} name={company.name}/>
          ))}
          {data?.length === 0 && (
            <h5>Sem conteúdo</h5>
          )}
        </>
      )}
    </div>
  );
};
