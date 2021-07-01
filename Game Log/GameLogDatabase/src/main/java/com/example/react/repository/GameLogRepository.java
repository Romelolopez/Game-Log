package com.example.react.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.react.model.GameLog;




@Repository
public interface GameLogRepository extends JpaRepository<GameLog,Integer>{

	List<GameLog> findByDate(String date);


}