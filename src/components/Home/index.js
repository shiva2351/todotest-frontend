import { Component } from "react";

class Home extends Component{

    state={dat:[]}

    gettasks=async()=>{
        console.log("gettasks()")
        const res = await fetch('https://testtodo-53ma.onrender.com/todos/');
        console.log(res.ok)
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        console.log(data)
        this.setState(()=>({dat:data}));
      
    }
   
    render(){
        const {dat}=this.state
        console.log(dat)
        return <div>
            
            <button onClick={this.gettasks}>kk</button>home{dat.map(each=><h1>{each.task}</h1>)}</div>
    }
}

export default Home;