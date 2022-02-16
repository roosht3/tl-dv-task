mongo -- "$MONGO_INITDB_DATABASE" <<EOF
db.createUser({
  user: '$TLDV_MONGODB_USER_NAME',
  pwd: '$TLDV_MONGODB_USER_PASS',
  roles: [
    {
      role: "readWrite",
      db: '$TLDV_MONGODB_DB_NAME',
    },
  ],
});
EOF