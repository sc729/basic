package com.neo

import com.neo.basic.api.Comment
import com.neo.basic.api.CommentRepository
import com.neo.basic.api.Tr
import com.neo.basic.api.TrRepository;

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
    CommandLineRunner loader(CommentRepository repository, TrRepository repository2){
        return {
            println '-------------------loader started------------------------------'

            repository.save(new Comment(author: '서종효', text : '이것은 첫번째 댓글'))
            repository.save(new Comment(author: '똘이', text: '이것은 두번째 댓글'))
            repository.save(new Comment(author: '장군이', text: '이것은 세번째 댓글'))

            println repository.findAll()
			
			repository2.save(new Tr(trName: 'acsw1002v', trPurpose : '계좌조회' ))
			repository2.save(new Tr(trName: 'acsv0350v', trPurpose : '계좌상세' ))
			repository2.save(new Tr(trName: 'otst2820v', trPurpose : '계좌잔고조회' ))
			repository2.save(new Tr(trName: 'acsw1000v', trPurpose : '계좌전체조회' ))
			repository2.save(new Tr(trName: 'wpsa8040v', trPurpose : '종목상세조회' ))
			repository2.save(new Tr(trName: 'wpsa8060v', trPurpose : '종목조회' ))
			repository2.save(new Tr(trName: 'cssz0440u', trPurpose : '나의 펀드등급' ))
			
			println repository2.findAll()
			println repository2.findByTrNameIgnoreCaseContaining('acsw1002v')
        }
    }













}


