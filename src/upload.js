import React, {
    Component
} from 'react' 
import CSVReader from 'react-csv-reader'

class Upload extends Component {
    constructor(props) {
        super(props) 
    }    
    render() {
        return ( 
            <div className ='upload-box'> 
                <CSVReader cssClass = "csv-reader-input"
                label = "Select CSV"
                onFileLoaded = {
                    this.props.handleData
                }
                onError = {
                    this.props.handleError
                }
                inputId = "labeltxt"
                inputStyle = {
                    {
                        color: 'red'
                    }
                }
                />
            </div>
            
        )
    }
} 
module.exports = Upload;