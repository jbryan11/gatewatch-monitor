import { checkPropTypes } from 'prop-types'
import container from '../styles/index.module.sass'
import Header from './header'

export default function Layout(props){
    return (
        <React.Fragment>
        <Header title={props.PageTitle}/>
           <div className={container.main}>
                <div className={container.nav}>{props.navigation}</div>
                <div className={container.content}>{props.children}</div>
           </div> 
        </React.Fragment>
        
    )
}