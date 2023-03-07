import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
      album: Album;
      loaded: boolean;
      albumId!: number;
      albumTitle!: string;

      constructor(private route: ActivatedRoute, private albumService : AlbumService, private router:Router, private location: Location) {
      this.album = {} as Album;
      this.loaded = true;
      
  
      }
      ngOnInit(): void {
        // const id =  Number(this.route.snapshot.paramMap.get("id"));
        // if(id){
        //   let num_id = +id;
        // }
        this.route.paramMap.subscribe((params)=>{
          this.albumId = this.route.snapshot.params['id'];
          // this.album = ALBUMS.find((album: Album) => album.id == id) as Album; // can also return null object
          this.loaded = false;
          this.albumService.getAlbum(this.albumId).subscribe((album) => {
            this.album = album;
            this.albumTitle = this.albumTitle;
            this.loaded = true;
          });
        })
       
      }
      update() {
        if (this.album) {
          this.album.title = this.albumTitle;
          this.albumService.updateAlbumTitle(this.albumId,this.albumTitle);
        }
      }
    
      
  Back(): void {
    this.location.back();
  }
   goForward(): void {
    this.location.forward();
  }
    
    viewPhotos() {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
}
