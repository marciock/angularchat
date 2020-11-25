export class Login{

     data:any;
    
     constructor(){
          this.data=JSON.parse(localStorage.getItem('users'));
          
     }
    
     email(field:string){
          const email=this.data.find(({email})=>email===field );
          console.log(email);
          return email;
     }
     senha(field:string){
          const senha=this.data.find(({d})=>d.senha===field);
          return senha;
     }
}