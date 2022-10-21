SELECT
"a"."firstName",
"a"."lastName"
FROM
"actors" as "a"
JOIN
"castMembers" as "b" USING ("actorId")
JOIN
"films" as "c" USING ("filmId")
WHERE
"title" = 'Jersey Sassy'
