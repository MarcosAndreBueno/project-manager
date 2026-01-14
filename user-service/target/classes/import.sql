--User
INSERT INTO tb_user(name, team_id) VALUES('James',     1);
INSERT INTO tb_user(name, team_id) VALUES('Emma',      1);
INSERT INTO tb_user(name, team_id) VALUES('Michael',   1);
INSERT INTO tb_user(name, team_id) VALUES('Olivia',    1);
INSERT INTO tb_user(name, team_id) VALUES('Liam',      2);
INSERT INTO tb_user(name, team_id) VALUES('Sophia',    2);
INSERT INTO tb_user(name, team_id) VALUES('Noah',      2);
INSERT INTO tb_user(name, team_id) VALUES('Ava',       2);
INSERT INTO tb_user(name, team_id) VALUES('Ethan',     3);
INSERT INTO tb_user(name, team_id) VALUES('Isabella',  3);
INSERT INTO tb_user(name, team_id) VALUES('Jacob',     3);
INSERT INTO tb_user(name, team_id) VALUES('Mia',       3);
INSERT INTO tb_user(name, team_id) VALUES('William',   4);
INSERT INTO tb_user(name, team_id) VALUES('Charlotte', 4);
INSERT INTO tb_user(name, team_id) VALUES('Benjamin',  4);
INSERT INTO tb_user(name, team_id) VALUES('Amelia',    4);
INSERT INTO tb_user(name, team_id) VALUES('Lucas',     5);
INSERT INTO tb_user(name, team_id) VALUES('Harper',    5);
INSERT INTO tb_user(name, team_id) VALUES('Henry',     5);
INSERT INTO tb_user(name, team_id) VALUES('Evelyn',    5);

--UserConfig
INSERT INTO user_config(user_id, kanban_col_config) VALUES(1, ARRAY[1,2,6,7]);
