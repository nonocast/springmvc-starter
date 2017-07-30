INSERT INTO user (name, email) VALUES ('Hui Cao', 'nonocast@gmail.com');
INSERT INTO user (name, email) VALUES ('Xiaodong Ge', 'gexi7n@gmail.com');
INSERT INTO user (name, email) VALUES ('Changjun Feng', 'fengchangjun@shgbit.com');
INSERT INTO user (name, email) VALUES ('Yagang Chen', 'chenyagang@shgbit.com');
INSERT INTO user (name, email) VALUES ('Weijun Cao', 'beat@shgbit.com');
INSERT INTO user (name, email) VALUES ('李毓洁', 'naodaixiaoxiao@qq.com');


/*
DROP PROCEDURE IF EXISTS create_users;
CREATE PROCEDURE create_users(count INTEGER)
  BEGIN

    SET @i = 1;
    WHILE @i < count+1 DO
      SET @email = concat("user_", @i, "@gmail.com");
      SET @username = concat("user_", @i);
      INSERT INTO user (email, name) VALUES(@email, @username);

      SET @i = @i + 1;
    END WHILE;

  END;
;;

CALL create_users(800);
*/