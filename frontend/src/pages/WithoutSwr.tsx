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
    <div className="flex h-full w-full justify-start flex-col overflow-auto max-h-96">
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <>
          {companyState?.map((company) => (
            <div key={company.id}>{company.name}</div>
          ))}
          {companyState.length === 0 && (
            <h5>Sem conteúdo</h5>
          )}
        </>
      )}
    </div>
  );
};
