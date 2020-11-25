export class AddUser{

    data:any[]=[];
    constructor(user:any){
        
        const storage=JSON.parse(localStorage.getItem('users'));
       
        //console.log(user.value)
        if(storage !== null){
            
            this.data.push(storage);
            this.data.push(user.value)
            localStorage.setItem('users',JSON.stringify(this.data));
            //console.log(data);
        }else{
            this.data.push(user.value);
            localStorage.setItem('users',JSON.stringify(this.data));

            
        }
        
       

    }
}