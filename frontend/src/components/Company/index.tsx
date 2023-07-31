import companyIcon from '../../assets/company.png'

interface ICompany {
    name: string;
}

export const Company = ({name}: ICompany) => {
    return (
        <div className='flex items-center mt-2 w-full'>
            <img src={companyIcon} className='w-8 h-8'/>
            <span>{name}</span>
        </div>
    )
}