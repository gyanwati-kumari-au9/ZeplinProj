import {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            // 
        }
       
    }
    render(){
        return(
            <div class="row">
                <div className="container" style={{display:"flex"}}>
                <Jumbotron style={{backgroundImage:"images/banner.jpg"}}>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
               </div>
           </div>
        )
    }
}

export default withRouter(Home);