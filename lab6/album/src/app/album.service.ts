import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, catchError, throwError} from "rxjs"
import { Album } from "./models";
import { Photos } from "./photos";
import { HttpHeaders } from '@angular/common/http';

@Injectable({ // available everywhere inside of the class
    providedIn: 'root'
})
export class AlbumService {
    BASE_URL: string;
    constructor(private client: HttpClient){
        this.BASE_URL = 'https://jsonplaceholder.typicode.com';

     }

    getAlbums(): Observable<Album[]>{ // i have to wait some data, because we are exchanging data, we must return list of ALbums
        return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
    }
    getAlbum(id: number) : Observable<Album>{
        return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
    }
    getPhotos(id: number): Observable<Photos[]> {
        return this.client.get<Photos[]>(`${this.BASE_URL}/albums/${id}/photos`);
    }
    addAlbum(album : Album): Observable<Album>{
        return this.client.post<Album>(`${this.BASE_URL}/albums`, album)
    }
    updateAlbum(album: Album): Observable<Album> {
        return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
      }
    updateAlbumTitle(id: number, newTitle: string): Observable<any> {
        return this.client.put(`${this.BASE_URL}/albums/${id}`, { title: newTitle })
          .pipe(catchError((error) => throwError(error)));
      }
    deleteAlbum(id: number) {
    return fetch(`'https://jsonplaceholder.typicode.com/albums'/${id}`, {  method: 'DELETE', });
    }
}