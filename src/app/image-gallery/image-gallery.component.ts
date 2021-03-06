import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent,  GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
/*
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

/*
export class ImageGalleryComponent implements OnInit {


constructor(){}


// get reference to gallery component
@ViewChild(NgxImageGalleryComponent) NgxImageGallery: NgxImageGalleryComponent;
  
// gallery configuration
conf: GALLERY_CONF = {
  imageOffset: '0px',
  showDeleteControl: false,
  showImageTitle: false,
};
  
// gallery images
images: GALLERY_IMAGE[] = [
  {
    url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260", 
    altText: 'woman-in-black-blazer-holding-blue-cup', 
    title: 'woman-in-black-blazer-holding-blue-cup',
    thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
  },
  {
    url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260", 
    altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
    extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
    thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
  },
];



ngOnInit() {}
  
// METHODS
// open gallery
openGallery(index: number = 0) {
  this.ngxImageGallery.open(index);
}
  
// close gallery
closeGallery() {
  this.ngxImageGallery.close();
}
  
// set new active(visible) image in gallery
newImage(index: number = 0) {
  this.ngxImageGallery.setActiveImage(index);
}
  
// next image in gallery
nextImage(index: number = 0) {
  this.ngxImageGallery.next();
}
  
// prev image in gallery
prevImage(index: number = 0) {
  this.ngxImageGallery.prev();
}
  

  
// EVENTS
// callback on gallery opened
galleryOpened(index : number) {
  console.info('Gallery opened at index ', index);
}

// callback on gallery closed
galleryClosed() {
  console.info('Gallery closed.');
}

// callback on gallery image clicked
galleryImageClicked(index : number) {
  console.info('Gallery image clicked with index ', index);
}

// callback on gallery image changed
galleryImageChanged(index : number) {
  console.info('Gallery image changed to index ', index);
}

// callback on user clicked delete button
deleteImage(index : number) {
  console.info('Delete image at index ', index);
}
}
*/