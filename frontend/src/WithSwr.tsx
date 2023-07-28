import useSWR from "swr";
import { axiosService } from "./infra";

type Company = {
  id: string;
  name: string;
};

export const WithtSwr = () => {
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
            <div key={company.id}>{company.name}</div>
          ))}
          <form>
            <label htmlFor="name">Nome</label>
            <input type="text" />
          </form>
        </>
      )}
    </div>
  );
};
