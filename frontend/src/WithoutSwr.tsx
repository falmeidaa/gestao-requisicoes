import { useEffect, useState } from "react";
import { axiosService } from "./infra";

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
    <div>
      <h2>Without Swr</h2>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <>
          {companyState?.map((company) => (
            <div key={company.id}>{company.name}</div>
          ))}
        </>
      )}
    </div>
  );
};
