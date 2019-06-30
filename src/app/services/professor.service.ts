import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { createRequestOption } from './request-util';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  public resourceUrl =  environment.URL_API  + 'professor';
 

  constructor(protected http: HttpClient) {}
  
  login(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/login', { params: options, observe: 'response' });
  }

  getSemestres(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/semestres', { params: options, observe: 'response' });
  }

  getTurmas(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/turmas', { params: options, observe: 'response' });
  }

  getDisciplinas(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/disciplinas', { params: options, observe: 'response' });
  }

  getMeses(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/meses', { params: options, observe: 'response' });
  }

  getConteudoDisciplina(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/disciplina/conteudo', { params: options, observe: 'response' });
  }

  getAvaliacoes(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/avaliacoes', { params: options, observe: 'response' });
  }

  getAvaliacao(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/avaliacao', { params: options, observe: 'response' });
  }

  getNotasAlunosDisciplina(req?: any ): Observable<any> { 
    const options = createRequestOption(req);
    return this.http.get<any>(this.resourceUrl + '/notasalunosdisciplina', { params: options, observe: 'response' });
  }

}
