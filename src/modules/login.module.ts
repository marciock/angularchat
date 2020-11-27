export class Login{

     data:any[];
    result:any;
    
     constructor(){


          this.data=JSON.parse(localStorage.getItem('users'));
          //localStorage.clear();
         // console.log(localStorage.getItem('users'))
     }
    
     Email(field:string){
         
               this.result=this.data.find((d)=>d.email===field );
          
               let email;
         
         if(this.result ===undefined ){
               console.log(this.result)
               email='';
         }else{
              
          email=this.result.email;
          console.log(email);
         }
          return email;
     }
     Senha(field:string){

          let senha=false;
         
          if(this.result.senha===field ){
               senha=true;
          }

          return senha;
     }
}