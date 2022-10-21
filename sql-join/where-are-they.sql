SELECT
"a"."line1",
"a"."district",
"c"."name" as "cityName",
"b"."name" as "countryName"
FROM
"cities" as "c"
JOIN
"addresses" as "a" using ("cityId")
JOIN
"countries" as "b" using ("countryId")
