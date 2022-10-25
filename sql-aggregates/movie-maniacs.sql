SELECT
"firstName",
"lastName",
sum("payments"."amount") as "totalPaid"

from
"payments"

Join
"customers" using ("customerId")

group by
"customers"."customerId"

order by
"totalPaid" DESC
