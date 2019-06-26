USE [isbd_esamaz]
GO

/****** Object:  View [dbo].[VIEW_PROFESSOR_TURMA]    Script Date: 26/06/2019 13:40:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[VIEW_PROFESSOR_TURMA] AS
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
	tab_tabela.cod = sec_profdiscip.discip 
GO


