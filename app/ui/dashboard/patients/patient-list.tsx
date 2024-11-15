import Link from 'next/link';
export default function PatientList(patients: {
    id: string; 
    firstName: string; 
    middleName: string | null; 
    lastName: string; 
    dateCreated: Date; 
    dateOfBirth: Date; 
    sex: string; 
    assignedUser: string; 
}[]) {
    return (
        <ul className='block w-[50%] mx-auto mt-10 divide-y divide-hblue/[0.25] border-y border-hblue-light/[0.5] shadow-lg'>
        <li className='p-1 bg-hblue-light/[0.2] px-2'>
          <div className='flex col-2'>
            <p className='text-left w-[50%]'>Patient Name</p>
            <p className='text-right w-[50%]'>Date Added</p>
          </div>
        </li>  
          
        {patients.map(obj => {
          return(
            <li key={obj.id} className='px-3 py-1 hover:bg-hblue/[0.1]'>
              <Link href={`/patients/${obj.id}`}>
                <div className='flex col-2'>
                  <p className='text-left w-[50%]'>{obj.firstName} {obj.middleName && `${obj.middleName.substring(0,1)}.`} {obj.lastName}</p>
                  <p className='text-right w-[50%]'>{obj.dateCreated.toLocaleDateString()}</p>
                </div>
              </Link>
                
            </li>
          )
        })}
      </ul>
    )
}