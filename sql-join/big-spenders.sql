SELECT
"c"."firstName",
"c"."lastName",
"p"."amount"
FROM
"payments" as "p"
JOIN
"customers" as "c" using ("customerId")
order BY
"amount" DESC
LIMIT
10
