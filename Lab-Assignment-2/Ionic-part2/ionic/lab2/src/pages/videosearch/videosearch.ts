import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient,HttpParams } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-videosearch',
  templateUrl: 'videosearch.html',
})
export class VideosearchPage {
  searchTerm: string;
  results:any;

  constructor(public navCtrl: NavController,
    public http: HttpClient, private youtube: YoutubeVideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosearchPage');
  }

  search() {
    let params = new HttpParams();
    params =params.append('maxResults',"25");
    params =params.append('part', "snippet");
    params =params.append('q', this.searchTerm);
    params =params.append('key', "AIzaSyBZ3yV5xBi2yDA2yPVwaH_we8ECSZI_2Lc");
   
    //Http request-
    return this.http.get("https://www.googleapis.com/youtube/v3/search", {params: params}).subscribe(
      (response) => this.results=response["items"]), 
      (error) =>console.log(JSON.stringify(error));
  }
  play(vidId){
    this.youtube.openVideo(vidId);
}
}
