package com.neo.basic.api

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table
import javax.persistence.*

@Entity
//@Table(name="tr", schema="para")
@Table(name="tr")
class Tr {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	Long id
	
	@Column(name="trName")
	String trName
	
	@Column(name="trPurpose")
	String trPurpose
	

	String toString(){
		"{id: ${id}, trName: ${trName}, trPurpose: ${trPurpose}}"
	}
	
}
