import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Kategori } from 'src/app/models/Kategori';

@Component({
  selector: 'app-kategori-dialog',
  templateUrl: './kategori-dialog.component.html',
  styleUrls: ['./kategori-dialog.component.css']
})
export class KategoriDialogComponent implements OnInit {
  dialogBaslik: string;
  yeniKayıt: Kategori;
  islem: string;
  frm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<KategoriDialogComponent>,
    public frmBuild: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.islem = data.islem;
    if (this.islem == "ekle") {
      this.dialogBaslik = "Kategori Ekle"
      this.yeniKayıt = new Kategori();
    }
    if (this.islem == "duzenle") {
      this.dialogBaslik = "Kategori Düzenle"
      this.yeniKayıt = data.kayit;
    }
    this.frm = this.FormOlustur();
    if (this.islem == "sil") {
      this.dialogBaslik = "Kategori Sil"
    }
  }

  ngOnInit() {

  }
  FormOlustur() {
    return this.frmBuild.group({
      KategoriAdi: [this.yeniKayıt.KategoriAdi]
    });
  }

}
