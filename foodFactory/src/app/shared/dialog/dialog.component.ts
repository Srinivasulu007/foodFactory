import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
   element: any;

   @Input() id: string = 'd';
  constructor(private  el:ElementRef,private modalService: DialogService) { 
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
     // move element to bottom of page (just before </body>) so it can be displayed above everything else
     document.body.appendChild(this.element);

     // add self (this modal instance) to the modal service so it's accessible from controllers
     this.modalService.add(this);
  }

// remove self from modal service when directive is destroyed
ngOnDestroy(): void {
  this.modalService.remove(this.id);
  this.element.remove();
}

// open modal
open(): void {
  this.element.style.display = 'block';
  document.body.classList.add('dialog-modal-open');
}

// close modal
close(): void {
  this.element.style.display = 'none';
  document.body.classList.remove('dialog-modal-open');
}

}
