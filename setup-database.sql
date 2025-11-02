-- Create the database
CREATE DATABASE permit_service;

-- Connect to the new database
\c permit_service;

-- Create the ecommerce_user if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT FROM pg_user WHERE usename = 'ecommerce_user') THEN
    CREATE USER ecommerce_user WITH PASSWORD 'password123';
  END IF;
END
$$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE permit_service TO ecommerce_user;
GRANT ALL PRIVILEGES ON SCHEMA public TO ecommerce_user;