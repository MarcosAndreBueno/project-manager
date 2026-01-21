--User
INSERT INTO tb_user(name, team_id, ticket) VALUES('James',     1, ARRAY[52, 47, 36]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Emma',      1, ARRAY[28]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Michael',   1, ARRAY[4, 7, ]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Olivia',    1, ARRAY[1, 18, ]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Liam',      2, ARRAY[17, 44]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Sophia',    2, ARRAY[16, 35]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Noah',      2, ARRAY[5, 48]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Ava',       2, ARRAY[6, 31]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Ethan',     3, ARRAY[45]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Isabella',  3, ARRAY[8, 42]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Jacob',     3, ARRAY[9, 33]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Mia',       3, ARRAY[15, 34]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('William',   4, ARRAY[2, 26]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Charlotte', 4, ARRAY[3, 25]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Benjamin',  4, ARRAY[14, 21]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Amelia',    4, ARRAY[22, 49]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Lucas',     5, ARRAY[20, 24]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Harper',    5, ARRAY[23, 37]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Henry',     5, ARRAY[13, 40]);
INSERT INTO tb_user(name, team_id, ticket) VALUES('Evelyn',    5, ARRAY[10, 19]);

--UserConfig
INSERT INTO user_config(user_id, kanban_col_config) VALUES(1, ARRAY[1,2,6,7]);
