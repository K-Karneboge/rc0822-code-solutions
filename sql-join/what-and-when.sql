SELECT
"releaseYear",
"b"."name" as "Genre",
"a"."title"
From
"filmGenre"
JOIN
"films" as "a" using ("filmId")
JOIN
"genres" as "b" using ("genreId")
Where"title" = 'Boogie Amelie'
