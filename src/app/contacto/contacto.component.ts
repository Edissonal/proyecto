import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ContactoService } from "../servicio/contacto.service";


@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  contacto: any;

  constructor(
    private pf: FormBuilder,
    private contactoService: ContactoService
  ) {
    // this.contacto = new Contacto('','','');
  }

  ngOnInit() {
    this.contactoForm = this.pf.group({
      nombre: ["", [Validators.required, Validators.minLength(10)]],
      correo: ["", [Validators.email, Validators.required]],
      mensaje: ["", [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    console.log(this.contacto);
    this.contacto = this.saveContacto();
    this.contactoService.postContacto(this.contacto).subscribe(newpres => {
      console.log(newpres);
    });
    this.contactoForm.reset();
  }
  saveContacto() {
    const saveContacto = {
      nombre: this.contactoForm.get("nombre").value,
      correo: this.contactoForm.get("correo").value,
      mensaje: this.contactoForm.get("mensaje").value
    };
    return saveContacto;
  }
}
