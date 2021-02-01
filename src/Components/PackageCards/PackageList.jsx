import React from 'react';
import PackageCard from './PackageCard';

const packagesOnline = [
    {
        price:'1000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'2000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'3000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'4000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'5000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    }
]

const PackageList = () => {
    return (
        <div className='bg-black white'>
            <div className='flex items-center mh4'> 
                <h1 className='none ph3 f3 mv0 tc pt2  btn btn-left pointer pl2 f2' href='#0'>Offline</h1>
                <h1 className='none ph3 f3 mv0 tc pt2  btn btn-left pointer pl2 f2' href='#0'>Online</h1>
            </div>
        <div className='flex justify-between items-center flex-wrap'>
            {
                packagesOnline.map(packageOl => 
                    <PackageCard packageOl={packageOl}/>
                )
            }
        </div>
        <div className='mt4 mb4 pb4'>
            <img src='https://t4.ftcdn.net/jpg/01/74/83/85/360_F_174838534_6utDVpn6xYZ7usgGVKtYoym6VrHi4Sj1.jpg' alt='offers'/>
        </div>
        </div>
    )
}

export default PackageList;