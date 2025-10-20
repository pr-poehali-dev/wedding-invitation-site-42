CREATE TABLE IF NOT EXISTS wedding_guests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    attendance VARCHAR(20) NOT NULL CHECK (attendance IN ('yes', 'no', 'maybe')),
    guests_count INTEGER DEFAULT 1,
    dietary_restrictions TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);