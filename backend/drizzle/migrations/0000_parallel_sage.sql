CREATE TABLE `poems` (
	`poem_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`poem_title` text NOT NULL,
	`likes_count` integer DEFAULT 0,
	`poem_text` text NOT NULL
);
