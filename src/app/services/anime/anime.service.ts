import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllAnime() {
    return this.HttpClient.get<any>('/Anime/get-anime-list');
  }

  getAnimeById(id: number) {
    return this.HttpClient.get<any>('/Anime/get-anime-by-id', { id });
  }

  createAnime(anime: any) {
    return this.HttpClient.post<any>('/Anime/create-anime', anime);
  }

  updateAnime(anime: any) {
    return this.HttpClient.put<any>('/Anime/update-anime', anime);
  }

  deleteAnime(id: number) {
    return this.HttpClient.delete<any>('/Anime/delete-anime', { id });
  }
}
