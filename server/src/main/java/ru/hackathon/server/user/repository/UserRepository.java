package ru.hackathon.server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.hackathon.server.user.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}