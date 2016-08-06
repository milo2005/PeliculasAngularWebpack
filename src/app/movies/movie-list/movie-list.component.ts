import {Component,OnInit} from "@angular/core";
import {MovieComponent} from "./movie.component";
import {Movie, MovieService} from "../../shared/index";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl:"./movie-list.component.html",
    directives: [MovieComponent]
})
export class MovieListComponent{
    
    constructor(private service:MovieService, private route:ActivatedRoute){
        let genre = +route.snapshot.params["genre"];
        service.loadMovies(genre); 
    }

}