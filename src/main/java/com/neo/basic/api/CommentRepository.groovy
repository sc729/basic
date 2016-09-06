package com.neo.basic.api

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

/**
 * Created by Suh on 2016-08-27.
 */
@RepositoryRestResource(path = 'comments')
interface CommentRepository extends JpaRepository<Comment, Long>{
}
