export class Session{

    data:any[];
    result:any;
    constructor(field:string){
        this.data=JSON.parse(localStorage.getItem('users'));

        this.result=this.data.find((d)=>d.email===field );

        sessionStorage.setItem('nome',this.result.nome);
        sessionStorage.setItem('email',this.result.email);

        

    }
}