package com.neo.basic.api

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

/**
 * Created by Suh on 2016-08-27.
 */
@RepositoryRestResource(path = 'trs')
@CrossOrigin
interface TrRepository extends JpaRepository<Tr, Long>{
	
	
	List findByTrNameIgnoreCaseContaining(@Param("trName") String trName);
}
