
import localStyle from '../styles/index.module.sass'
import Layout from '../components/layout'
import {useState, useEffect} from 'react'
import socket from '../utils/socket.js'

export default function Index(){    
    const [eData, setEntranceData] = useState({})
    const [exData, setExitData] = useState({})
    useEffect(()=>{  
        socket.open()  
        socket.on("entranceGate", (data)=>{
            const dataParsed = JSON.parse(data)
            setEntranceData(dataParsed)
        })
        socket.on("exitGate", (data)=>{
            const dataParsed = JSON.parse(data)
            setExitData(dataParsed)
        })
    },[])
    return(
    <div>
    <Layout PageTitle="Dashboard">
            <div id="header" className={localStyle.ContentHead}>
                 <h1>Dashboard</h1>
                 <input id="manual-lift" type="button" name="manual-lift" value="Fullscreen" onClick={()=>sendMessage()}/>
             </div>
             <div id="content" className={localStyle.ContentContainer}>
                 <div id="subcontent1" className={localStyle.SubContent}>
                     <h2>Entry Gate</h2>
                     <h4>Gate Status</h4>
                     <label for='availability'>Availability</label>
                     <input id="availability" type="text" name="availability" value="This is a toggle button" readOnly/>
                     <input id="manual-lift" type="button" name="manual-lift" value="On"/>
                     <input id="manual-lift" type="button" name="manual-lift" value="Off"/>
                     <br/>
                     <h4>Scan Information</h4>
                     <form>
                     <label for="driverId"> Driver's Name</label>
                     <input id="driverId" type="text" name="driver-name" value={eData.driverName} readOnly/>
                     <br/>
                     <label for="id-number">ID Number</label>
                     <input id="id-number" type="text" name="idnumber" value={eData.driverId} readOnly/>
                     <br/>
                     <label for="vehicle">Vehicle Name</label>
                     <input id="vehicle" type="text" name="vehicle" value={eData.vehicleName} readOnly/>
                     <br/>
                     <label for="vehicle-plate">Vehicle Plate Number</label>
                     <input id="vehicle-plate" type="text" name="vehiclePlate" value={eData.plateNumber} readOnly/> 
                     <br/> 
                     <input id="manual-lift" type="button" name="manual-lift" value="Manual Lift"/>
                 </form>
                 </div> 
                 <div id="subcontent2" className={localStyle.SubContent}>
                     <h2>Exit Gate</h2>
                     <h4>Gate Status</h4>
                     <label for="availability"> Availability</label>
                     <input id="availability" type="text" name="availability" value="This is a toggle button" readOnly/>
                     <input id="manual-lift" type="button" name="manual-lift" value="On"/>
                     <input id="manual-lift" type="button" name="manual-lift" value="Off"/>
                     <br/>
                     <h4>Scan Information</h4>
                     <form>
                     <label for="driverId"> Driver's Name</label>
                     <input id="driverId" type="text" name="driver-name" value={exData.driverName} readOnly/>
                     <br/>
                     <label for="id-number">ID Number</label>
                     <input id="id-number" type="text" name="idnumber" value={exData.driverId} readOnly/>
                     <br/>
                     <label for="vehicle">Vehicle Name</label>
                     <input id="vehicle" type="text" name="vehicle" value={exData.vehicleName} readOnly/>
                     <br/>
                     <label for="vehicle-plate">Vehicle Plate Number</label>
                     <input id="vehicle-plate" type="text" name="vehiclePlate" value={exData.plateNumber} readOnly/> 
                     <br/> 
                     <input id="manual-lift" type="button" name="manual-lift" value="Manual Lift"/>
                 </form>
                 </div>
             </div>
    </Layout>
    </div>
)
}
