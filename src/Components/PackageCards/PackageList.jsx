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
        description : 'If it fits, If it fits,If it fits,If it fits,If it fits,If it fits,If it fits,If it fits,  i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    }
]
const packagesOffline = [
    {
        price:'4000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'6000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'8000',
        description : 'If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    },
    {
        price:'10000',
        description : 'If it fits, If it fits,If it fits,If it fits,If it fits,If it fits,If it fits,If it fits,  i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror'
    }
]

class PackageList extends React.Component {
    constructor(){
        super();
        this.state = {
            ol:'true'
        }
    }
    render(){

        const packageHandlerOl = () =>{
                this.setState({ol:'true'})
        }

        const packageHandlerOff = () =>{
                this.setState({ol:'false'})
        }
        return (
            <div className='mv5'>
            <div className='white' style={{backgroundColor:'#202020'}}>
                <h1 className='pt4 pl3'>Training</h1>
                <h1 className='pb4 pl3'>Services We Offer</h1>
            </div>
            <div className='shadow-2 mh6'>
                <div className='flex items-center mh4'> 
                    <h1 className='none ph3 f3 mv0 tc pt2  btn btn-left pointer pl2 f2' href='#0' onClick={packageHandlerOl}>Online</h1>
                    <h1 className='none ph3 f3 mv0 tc pt2  btn btn-left pointer pl2 f2' href='#0' onClick={packageHandlerOff}>Offline</h1>
                </div>
           {this.state.ol === 'true'?
            <div className='flex justify-around items-center flex-wrap'>
                {
                    packagesOnline.map(packageOl => 
                        <PackageCard packageOl={packageOl}/>
                    )
                }
            </div>
            :
            <div className='flex justify-around items-center flex-wrap'>
                {
                    packagesOffline.map(packageOff => 
                        <PackageCard packageOl={packageOff}/>
                    )
                }
            </div>
            }

            </div>
            </div>
        );
    }
}

export default PackageList;