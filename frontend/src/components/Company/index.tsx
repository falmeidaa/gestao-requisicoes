import companyIcon from '../../assets/company.png'

interface ICompany {
    name: string;
}

export const Company = ({name}: ICompany) => {
    return (
        <div className='flex items-center mt-2 w-full text-gray-100'>
            <img src={companyIcon} className='w-6 h-6 fill-gray-100 mr-4'/>
            <span>{name}</span>
        </div>
    )
}