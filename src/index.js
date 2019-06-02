import React, {
    Component
} from 'react'
import ReactDOM from 'react-dom';
import Upload from './upload' 
import Details from './details'

class Bizongo extends Component {   
    constructor(props) {
        super(props)
        this.state = {
            csvUpload: false 
        };
        localStorage.removeItem("csvData");

        this.handleData = this.handleData.bind(this)
    }
    handleData(data) { 
        let myData = {
            data: data
        }
        localStorage.setItem('csvData', JSON.stringify(myData));
        this.setState({
            csvUpload: true
        })
    }
    handleError() {
        console.info(arguments)
    }
    getUpload() {
         return(
            <div> 
             <Upload 
                handleData = {
                    this.handleData
                }
                handleError = {
                    this.handleError
                }
             /> 
            </div> 
        )
    }
    getDetails() {
        return (
            <div>
                <Details />
            </div>
        )
    }
    render() {
        if (!!this.state.csvUpload) {
           return this.getDetails()
        } else {
           return this.getUpload()           
        } 
    }
    
}
 
 ReactDOM.render(
    <Bizongo /> ,
    document.getElementById('bizongo')
)