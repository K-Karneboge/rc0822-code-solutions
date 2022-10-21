SELECT
"countries"."name" as "countryName",
count ("a"."countryId")
FROM
"cities" as "a"
JOIN
"countries" USING ("countryId")
GROUP by "countries"."name"
order by "countries"."name"
