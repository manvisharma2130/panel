import React, { Component } from 'react'
import axios from "axios"





export default class Fetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admin: [],
            filteredData: [],
            id: 0,
            value: "",
            query: "",
            active: false
        }
        console.log("constructor")

    }
    async componentDidMount() {
        let response = await axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
        console.log(response.data)
        this.setState({ admin: response.data })
        this.setState({ filteredData: this.state.admin })
    }
    handleChange = (e) => {
        console.log(e.target.value)
        let filter = this.state.admin.filter(item => {
            return item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({ filteredData: filter })
    }
    handleClick = (id) => {

        this.setState({ id: id, change: "block", })


    }




    render() {
        console.log(this.state.admin)


        return (

            <
            div >

            <
            div id = "overlay" >
            <
            img src = "./img/preloader.gif"
            alt = "Preloader icon" / >
            <
            /div>

            <
            main >

            <
            div id = "table-section" >

            <
            form action = "/" >
            <
            img src = 'https://raw.githubusercontent.com/qaifikhan/Assignment-9-Basic-Admin-Panel/a4f98fc05db6d11c1dff0e84d9f0fd67f8927e0a/img/search-icon.svg'
            alt = "Search Icon" / >
            <
            input onChange = { this.handleChange }
            type = "text"
            placeholder = "Enter something"
            id = "search-box" / >
            <
            /form>

            <
            div id = "table-wrapper" >

            <
            div id = "table-headers" >
            <
            table >
            <
            thead >

            <
            tr >
            <
            th className = "column1" > Id < /th>  <
            th className = "column2" > FirstName < /th>  <
            th className = "column3" > LastName < /th>  <
            th className = "column4" > Email < /th> 

            <
            th className = "column5" > Phone < /th>  <
            /tr>  <
            /thead>  <
            /table>  <
            /div>

            <
            div id = "table-data" >
            <
            table >
            <
            tbody >


            {
                this.state.filteredData.map((item) =>

                    <
                    tr onClick = {
                        () => this.handleClick(item.id) }
                    key = { item.id }
                    className = "data-row" >
                    <
                    td className = "column1" > { item.id } < /td>  <
                    td className = "column2" > { item.firstName } < /td>  <
                    td className = "column3" > { item.lastName } < /td>  <
                    td className = "column4" > { item.email } < /td>  <
                    td className = "column5" > { item.phone } < /td>  <
                    /tr>
                )
            }



            <
            /tbody>  <
            /table>  <
            /div>

            <
            /div>

            <
            /div>




            <
            div id = "info-wrapper" >
            <
            h1 > Details < /h1>  <
            p > Click on a table item to get detailed information < /p> {
            this.state.admin.filter(re => re.id == this.state.id).map(item =>

                <
                div id = "info-content"
                style = {
                    { display: `${this.state.change}` }
                } >
                <
                div > < b > User selected: < /b> {item.firstName} {item.lastName} </div >
                <
                div >
                <
                b > Description: < /b>  <
                div id = "para" > { item.description } <
                /div> <
                /div>  <
                div className = "address" > < b > Address: < /b> {item.address.streetAddress}</div >
                <
                div className = "address" > < b > City: < /b> {item.address.city}</div >
                <
                div className = "address" > < b > State: < /b> {item.address.state}</div >
                <
                div className = "address" > < b > Zip: < /b> {item.address.zip}</div >
                <
                /div>
            )
        }

        <
        /div>

        <
        /main>

        <
        /div>

    )
}
}