import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-api-site',
  templateUrl: './api-site.component.html',
  styleUrls: ['./api-site.component.scss']
})
export class ApiSiteComponent implements OnInit {

  dados$: any;

  disabled = false;

  constructor(private servico: ServicosService) { }

  ngOnInit() {
    this.listBank();
  }

  listBank() {
    this.servico.listBank().subscribe(value => {
      this.dados$ = value;
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Valor R$ 11.499,10'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Valor R$ 1.960,00'}
  ];

}
