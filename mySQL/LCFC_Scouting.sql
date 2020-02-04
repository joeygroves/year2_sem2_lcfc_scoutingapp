Create DATABASE LCFC_Scouting;


CREATE TABLE staff(
username VARCHAR(25) NOT NULL,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
role VARCHAR(40) NOT NULL,
PRIMARY KEY (username)
);

CREATE TABLE club(
club_id INTEGER NOT NULL,
club_name VARCHAR(50) NOT NULL,
PRIMARY KEY (club_id)
);

CREATE TABLE player(
player_id VARCHAR(10) NOT NULL,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
club INTEGER,
height FLOAT,
age INTEGER,
position VARCHAR(25) NOT NULL,
contract VARCHAR(25),
PRIMARY KEY (player_id),
FOREIGN KEY (club) REFERENCES club(club_id)
);


CREATE TABLE goalkeeper_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
handling INTEGER,
shot_stopping INTEGER,
tendancy_to_punch INTEGER,
tendancy_to_catch INTEGER,
positioning INTEGER,
recovery_saves INTEGER,
control_when_recieving INTEGER,
right_foot INTEGER,
left_foot INTEGER,
dead_ball_kicks INTEGER,
kicking_out_of_hands INTEGER,
throwing INTEGER,
kicking_under_pressure INTEGER,
kicking_when_given_time INTEGER,
dealing_with_crosses INTEGER,
one_v_one INTEGER,
dealing_with_through_ball INTEGER,
agility INTEGER,
reactions INTEGER,
strength INTEGER,
speed INTEGER,
bravery INTEGER,
leadership INTEGER,
presence INTEGER,
communication INTEGER,
reaction_to_mistake INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);


CREATE TABLE centre_back_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
recieving_under_pressure INTEGER,
short_passing INTEGER,
long_passing INTEGER,
carrying_the_ball_forward INTEGER,
right_foot INTEGER,
left_foot INTEGER,
threat_at_set_plays INTEGER,
ariel_ability INTEGER,
one_v_one INTEGER,
tackling INTEGER,
marking INTEGER,
interceptions INTEGER,
sensing_danger INTEGER,
defending_crosses INTEGER,
pressing INTEGER,
recovery_runs INTEGER,
tracking_runners INTEGER,
agility INTEGER,
angles_to_recieve INTEGER,
distances INTEGER,
recovering_to_shape INTEGER,
pace_when_turning INTEGER,
jump INTEGER,
mobility INTEGER,
strength INTEGER,
aggression INTEGER,
bravery INTEGER,
leadership INTEGER,
team_work INTEGER,
communicaton INTEGER,
reponse_to_criticism INTEGER,
reaction_to_mistake INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);


CREATE TABLE full_back_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
recieving_under_pressure INTEGER,
short_passing INTEGER,
long_passing INTEGER,
control INTEGER,
right_foot INTEGER,
left_foot INTEGER,
one_v_one INTEGER,
ariel_ability INTEGER,
crossing INTEGER,
tackling INTEGER,
defending_far_post INTEGER,
stopping_the_cross INTEGER,
pressing INTEGER,
recovery_runs INTEGER,
tracking_runners INTEGER,
agility INTEGER,
angles_to_recieve INTEGER,
link_up_with_winger INTEGER,
covering_across INTEGER,
willlingness_to_get_forward INTEGER,
pace INTEGER,
mobility INTEGER,
work_rate INTEGER,
strength INTEGER,
jump INTEGER,
bravery INTEGER,
leadership INTEGER,
team_work INTEGER,
communicaton INTEGER,
reponse_to_criticism INTEGER,
reaction_to_mistake INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);


CREATE TABLE centre_midfielder_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
control_under_pressure INTEGER,
bravery_in_posession INTEGER,
short_passing INTEGER,
switching_play INTEGER,
running_with_the_ball INTEGER,
right_foot INTEGER,
left_foot INTEGER,
one_v_one INTEGER,
ariel_ability INTEGER,
shooting INTEGER,
crossing INTEGER,
tackling INTEGER,
closing_down INTEGER,
recovery_runs INTEGER,
marking INTEGER,
agility INTEGER,
finding_space INTEGER,
vision INTEGER,
creativity INTEGER,
speed INTEGER,
movement_skills INTEGER,
work_rate INTEGER,
strength INTEGER,
communicaton INTEGER,
concentration INTEGER,
commitment INTEGER,
emotional_control INTEGER,
confidence INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);



CREATE TABLE wide_midfielder_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
control INTEGER,
recieving_under_pressure INTEGER,
short_passing INTEGER,
switching_play INTEGER,
right_foot INTEGER,
left_foot INTEGER,
one_v_one INTEGER,
ariel_ability INTEGER,
dribbling INTEGER,
shooting INTEGER,
crossing INTEGER,
supporting_full_back INTEGER,
tackling INTEGER,
pressing INTEGER,
positional_awareness INTEGER,
recovery_runs INTEGER,
tracking_runners INTEGER,
agility INTEGER,
coming_in_off_the_line INTEGER,
finding_space_out_wide INTEGER,
link_up_with_full_back INTEGER,
willingness_to_get_forward INTEGER,
pace INTEGER,
speed_when_dribbling INTEGER,
strength INTEGER,
work_rate INTEGER,
bravery INTEGER,
leadership INTEGER,
teamwork INTEGER,
communication INTEGER,
response_to_criticism INTEGER,
reaction_to_mistakes INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);


CREATE TABLE striker_reports(
report_id VARCHAR(10) NOT NULL,
player VARCHAR(20) NOT NULL,
club_played INTEGER NOT NULL,
date_played DATE,
ht_score VARCHAR(10),
ft_score VARCHAR(10),
scouted_by VARCHAR(25) NOT NULL,
hold_up_play INTEGER,
recieving_under_pressure INTEGER,
link_up_play INTEGER,
right_foot INTEGER,
left_foot INTEGER,
one_v_one INTEGER,
ariel_ability INTEGER,
finishing INTEGER,
right_foot_shooting INTEGER,
left_foot_shooting INTEGER,
crossing INTEGER,
one_v_two INTEGER,
tackling INTEGER,
pressing INTEGER,
recovering_into_shape INTEGER,
agility INTEGER,
dropping_into_space INTEGER,
runs_off_the_shoulder INTEGER,
running_the_channels INTEGER,
movement_off_the_ball INTEGER,
pace INTEGER,
mobility INTEGER,
strength INTEGER,
work_rate INTEGER,
jump INTEGER,
bravery INTEGER,
leadership INTEGER,
teamwork INTEGER,
communication INTEGER,
response_to_criticism INTEGER,
reaction_to_mistakes INTEGER,
traits VARCHAR(1000),
notes VARCHAR(1000),
PRIMARY KEY (report_id),
FOREIGN KEY (player) REFERENCES player(player_id),
FOREIGN KEY (scouted_by) REFERENCES staff(username),
FOREIGN KEY (club_played) REFERENCES club(club_id)
);