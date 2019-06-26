select 
	distinct month(dia) as mes, turma 

	from SEC_PROFDISCIPDIA
	where 
	--ano= 2018
	-- seqano= 1
	--and turma like '%ENF3MA%'
	--and discip= 'FARM'
	matric= 8511153