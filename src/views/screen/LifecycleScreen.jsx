import React from 'react'

class LifecycleScreen extends React.Component {
    // Fungtion here 
    state = {
        username: '',
        time: new Date(),
    }
    componentDidMount() { // trigger baru masuk
        //    this.setState({username: 'Doraemon'})
        this.timer = setInterval(() => this.triggerClock(), 1000)
    }
    componentWillUnmount() { // trigger ketika baru mau keluar
        clearInterval(this.timer)
    }
    triggerClock = () => {
        this.setState({ time: new Date() })
    }
    // componentDidUpdate(){
    //     // alert('anda merubah state')
    //     console.log(this.state.username);
    //     // this.setState({username:''}) // jangan pernah lakukan ini karena akan error dan rusak

    // }

    // Catatan aja ========================== jarang digunakan
    // componentWillMount(){
    //     alert('hallo panda')
    // }
    // urutan lifecycle 
    // willMount -> render - didMount

    //re-render !== mount
    //didMount hanya dipanggil setelah render pertama
    // componentWillUnmount(){
    //     alert('willunmount')
    // }
    // ================ Batas ======================




    render() {
        // alert('hoy')
        return (
            <div>
                <h1>hallo lifecycle</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
                {/* <h2>Welcome, {this.state.username}</h2> */}

                {/* <input type="text"
                        onChange={(e)=> this.setState({username : e.target.value})}
                />
                <a href="https://www.google.com">link Google</a> */}
            </div>
        )
    }
}

export default LifecycleScreen