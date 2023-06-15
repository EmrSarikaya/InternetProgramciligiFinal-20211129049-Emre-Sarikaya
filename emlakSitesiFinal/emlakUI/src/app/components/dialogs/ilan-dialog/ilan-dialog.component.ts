import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ilan } from 'src/app/models/Ilan';
import { Kategori } from 'src/app/models/Kategori';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ilan-dialog',
  templateUrl: './ilan-dialog.component.html',
  styleUrls: ['./ilan-dialog.component.css']
})
export class IlanDialogComponent implements OnInit {

  dialogBaslik: string;
  yeniKayit: Ilan;
  islem: string;
  frm: FormGroup;
  kategoriler: Kategori[];
  jconfig: {};
  constructor(
    public dialogRef: MatDialogRef<IlanDialogComponent>,
    public frmBuild: FormBuilder,
    public apiServis: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.islem = data.islem;
    if (this.islem == "ekle") {
      this.dialogBaslik = "İlan Ekle"
      this.yeniKayit = new Ilan();
    }
    if (this.islem == "duzenle") {
      this.dialogBaslik = "İlan Düzenle"
      this.yeniKayit = data.kayit;
    }
    if (this.islem == "detay") {
      this.dialogBaslik = "İlan Detay"
      this.yeniKayit = data.kayit;
    }
    this.frm = this.FormOlustur();
    if (this.islem == "sil") {
      this.dialogBaslik = "İlan Sil"
    }
  }

  ngOnInit() {
    this.KategoriListele();
  }
  FormOlustur() {
    return this.frmBuild.group({
      IlanAdi: [this.yeniKayit.Baslik],
      Icerik: [this.yeniKayit.Icerik],
      KategoriId: [this.yeniKayit.KategoriId],
    });
  }
  KategoriListele() {
    this.apiServis.KategoriListe().subscribe((d: Kategori[]) => {
      this.kategoriler = d;
    });
  }
}
