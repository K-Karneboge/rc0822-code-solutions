Select
"genres"."name"  as "Genre",
count ("filmGenre"."genreId") as "genresStarred"
from "actors"
join "castMembers" using ("actorId")
Join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
WHERE "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genres"."name"
order BY "genresStarred" DESC
