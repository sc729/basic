package com.neo.basic.api

import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration

/**
 * Created by Suh on 2016-08-27.
 */
@Configuration
class EntityConfig extends  RepositoryRestMvcConfiguration{

    @Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Comment.class);
		config.exposeIdsFor(Tr.class);
    }
}


