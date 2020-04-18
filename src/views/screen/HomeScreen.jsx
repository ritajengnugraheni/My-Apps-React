import React from "react"
import Axios from "axios";
import { API_URL } from "../../constants/API"

class HomeScreen extends React.Component {
    state = {
        roleSekarang: "",
        fullnameSekarang: ""
    }
    componentDidMount() {
        Axios.get(`${API_URL}/users`, {
            params: {
                username: this.props.match.params.username,
            }
        })
            .then((res) => {
                this.setState({
                    fullnameSekarang: ` ${res.data[0].fullname}`,
                    roleSekarang: `${res.data[0].role}`,

                })
                console.log(res);
            })
            .catch((err) => {
                console.log(err);

            })
    }

    render() {
        const {
            roleSekarang,
            fullnameSekarang
        } = this.state
        return (
            <div className='container'>
                <p>Username : {this.props.match.params.username} </p>
                <h4 className='font-weight-bold'
                    style={{ color: 'green' }}>
                    Hai, {fullnameSekarang}
                </h4>
                <h6>Your role is,  {roleSekarang} </h6>


            </div>
        )
    }
}
export default HomeScreen
