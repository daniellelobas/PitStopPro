import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  
  oficinaAutomotiva(){
    this.abrirUrl('https://www.google.com/maps/search/Oficinas+automotiva/@-3.8185156,-38.6274703,13.25z?entry=ttu')
  }

  autoEletrica(){
  this.abrirUrl('https://www.google.com/maps/search/Oficinas+autoeletrica/@-3.8665023,-38.6988725,11.25z?entry=ttu')
  
  }
  autoCenter(){
    this.abrirUrl('https://www.google.com/maps/search/Oficinas+autoCenter/@-3.8496973,-38.5876897,13z/data=!3m1!4b1?entry=ttu')
  }


  

  abrirUrl(url: string){
    window.open(url, `blank`)?.focus();
  } 
}

