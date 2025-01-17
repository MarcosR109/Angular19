import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CdclickedService } from '../cdclicked.service';
import { inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { withInterceptorsFromDi } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-cds',
  imports: [CommonModule, RouterLink, HttpClientModule, MatProgressSpinnerModule],
  templateUrl: './cds.component.html',
  styleUrl: './cds.component.css'
})
export class CdsComponent {
  errorHttp: any;
  CDs: any;
  cdClicked = inject(CdclickedService);
  isLoading: boolean = true;
  constructor(private http: HttpClient) {
    /*this.CDs = [
      { id: 1, titulo: 'Night at the opera', autor: 'Queen',precio:"25€",canciones:['track 1, track 2, track 3'] },
      { id: 2, titulo: 'Wish you were here', autor: 'Pink Floyd',precio:"5€",canciones:['track 1, track 2, track 3'] },
      { id: 3, titulo: 'El círculo', autor: 'Kase.O',precio:"2000€",canciones:['track 1, track 2, track 3'] }
    ]*/
  }
  showArtist(cd: any) {
    const showArtist = "Artista: " + cd.autor;
    alert(showArtist);
    console.log(cd.titulo + " realizado por " + cd.autor);
  }

  leerLista() {
    this.http.get('./assets/cd-list.json').subscribe(
      data => { this.CDs = data 
        this.isLoading = false
      },
      data => { this.errorHttp = true
        this.isLoading = false;
       }
    );
  }

  ngOnInit() {
    this.leerLista();
  }

  agregarCD(_cdClick: any) {
    this.cdClicked.cdVisto(_cdClick);
    console.log("cd clicado");
  }

}