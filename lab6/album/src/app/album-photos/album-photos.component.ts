import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Photos } from '../photos';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: AlbumService,
    private location: Location
  ) {}

  ngOnInit() {
    this.albumId = +this.route.snapshot.params['id'];
    this.photoService.getPhotos(this.albumId)
      .subscribe(photos => this.photos = photos);
  }

  Back(): void {
    this.location.back();
  }

}
