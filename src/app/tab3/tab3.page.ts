import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private contatoService: ContatoService,
    public toastController: ToastController
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }
  
  Whats() {
    this.abrirUrl('https://api.whatsapp.com/send?phone=5585991127391&text=Como%20posso%20te%20ajudar?')
  }

  abrirUrl(url: string){
    window.open(url, `blank`)?.focus();
  } 
  enviar() {
    console.log('enviei')
  }

}
