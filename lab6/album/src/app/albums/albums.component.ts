import { Component,OnInit } from '@angular/core';
import { Album } from '../models';
// import { ALBUMS } from '../fake-db';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums: Album[];
  newAlbum: Album;
  loaded : boolean;

   constructor(private albumService : AlbumService, private router: Router){
    this.albums=[];
    this.newAlbum = {} as Album;
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


 addAlbum(){
  this.loaded = false;
  this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
  this.albums.unshift(album);
  this.loaded = true;
  this.newAlbum = {} as Album;
  })
 }
 deleteAlbum(album: Album) {
  this.albumService.deleteAlbum(album.id);
  this.albums = this.albums.filter((a) => a !== album);
}
}