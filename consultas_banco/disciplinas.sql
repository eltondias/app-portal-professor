USE [isbd_esamaz]

select * FROM  VIEW_PROFESSOR_TURMA 
where matric= 8511153 and  ano = 2019 and seqano= 1  
and turma = 'ENF3MA'



select distinct 
	sec_profdiscip.turma, 
	matric, 
	sec_profdiscip.ano,
	sec_profdiscip.seqano,
	sec_profdiscip.discip,
	tab_tabela.des 
from sec_profdiscip 
	inner join tab_tabela on sec_profdiscip.discip=tab_tabela.cod
where 
	tab_tabela.cod=sec_profdiscip.discip 
	and matric= 8511153
	and  ano = 2019
	and seqano = 1
	and sec_profdiscip.turma = 'ENF3MA'

 
