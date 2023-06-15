import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminKategoriComponent } from './components/admin/admin-kategori/admin-kategori.component';
import { AdminIlanComponent } from './components/admin/admin-ilan/admin-ilan.component';
import { AdminUyeComponent } from './components/admin/admin-uye/admin-uye.component';
import { AuthGuard } from './services/AuthGuard';
import { IlanComponent } from './components/ilan/ilan.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { UyeilanComponent } from './components/uyeilan/uyeilan.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'ilan/:ilanId', component: IlanComponent
  },
  {
    path: 'kategori/:katId', component: KategoriComponent
  },
  {
    path: 'uyeilan/:uyeId', component: UyeilanComponent
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      yetkiler: ['Admin'],
      gerigit: '/login'
    }
  },
  {
    path: 'admin/kategori', component: AdminKategoriComponent,
    canActivate: [AuthGuard],
    data: {
      yetkiler: ['Admin'],
      gerigit: '/login'
    }
  },
  {
    path: 'admin/ilan', component: AdminIlanComponent
  },
  {
    path: 'admin/ilan/:katId', component: AdminIlanComponent
  },
  {
    path: 'admin/uye', component: AdminUyeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
