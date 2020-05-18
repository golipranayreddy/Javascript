function Check(props){
    const removetag =  () => {
        props.func(props.id)
    }
    return <input type = "checkbox" onChange = {removetag}/>
}

function Task(props){
    console.log(props)

    return (<li>{props.name} &nbsp; {props.duedate.toLocaleDateString()} &nbsp;
            <Check  id = {props.id} func = {props.removetask} />
        </li>)
}



class Input extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value :' ',
            duedate : ''
        }
        this.handleChangetext = this.handleChangetext.bind(this)
        this.handleSubmbit = this.handleSubmbit.bind(this)
        // this.handleChangedate = this.handleChangedate.bind(this)
    }   
    handleChangetext (event) {
        this.setState({
            value : event.target.value
        })   
    }


    handleSubmbit(event){
        event.preventDefault();
        const t = {name : this.state.value,
            date : Date.now(),
            duedate : new Date()
        }
        console.log(t)
        this.props.gettask(t)
        this.setState({
            value:'',
            duedate : ''
        })
        
    }
   render() {
       return (
           <div>
               <form onSubmit = {this.handleSubmbit}>
                   <input type = 'text'  value = {this.state.value} onChange = {this.handleChangetext}/>
                 
                   <input type = 'Submit'/>
               </form>
           </div>
       )
   }
}
class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            task_l:  [],
        } 
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    removeTask (date){
        const obj = this.state.task_l.filter((obj) => {
            console.log(obj,date)
            return obj.date != date
        })
        this.setState({
            task_l : obj
        })
    }
    addTask (task){
        this.state.task_l.push(task)
        
        this.setState({
            task_l : this.state.task_l
      
        })
        
    }
    render (){
        return (
            <div>
                <h1>Todo Using React</h1>
                <div>
                    <ol>
                        {this.state.task_l.map((each) =>
                            <Task  key = {each.date} id = {each.date} name = {each.name} duedate = { each.duedate}  removetask ={this.removeTask} />
                    
                        )}
                        
                    </ol>
                </div>
                
                <Input gettask = {this.addTask}/>
            </div>
        )
    }
};

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
)
