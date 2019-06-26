USE [isbd_esamaz]

select distinct 
sec_profdiscip.ano,
sec_profdiscip.seqano 
from 
sec_profdiscip 
inner join tab_tabela on sec_profdiscip.discip=tab_tabela.cod
where 
tab_tabela.cod=sec_profdiscip.discip 
and matric= 8511153 
order by 
sec_profdiscip.ano desc,
sec_profdiscip.seqano desc



  SELECT * FROM VIEW_PROFESSOR_PERIODO WHERE matric= 8511153 
 order by ano desc, seqano desc

   SELECT * FROM VIEW_PROFESSOR_PERIODO WHERE matric= 8511153 


   SELECT top 10 * FROM  VIEW_DECLARACAO_IR