
az cosmosdb database create -g FrankStreamDev -n readingnotes --db-name readingnotes

az cosmosdb collection create --collection-name postToRead2 -g FrankStreamDev --db-name readingnotes --partition-key-path /domain
