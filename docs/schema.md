# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## steps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | string    | not null
project_id  | integer   | not null, foreign key (references projects), indexed

## pictures 
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
imageable_id   | integer   | not null, foreign key(can reference project/steps/users)
imageable_type | string    | not null

