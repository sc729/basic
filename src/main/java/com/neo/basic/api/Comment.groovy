package com.neo.basic.api

import org.springframework.data.rest.core.annotation.RestResource

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * Created by Suh on 2016-08-27.
 */
@Entity
class Comment {



    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id
    String author
    String text

    String toString(){
        "{id: ${id}, author: ${author}, text: ${text}}"
    }

}
