# pg-indexes

## USAGE

```sh
npx pdehaan/pg-indexes ./pg-indexes.sql
```

Where you have a local ./pg-indexes.sql file that is the output from the following query:

```sql
SELECT indexdef
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename NOT LIKE 'knex_migrations%'
ORDER BY tablename, indexname;
```

For example, consider the following ./pg-indexes.sql file:

```sql
  CREATE UNIQUE INDEX client_auth_pkey ON public.client_auth USING btree (id)
  CREATE INDEX client_auth_token_idx ON public.client_auth USING btree (token)
  CREATE UNIQUE INDEX client_auth_token_unique ON public.client_auth USING btree (token)
  CREATE UNIQUE INDEX devices_pkey ON public.devices USING btree (id)
  CREATE INDEX devices_pubkey_idx ON public.devices USING btree (pubkey)
  CREATE INDEX devices_user_id_idx ON public.devices USING btree (user_id)
```

You'd get the following output:

```sh
$ npx pdehaan/pg-indexes ./pg-indexes.sql

client_auth.id
client_auth.token
devices.id
devices.pubkey
devices.user_id
```
