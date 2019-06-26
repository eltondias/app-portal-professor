USE [isbd_esamaz]
GO

/****** Object:  View [dbo].[VIEW_PROFESSOR_PERIODO]    Script Date: 25/06/2019 18:17:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER VIEW [dbo].[VIEW_PROFESSOR_PERIODO] AS
select distinct 
sec_profdiscip.ano,
sec_profdiscip.seqano,
matric 
from 
sec_profdiscip 
inner join tab_tabela on sec_profdiscip.discip=tab_tabela.cod
where 
tab_tabela.cod=sec_profdiscip.discip 
GO


