package com.example.react.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.react.exception.ResourceNotFoundException;
import com.example.react.model.GameLog;
import com.example.react.repository.GameLogRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")

public class GameLogController {
	
	@Autowired
	private GameLogRepository gLogRepo;
	
	//GET ALL GAMES
	@GetMapping("/games")
	public List<GameLog> getAllGames()
	{
		return gLogRepo.findAll();
	}
	
	//GAME BY DATE - SEARCH
	@GetMapping("/date={date}")
	public List<GameLog> getStudentByDate(@PathVariable String date)
	{
		
		return gLogRepo.findByDate(date);
	}
	
	//ADD GAME
	@PostMapping("/AddGames")
	public GameLog newGame(@RequestBody GameLog s)
	{
		return gLogRepo.save(s);
	}
	
	//DELETE BY GAME ID
	@DeleteMapping("/game={id}")
	public String deleteGame(@PathVariable int id)
	{
		gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student Not Found"));
		gLogRepo.deleteById(id);
		return "The student with id: " + id + " is removed from the database.";
	}
	
	//UPDATE THE DATE
		@PutMapping("/update/date/id={id}")
		public ResponseEntity<GameLog> updateDate(@PathVariable int id, @RequestBody GameLog date)
		{
			GameLog s = gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
			s.setDate(date.getDate());
			return ResponseEntity.ok(gLogRepo.save(s));
		}
	
	//UPDATE THE HOME TEAM NAME
	@PutMapping("/update/home_team/id={id}")
	public ResponseEntity<GameLog> updateHomeTeam(@PathVariable int id, @RequestBody GameLog home)
	{
		GameLog s = gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
		s.setHome_team(home.getHome_team());
		return ResponseEntity.ok(gLogRepo.save(s));
	}
	
	//UPDATE THE OPP TEAM NAME
		@PutMapping("/update/opp_team/id={id}")
		public ResponseEntity<GameLog> updateOppTeam(@PathVariable int id, @RequestBody GameLog opp)
		{
			GameLog s = gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
			s.setOpp_team(opp.getOpp_team());
			return ResponseEntity.ok(gLogRepo.save(s));
		}
	
	//UPDATE THE HOME TEAM SCORE
		@PutMapping("/update/home_team_score/id={id}")
		public ResponseEntity<GameLog> updateHomeTeamScore(@PathVariable int id, @RequestBody GameLog homeScore)
		{
			GameLog s = gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
			s.setHome_team_score(homeScore.getHome_team_score());
			return ResponseEntity.ok(gLogRepo.save(s));
		}
		
	//UPDATE THE HOME TEAM SCORE
			@PutMapping("/update/opp_team_score/id={id}")
			public ResponseEntity<GameLog> updateOppTeamScore(@PathVariable int id, @RequestBody GameLog oppScore)
			{
				GameLog s = gLogRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
				s.setOpp_team_score(oppScore.getOpp_team_score());
				return ResponseEntity.ok(gLogRepo.save(s));
			}	
	

}
