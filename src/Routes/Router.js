import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import AboutDLC from '../Pages/AboutDLC'
import OurWorld from '../Pages/OurWorld'
import Experiences from '../Pages/Experiences'
import Gallery from '../Pages/Gallery'

 const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path='/AboutDLC' component={AboutDLC}></Route>
            <Route exact path='/OurWorld' component={OurWorld}></Route>
            <Route exact path='/Experiences' component={Experiences}></Route>
            <Route exact path='/Gallery' component={Gallery}></Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default Routing