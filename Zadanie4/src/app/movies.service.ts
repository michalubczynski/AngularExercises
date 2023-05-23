import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieRequest } from 'src/models/movie-request';
import { MovieResponse } from 'src/models/movie-response';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  private readonly url: string = 'http://localhost:5064/api/Movies';

  get(): Observable<MovieResponse[]> {
    return this.httpClient.get<MovieResponse[]>(this.url);
  }

  getOne(id: number): Observable<MovieResponse | undefined> {
    return this.httpClient.get<MovieResponse>(this.url + '/' + id);
  }

  getByTitle(title: string): Observable<MovieResponse[]> {
    return this.httpClient.get<MovieResponse[]>(this.url + '/szukaj/' + title);
  }

  delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.url + '/' + id);
  }

  Put(id: number, req: MovieRequest): Observable<MovieResponse> { //edit
    return this.httpClient.put<MovieResponse>(this.url + '/' + id, req);
  }

  Post(req: MovieRequest): Observable<MovieResponse> { //add
    return this.httpClient.post<MovieResponse>(this.url, req);
  }
}
