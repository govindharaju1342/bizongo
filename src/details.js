import React, {
    Component
} from 'react' 
import $ from 'jquery'

class Details extends Component {
    constructor(props) {
        super(props)
    }
    getHeader() {
        let myData = JSON.parse(localStorage.getItem('csvData'));
        let tableHeader = myData.data[0]
        return(
            <thead>
                <tr>
                    {
                        tableHeader.map((val) => {
                            return(
                                <th key={Math.random()}>{val}</th>
                            )
                         })
                    }
                </tr>
            </thead>
        )
    }
    getBody() {
        let myData = JSON.parse(localStorage.getItem('csvData'));
        let tableRow = myData.data.slice(1)
        tableRow = tableRow.sort((a, b) => {
            return b[3] - a[3] ;
        })
        return(
            <tbody className = 'details-body'>
              {
                tableRow.map((val) => {
                    return(
                      <tr key={Math.random()}>
                        {
                        val.map((value) => {
                          return(
                            <td key={Math.random()}>{value}</td>
                          )
                        })
                        }
                      </tr>
                    )
                 })
              }
            </tbody>
        )
    }
    searchTableValue(val) {
        let td_one, td_two;
        let value = val.target.value
        value = value.toUpperCase()
        let tr = $('.details-body')
        for (var i = 0; i < tr.length; i++) {
            td_one = $(tr[i]).children()[0]
            td_two = $(tr[i]).children()[1]
            if (td_one.innerHTML.toUpperCase().indexOf(value) > -1 ||
                td_two.innerHTML.toUpperCase().indexOf(value) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
    getSearch() {
        return(
            <input type='text' className='search' placeholder='Search' onChange={this.searchTableValue} />
        )
    }
    getTabel() {
        return(
            <table className='table'>
                {this.getHeader()}
                {this.getBody()}
            </table>
        )
    }
    render() {
         return (
             <div className='details-table'>
                {this.getSearch()}
                {this.getTabel()}
             </div>
         )
    }
}
module.exports = Details;
