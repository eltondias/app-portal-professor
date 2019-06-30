export class Filtro {

    semestre: Semestre;  
    turma: string;
    disciplina: string;
    mes: Mes;
    avaliacao: any;

}

export class Semestre {
    ano: number; 
    seqano: number;
    matric: number;
    id: string;
}

export class Mes {
    numero: number; 
    mes: string;
}