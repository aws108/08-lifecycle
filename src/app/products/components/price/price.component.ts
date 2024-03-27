import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  price: number = 0;
  intervarl$?: Subscription;
  
  ngOnInit(): void {
    console.log('Price componente hijo: ngOnInit()')

    this.intervarl$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`) ); //1
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price componente hijo: ngOnChanges', changes)
  }
  
  ngOnDestroy(): void {
    console.log('Price componente hijo: ngOnDestroy()')
    this.intervarl$?.unsubscribe();
  }

  
}

// 1-> Observable que emite valores de manera secuencial basado en uj período de tiempo. Emite números desde el 0 cada vez que se le da al botón del toggle
// Aunque ya no se muestre el componente, sigue emitiendo valores
// Subscribe emite algo de tipo subscription, por eso se usa una variable de tipo Subscription para limpiar la suscripción
// Al destruirse el componente, el intervalo siempre vuelve a iniciarse
