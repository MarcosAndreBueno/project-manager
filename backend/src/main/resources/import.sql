--Team
INSERT INTO team (name) VALUES('Platform Engineering');
INSERT INTO team (name) VALUES('Frontend Squad');
INSERT INTO team (name) VALUES('Backend Services');
INSERT INTO team (name) VALUES('QA & Automation');
INSERT INTO team (name) VALUES('DevOps & Infrastructure');

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

--TicketStatus
INSERT INTO ticket_status(name) VALUES ('OPEN');
INSERT INTO ticket_status(name) VALUES ('IN_PROGRESS');
INSERT INTO ticket_status(name) VALUES ('WAITING_CLIENT');
INSERT INTO ticket_status(name) VALUES ('TESTING');
INSERT INTO ticket_status(name) VALUES ('STAGING');
INSERT INTO ticket_status(name) VALUES ('CANCELED');
INSERT INTO ticket_status(name) VALUES ('DONE');

--Tickets
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Improve authentication module','Epic: Modernize authentication flow and increase security.',1,2,DATEADD('DAY', -90, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Refactor login controller','Clean up legacy login flow and remove unused logic.',2,11,DATEADD('DAY', -88, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Implement failed login rate-limiting','Add per-user and per-IP rate limiting rules.',1,12,DATEADD('DAY', -85, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Create unit tests for authentication service.','Increase coverage for authentication utils and services.',2,1,DATEADD('DAY', -82, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Frontend UI redesign','Epic: Update layout following new design guidelines.',2,5,DATEADD('DAY', -75, CURRENT_TIMESTAMP),ARRAY[7, 8, 9, 10]);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Update navigation sidebar layout','Implement new spacing and icons as per Figma design.',1,6,DATEADD('DAY', -72, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Refactor dashboard components','Break down container components into smaller units.',2,1,DATEADD('DAY', -70, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Improve form validation UX','Add inline validation messages and highlight invalid fields.',1,8,DATEADD('DAY', -67, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Replace deprecated CSS utilities','Remove old variables and adopt new global theme tokens.',7,9,DATEADD('DAY', -65, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('CI/CD pipeline improvements','Epic: Reduce build time and increase deployment reliability.',2,18,DATEADD('DAY', -60, CURRENT_TIMESTAMP),ARRAY[12, 13, 14, 15]);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Cache npm dependencies in pipeline','Speed up installation using dependency caching.',1,19,DATEADD('DAY', -58, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add integration tests step','Ensure API and frontend endpoints work after build.',2,20,DATEADD('DAY', -55, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Create rollback task for production','Enable fast rollback with image tagging strategy.',1,17,DATEADD('DAY', -53, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Parallelize lint and unit tests','Reduce execution time by splitting tasks.',7,14,DATEADD('DAY', -50, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('API performance optimization','Epic: Improve overall response times for critical endpoints.',1,10,DATEADD('DAY', -48, CURRENT_TIMESTAMP),ARRAY[17, 18, 19, 20]);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add Redis caching for product service','Cache heavy product queries to reduce DB load.',2,4,DATEADD('DAY', -45, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Optimize SQL queries in reporting endpoint','Remove unnecessary joins and add indexes.',1,3,DATEADD('DAY', -42, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Benchmark API under load','Compare performance before and after optimizations.',1,2,DATEADD('DAY', -40, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Refactor pagination logic','Fix inconsistent results on multi-page responses.',7,13,DATEADD('DAY', -38, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('QA automation suite expansion','Epic: Increase test automation coverage.',2,15,DATEADD('DAY', -35, CURRENT_TIMESTAMP),ARRAY[22, 23, 24, 25]);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add automated login tests','Cover positive and negative login flows.',1,14,DATEADD('DAY', -33, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Write UI tests for checkout','Verify cart, payment and confirmation screens.',2,16,DATEADD('DAY', -30, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Mock API layer for test isolation','Use mock services to stabilize test runs.',1,17,DATEADD('DAY', -28, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Measure automation test flakiness','Collect metrics to identify unstable tests.',7,15,DATEADD('DAY', -25, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Payment gateway migration','Epic: Replace legacy payment provider.',2,12,DATEADD('DAY', -22, CURRENT_TIMESTAMP),ARRAY[27, 28, 29, 30]);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Integrate new payment API','Add endpoints for card and boleto transactions.',1,11,DATEADD('DAY', -20, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Implement webhook processing','Process async payment confirmations and failures.',2,1,DATEADD('DAY', -18, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Migrate card tokenization flow','Move from legacy tokens to encrypted tokens.',1,10,DATEADD('DAY', -15, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add payment retry mechanism','Retry failed payments respecting idempotency rules.',7,6,DATEADD('DAY', -13, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Fix memory leak in WebSocket service','Investigate event listeners not being unsubscribed.',2,8,DATEADD('DAY', -10, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Bug: Incorrect total price on checkout','Discount rules not being applied correctly.',1,9,DATEADD('DAY', -7, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add feature toggle for new dashboard','Enable gradual rollout of redesigned dashboard.',1,10,DATEADD('DAY', -6, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Implement dark mode theme','Add toggle and adjust layout for dark mode colors.',7,4,DATEADD('DAY', -5, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Fix file upload validation error','Large files incorrectly trigger "invalid format".',6,2,DATEADD('DAY', -4, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Refactor email notification service','Improve delivery reliability and retry logic.',2,5,DATEADD('DAY', -3, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Improve search relevance algorithm','Tune ranking model for more accurate results.',1,7,DATEADD('DAY', -3, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Log cleanup task','Purge old logs and reduce disk usage.',7,20,DATEADD('DAY', -2, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Fix 500 error in analytics endpoint','Null reference in mapping layer.',1,18,DATEADD('DAY', -2, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Update dependencies to latest versions','Upgrade Angular, NestJS, and shared packages.',7,19,DATEADD('DAY', -1, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Fix inconsistent timezone handling','Normalize timezone conversion in backend.',2,3,DATEADD('DAY', -1, CURRENT_TIMESTAMP),ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Create audit log dashboard','Display user activity logs for admins.',1,6,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Add multi-language support','Start with English and Spanish translations.',1,8,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Investigate slow DB queries','Identify heavy queries and propose optimizations.',2,9,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Create internal API documentation','Auto-generate docs using Swagger.',7,11,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Fix logout redirect issue','User session is cleared but redirect fails.',1,12,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Enhance logging middleware','Add latency measurement and user ID tracing.',2,14,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Refactor date formatting utils','Standardize date outputs across the app.',7,15,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Bug: Chart legends not updating','Legends remain outdated after filter changes.',1,1,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
INSERT INTO ticket (title, description, status_id, user_id, created_in, child_tickets) VALUES ('Improve accessibility support','Add ARIA labels and keyboard navigation.',2,17,CURRENT_TIMESTAMP,ARRAY[]::INTEGER ARRAY);
