@echo off
SET PGPASSWORD=password123

REM Create user if not exists
psql -U postgres -c "DO $$ BEGIN CREATE USER ecommerce_user WITH PASSWORD 'password123'; EXCEPTION WHEN DUPLICATE_OBJECT THEN RAISE NOTICE 'User already exists'; END $$;"

REM Create database if not exists
psql -U postgres -c "SELECT 'CREATE DATABASE permit_service' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'permit_service')\gexec"

REM Grant privileges
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE permit_service TO ecommerce_user;"

REM Connect to the new database and grant schema privileges
psql -U postgres -d permit_service -c "GRANT ALL ON SCHEMA public TO ecommerce_user;"

pause