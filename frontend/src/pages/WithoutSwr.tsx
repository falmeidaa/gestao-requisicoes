import { useEffect, useState } from "react";
import { axiosService } from "../services/infra";
import { Company } from "../components/Company";

type Company = {
  id: string;
  name: string;
};

export const WithoutSwr = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companyState, setCompanyState] = useState<Company[]>([]);

  const getCompanyListFetcher = (url: string) => {
    return axiosService.get(url).then((res) => {
      setCompanyState(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCompanyListFetcher("/companies");
  }, []);

  return (
    <div className="flex h-full w-6/12 justify-start flex-col overflow-auto max-h-96 border-2 border-gray-400 bg-gray-500 py-4 px-4 rounded-2xl">
      {isLoading && <div className="text-gray-100">Carregando...</div>}
      {!isLoading && (
        <>
          {companyState?.map((company) => (
            <Company key={company.id} name={company.name}/>
          ))}
          {companyState.length === 0 && (
            <h5 className="text-gray-100">Sem conteúdo</h5>
          )}
        </>
      )}
    </div>
  );
};
