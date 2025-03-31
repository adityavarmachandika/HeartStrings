CREATE TABLE `comments` (
	`comment_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_name` text,
	`comment` text,
	`poem_id` integer,
	FOREIGN KEY (`poem_id`) REFERENCES `poems`(`poem_id`) ON UPDATE no action ON DELETE cascade
);
