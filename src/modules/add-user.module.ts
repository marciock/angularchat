export class AddUser{

    data:any[]=[    ];
    constructor(user:any){
        
        let storage=localStorage.getItem('users');

        if(storage === null){
            console.log('vazio');
            this.data.push(user.value);
            localStorage.setItem('users',JSON.stringify(this.data));

        }else{
            
            this.data=JSON.parse(storage);
            this.data.push(user.value);
            localStorage.setItem('users',JSON.stringify(this.data));

            console.log(this.data)
        }

       

       // this.data=JSON.parse(localStorage.getItem('users'));
       
        
       

    }
}