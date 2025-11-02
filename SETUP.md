# Install and Set Up PostgreSQL

1. First, download PostgreSQL:
   - Visit https://www.postgresql.org/download/windows/
   - Click on "Download the installer"
   - Choose the latest version for Windows

2. Run the installer:
   - Run the downloaded executable
   - When prompted for a password for the postgres user, use: password123
   - Keep the default port (5432)
   - Install all offered components (including pgAdmin)

3. After installation:
   - Open this directory in a terminal
   - Run setup-db.bat again

# Verify Installation

1. After installing PostgreSQL, open pgAdmin 4:
   - Start Menu -> PostgreSQL -> pgAdmin 4

2. In pgAdmin:
   - Connect to the server (password: password123)
   - Right-click on "Databases"
   - Click "Create" -> "Database"
   - Enter "permit_service" as the database name
   - Click "Save"

3. Run the following commands in pgAdmin's Query Tool:
```sql
CREATE USER ecommerce_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE permit_service TO ecommerce_user;
GRANT ALL ON SCHEMA public TO ecommerce_user;
```

# Start the Application

After completing the above steps:

1. Open a terminal in this directory
2. Run: npm install (if you haven't already)
3. Run: npm run start:dev

The API will be available at http://localhost:3001/permits

# Test the API

You can test the API using these endpoints:

1. Create a permit application:
```bash
curl -X POST http://localhost:3001/permits -H "Content-Type: application/json" -d '{
  "applicant_name": "John Doe",
  "applicant_email": "john@example.com",
  "permit_type": "Construction"
}'
```

2. Get all permit applications:
```bash
curl http://localhost:3001/permits
```

3. Get a specific permit application:
```bash
curl http://localhost:3001/permits/1
```

4. Update a permit application status:
```bash
curl -X PATCH http://localhost:3001/permits/1 -H "Content-Type: application/json" -d '{
  "application_status": "Approved"
}'
```

5. Delete a permit application:
```bash
curl -X DELETE http://localhost:3001/permits/1
```