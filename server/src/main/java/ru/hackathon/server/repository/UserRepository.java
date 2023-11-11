package ru.hackathon.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.hackathon.server.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}