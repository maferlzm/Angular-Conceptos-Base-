import { Component } from "@angular/core";

//decorador
@Component({
    selector: 'app-footer', //selector que indica el nombre que recibirá mi componente al utilizarlo en otros componentes
    templateUrl:'./footer.component.html'
})

export class footerComponent{

    public fecha: number= new Date().getFullYear();
    public nombre: string = 'María Fernanda López Martín';

}