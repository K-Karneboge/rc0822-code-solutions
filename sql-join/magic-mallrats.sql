SELECT
"firstName",
"lastName"
FROM
"customers"
JOIN
"rentals" using ("customerId")
JOIN
"inventory" using ("inventoryId")
JOIN
"films" using ("filmId")
WHERE
"title" = 'Magic Mallrats'
