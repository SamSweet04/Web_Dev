import { Component,OnInit } from '@angular/core';
import { Album } from '../models';
// import { ALBUMS } from '../fake-db';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums: Album[];
  newAlbum: string;
  loaded : boolean;

   constructor(private albumService : AlbumService, private router: Router,private location: Location){
    this.albums=[];
    this.newAlbum = '';
    this.loaded = false;
   }
   ngOnInit(): void {
    this.getAlbums();
   }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
    this.albums = albums;
    this.loaded = true;

  }
    )}

  addAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumService.addAlbum(album as Album).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

 deleteAlbum(album: Album) {
  this.albumService.deleteAlbum(album.id);
  this.albums = this.albums.filter((a) => a !== album);
}
Back(): void {
  this.location.back();
}
 goForward(): void {
  this.location.forward();
}
}