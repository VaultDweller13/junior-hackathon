CREATE TABLE IF NOT EXISTS users (id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                                  name VARCHAR(50) UNIQUE NOT NULL,
                                  score BIGINT NOT NULL,
                                  moves_count BIGINT NOT NULL,
                                  city VARCHAR(50));