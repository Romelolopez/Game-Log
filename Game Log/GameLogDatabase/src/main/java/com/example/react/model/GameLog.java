package com.example.react.model;

import javax.persistence.*;

@Entity
@Table(name="gamelog")

public class GameLog {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String date;
	private String home_team;
	private String opp_team;
	private int home_team_score;
	private int opp_team_score;
	private String winner;
	
	public GameLog()
	{
		
	}
	
	public GameLog(int id,
	String date,
	String home_team,
	String opp_team,
	int home_team_score,
	int opp_team_score,
	String winner)
	{
		super();
		this.id = id;
		this.date = date;
		this.home_team = home_team;
		this.opp_team = opp_team;
		this.home_team_score = home_team_score;
		this.opp_team_score = opp_team_score;
		this.winner = winner;
		
		
	}
	
	public String winner(){
		String winner;
		
		if(home_team_score > opp_team_score)
		{
			winner = home_team;
		}
		else
		{
			winner = opp_team;
		}
		return winner;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getHome_team() {
		return home_team;
	}

	public void setHome_team(String home_team) {
		this.home_team = home_team;
	}

	public String getOpp_team() {
		return opp_team;
	}

	public void setOpp_team(String opp_team) {
		this.opp_team = opp_team;
	}

	public int getHome_team_score() {
		return home_team_score;
	}

	public void setHome_team_score(int home_team_score) {
		this.home_team_score = home_team_score;
	}

	public int getOpp_team_score() {
		return opp_team_score;
	}

	public void setOpp_team_score(int opp_team_score) {
		this.opp_team_score = opp_team_score;
	}

	public String getWinner() {
		return winner();
	}

	public void setWinner(String winner) {
		this.winner = winner;
	}
	
	
	
}
