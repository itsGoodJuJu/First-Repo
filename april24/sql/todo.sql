-- Create a sql file for your todo list that seeds three todos into the database. This work just includes creating and writing the necessary commands to add the todos. Test your sql file by running the commands in the terminal. We will be using this file later today

CREATE TABLE todo_list (id SERIAL PRIMARY KEY, todo VARCHAR(50), completed BOOLEAN DEFAULT false);

INSERT INTO todo_list(todo, completed) VALUES ('take out Tofu and Nori', false), ('feed Tofu, Nori, and Chia', false), ('give medicine', false), ('clean litterbox', false);

SELECT * FROM todo_list;

