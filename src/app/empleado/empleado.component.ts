import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre="Juan";

  apellido="Díaz";

  edad=18;

  //empresa="Píldoras Informaticas";

habilitacionCuadro=false;

usuRegistrado=false;

textoDeRegistro="No hay nadie registrado";


getRegistroUsuario(){
  this.usuRegistrado=false;
}

setusuarioRegistrado(event:Event){
  //alert("El usuario de acaba de registrar");
  //this.textoDeRegistro="Se ha registrado correctamante";
  if((<HTMLInputElement>event.target).value=="si"){
  this.textoDeRegistro="Se ha registrado correctamante";
}else {
  this.textoDeRegistro="No hay nadie registrado";
}
}

  //funcion
  llamaEmpresa(value:string){}

}
