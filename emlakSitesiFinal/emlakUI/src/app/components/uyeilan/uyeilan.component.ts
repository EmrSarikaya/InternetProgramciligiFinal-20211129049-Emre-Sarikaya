import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ilan } from 'src/app/models/Ilan';
import { Uye } from 'src/app/models/Uye';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-uyeilan',
  templateUrl: './uyeilan.component.html',
  styleUrls: ['./uyeilan.component.css']
})
export class UyeilanComponent implements OnInit {
  ilanlar: Ilan[];
  uyeId: number;
  uye: Uye;
  constructor(
    public apiServis: ApiService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['uyeId']) {
        this.uyeId = p['uyeId'];
        this.UyeById();
        this.IlanListeByUyeId();
      }
    })
  }
  UyeById() {
    this.apiServis.UyeById(this.uyeId).subscribe((d: Uye) => {
      this.uye = d;
    });
  }
  IlanListeByUyeId() {
    this.apiServis.IlanListeByUyeId(this.uyeId).subscribe((d: Ilan[]) => {
      this.ilanlar = d;
    });
  }
}
