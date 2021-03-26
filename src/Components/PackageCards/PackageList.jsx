import React from 'react';
import Carousel from 'react-elastic-carousel';
import PackageCard from './PackageCard';

const packagesOffline = [
    {
        price:'FREE',
        description1 : '1 on 1',
        description2 : 'Demo Session'
    },
    {
        price:'4000',
        description1 : '1 Month Programme',
        description2 : '12 Sessions'
    },
    {
        price:'6000',
        description1 : '1 Month Programme',
        description2 : '24 Sessions'
    },
    {
        price:'7500',
        description1 : '2 Months Programme',
        description2 : '24 Sessions'
    },
    {
        price:'11500',
        description1 : '2 Months Programme',
        description2 : '48 Sessions'
    },
    {
        price:'11000',
        description1 : '2 Months Programme',
        description2 : '36 Sessions'
    },
    {
        price:'16500',
        description1 : '100 Days',
        description2 : 'Body Transformation Programee'
    },
    {
        price:'60000',
        description1 : '3 Months Regular Programme',
        description2 : '4 People Mini Group'
    },
    {
        price:'4000',
        description1 : '12 Sessions',
        description2 : '3 Months Validity'
    }
]
const packagesOnline = [
    {
        price:'FREE',
        description1 : '1 on 1',
        description2 : 'Demo Session'
    },
    {
        price:'6000',
        description1 : '1 on 1',
        description2 : '12 Sessions Programme'
    },
    {
        price:'10000',
        description1 : 'Couples',
        description2 : '12 Sessions Programme'
    },
    {
        price:'8000',
        description1 : 'Full Body Transformation',
        description2 : '12 Weeks Programme'
    }
]

const breakPoints = [
    {width:'1', itemsToShow : 1},
    {width:'550', itemsToShow : 2},
    {width:'768', itemsToShow : 3},
    {width:'1200', itemsToShow : 4}
]

class PackageList extends React.Component {
    constructor(){
        super();
        this.state = {
            ol:'true',
            underlineOl:true
        }
    }
    render(){

        const packageHandlerOl = () =>{
                this.setState({ol:'true',underlineOl:true})
        }

        const packageHandlerOff = () =>{
                this.setState({ol:'false',underlineOl:false})
        }
        return (
            <div className='mv2 pb6 pt4'>
            <div className='white'>
                <h1 className='tc'  data-aos='fade-up'>Training</h1>
                <h1 className='tc' data-aos='fade-up'><span style={{color:'#00D0ff'}}  data-aos='fade-up'>Services</span> We Offer</h1>
            </div>
            <div className='shadow-2 mh6 margin-6 bg-white br4 pv5 ph2'>
                <div className='flex items-center mh4 mb3'> 
                    <h1  data-aos='fade-up' className={`none ph3 f3 mv0 tc pt2  btn pointer pl2 f2 black ${this.state.underlineOl? '' : 'btn-left'}`} href='#0' onClick={packageHandlerOl}>Online</h1>
                    <h1  data-aos='fade-up' className={`none ph3 f3 mv0 tc pt2  btn pointer pl2 f2 black ${this.state.underlineOl?'btn-left':''}`} href='#0' onClick={packageHandlerOff}>Offline</h1>
                </div>
           {this.state.ol === 'true'?
            <Carousel breakPoints={breakPoints}>
                {
                    packagesOnline.map(packageOl => 
                        <PackageCard packageOl={packageOl}/>
                    )
                }
            </Carousel>
            :
            <Carousel breakPoints={breakPoints}>
                {
                    packagesOffline.map(packageOff => 
                        <PackageCard packageOl={packageOff}/>
                    )
                }
            </Carousel>
            }

            </div>
            </div>
        );
    }
}

export default PackageList;