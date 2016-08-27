package com.neo

import com.neo.com.neo.basic.com.neo.basic.api.CommentRepository
import com.neo.com.neo.basic.com.neo.basic.api.Comment
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

/**
 * Created by Suh on 2016-08-27.
 */
@SpringBootApplication
class BasicApplication {

    static main(args){
        SpringApplication.run(BasicApplication.class, args);
    }


    @Bean
    CommandLineRunner loader(CommentRepository repository){
        return {
            println '-------------------loader started------------------------------'

            repository.save(new Comment(author: '서종효', text : '이것은 첫번째 댓글'))
            repository.save(new Comment(author: '똘이', text: '이것은 두번째 댓글'))
            repository.save(new Comment(author: '장군이', text: '이것은 세번째 댓글'))

            println repository.findAll()
        }
    }













}


