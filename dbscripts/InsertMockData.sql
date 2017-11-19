-- POPULATE USER ROLES
INSERT INTO role ("role_name") 
  VALUES ('administrator'),
          ('clinician'),
          ('receptionist'),
          ('pharmacist'),
          ('patient');

-- POPULATE USERS
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password") 
  VALUES ('Desmond', 'Leung', '778-987-1234', '3233 Wesbrook Mall, Vancouver, BC V6T 1W5', 'dleung', 'no'),
          ('Nicholas', 'Chim', '778-321-7890', '2205 Lower Mall, Vancouver, BC V6T 1Z4', 'nchim', 'no'),
          ('Cynthia', 'Deng', '778-356-7848', '2424 E 1st Ave, Vancouver, BC V5N 1C3', 'cdeng', 'no'),
          ('Bryan', 'Chiu', '778-423-8575', '4620 Dunbar St, Vancouver, BC V6S 2G8', 'bchiu', 'no'),
          ('Sullivan', 'Keith', '778-818-7032', '208 Hastings Street, Vancouver, BC V6C 1B4', 'skeith', 'no'),
          ('Aaron', 'Chan', '778-889-0361', '4370 Robson St, Vancouver, BC V6B 3K9', 'achan', 'no'),
          ('Phoebe', 'Wong', '778-645-0812', '3080 Hastings Street, Vancouver, BC V62 1X4', 'pwong', 'no'),
          ('Meredith', 'Little', '778-782-5194', '1881 Nootka Street, Vancouver, BC V5M 3M5', 'mlittle', 'no'),
          ('Cara', 'Ross', '778-638-5414', '3982 Cordova Street, Vancouver, BC V6B 1E1', 'cross', 'no'),
          ('Isabelle', 'Duncan', '778-335-8179', '2826 Hastings Street, Vancouver, BC V6C 1B4', 'iduncan', 'no'),
          ('Alice', 'Sherman', '778-542-0372', '3935 Cardero St, Vancouver, BC S4P 3Y2', 'alsherma', 'hunter1'),
          ('Kaia', 'Miller', '778-168-9173', '122 Walter Hardwick Ave, Vancouver, BC V5Y 0C9', 'kaimille', 'hunter1'),
          ('Briella', 'Greer', '778-408-9367', '2485 Broadway W, Vancouver, BC V6K 2E8', 'brielgree', 'hunter1'),
          ('Tyler', 'Pate', '778-753-7929', '563 Union St, Vancouver, BC V6A 2B7', 'tylerpate', 'hunter1'),
          ('Reese', 'Hopkins', '778-847-2470', '3007 8th Ave W, Vancouver, BC V6K 2C2', 'reesehopkin', 'hunter1'),
          ('Lexie', 'Pope', '778-179-0252', '5980 Battison St, Vancouver, BC V5R 4M8', 'lexpop', 'hunter1'),
          ('Christina', 'Bullock', '778-499-1149', '1410 Tolmie St, Vancouver, BC V6R 4B3', 'christbullock', 'hunter1'),
          ('Harrison', 'Norman', '778-897-8170', '836 30th Ave E, Vancouver, BC V5V 2W1', 'harrnorma', 'hunter1'),
          ('Elaine', 'Mcclain', '778-122-4024', '2439 7th Ave W, Vancouver, BC V6K 1Y6', 'elainemcclain', 'hunter1'),
          ('Peter', 'Ryan', '778-391-5708', '2425 7th Ave W, Vancouver, BC V6K 1Y6', 'petrya', 'hunter1');

-- ASSIGN USER ROLES
INSERT INTO user_role ("user_id", "role_id")
  VALUES (1, 1),
          (2, 1),
          (3, 1),
          (4, 1),
          (5, 2),
          (6, 2),
          (7, 2),
          (8, 3),
          (9, 4),
          (10, 5),
          (11, 5),
          (12, 5),
          (13, 5),
          (14, 5),
          (15, 5),
          (16, 5),
          (17, 5),
          (18, 5),
          (19, 5),
          (20, 5);

-- ASSIGN USER HEALTH INFO
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex")
  VALUES (1, 7894546798, '1984-03-23', 165, 'O+', 'M'),
          (2, 3586787897, '1986-07-21', 138, 'AB+', 'M'),
          (3, 9867544478, '1956-02-24', 135, 'B-', 'F'),
          (4, 9787897867, '1992-09-02', 140, 'AB+', 'M'),
          (5, 3456677689, '1986-03-19', 178, 'AB+', 'M'),
          (6, 8776756755, '1989-06-20', 163, 'B+', 'M'),
          (7, 5567678789, '1989-09-10', 163, 'B+', 'F'),
          (8, 4567677687, '1958-12-10', 134, 'AB+', 'F'),
          (9, 9121746121, '1974-11-03', 171, 'O+', 'F'),
          (10, 7797662508, '1969-04-04', 176, 'O-', 'F'),
          (11, 9151695106, '1981-05-23', 165, 'O+', 'F'),
          (12, 8126833431, '1986-07-29', 138, 'AB+', 'F'),
          (13, 3615308310, '1956-08-23', 135, 'B-', 'F'),
          (14, 7151151294, '1992-03-12', 140, 'AB+', 'M'),
          (15, 2543669742, '1986-03-29', 178, 'AB+', 'M'),
          (16, 3042128721, '1989-09-30', 163, 'B+', 'F'),
          (17, 8023458454, '1989-03-10', 163, 'B+', 'F'),
          (18, 8726346196, '1958-11-16', 134, 'AB+', 'M'),
          (19, 6848503302, '1986-06-11', 141, 'A-', 'F'),
          (20, 2294738669, '1962-01-22', 155, 'AB-', 'M');

-- CREATE TIME BLOCKS
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") 
  VALUES (1, '09:00:00', '09:30:00'),
          (2, '09:30:00', '10:00:00'),
          (3, '10:00:00', '10:30:00'),
          (4, '10:30:00', '11:00:00'),
          (5, '11:00:00', '11:30:00'),
          (6, '11:30:00', '12:00:00'),
          (7, '12:00:00', '12:30:00'),
          (8, '12:30:00', '13:00:00'),
          (9, '13:00:00', '13:30:00'),
          (10, '13:30:00', '14:00:00'),
          (11, '14:00:00', '14:30:00'),
          (12, '14:30:00', '15:00:00'),
          (13, '15:00:00', '15:30:00'),
          (14, '15:30:00', '16:00:00'),
          (15, '16:00:00', '16:30:00'),
          (16, '16:30:00', '17:00:00');

-- ASSIGN AVAILABILITIES
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id")
  VALUES (1, 0, 5),
          (2, 0, 5),
          (3, 0, 5),
          (4, 0, 5),
          (5, 0, 5),
          (6, 0, 5),
          (7, 0, 5),
          (8, 0, 5),
          (9, 0, 5),
          (10, 0, 5),
          (11, 0, 5),
          (12, 0, 5),
          (1, 1, 5),
          (2, 1, 5),
          (3, 1, 5),
          (4, 1, 5),
          (5, 1, 5),
          (6, 1, 5),
          (7, 1, 5),
          (8, 1, 5),
          (9, 1, 5),
          (10, 1, 5),
          (11, 1, 5),
          (12, 1, 5),
          (1, 2, 5),
          (2, 2, 5),
          (3, 2, 5),
          (4, 2, 5),
          (5, 2, 5),
          (6, 2, 5),
          (7, 2, 5),
          (8, 2, 5),
          (9, 2, 5),
          (10, 2, 5),
          (11, 2, 5),
          (12, 2, 5),
          (1, 3, 5),
          (2, 3, 5),
          (3, 3, 5),
          (4, 3, 5),
          (5, 3, 5),
          (6, 3, 5),
          (7, 3, 5),
          (8, 3, 5),
          (9, 3, 5),
          (10, 3, 5),
          (11, 3, 5),
          (12, 3, 5),
          (1, 4, 5),
          (2, 4, 5),
          (3, 4, 5),
          (4, 4, 5),
          (5, 4, 5),
          (6, 4, 5),
          (7, 4, 5),
          (8, 4, 5),
          (9, 4, 5),
          (10, 4, 5),
          (11, 4, 5),
          (12, 4, 5),
          (1, 5, 5),
          (2, 5, 5),
          (3, 5, 5),
          (4, 5, 5),
          (5, 5, 5),
          (6, 5, 5),
          (7, 5, 5),
          (8, 5, 5),
          (9, 5, 5),
          (10, 5, 5),
          (11, 5, 5),
          (12, 5, 5),
          (1, 6, 5),
          (2, 6, 5),
          (3, 6, 5),
          (4, 6, 5),
          (5, 6, 5),
          (6, 6, 5),
          (7, 6, 5),
          (8, 6, 5),
          (9, 6, 5),
          (10, 6, 5),
          (11, 6, 5),
          (12, 6, 5);


-- CREATE APPOINTMENTS
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id")
  VALUES ('2017-10-19', 4, 10, 6),
          ('2017-11-08', 9, 12, 5),
          ('2017-12-19', 13, 10, 6),
          ('2018-01-08', 10, 18, 6);

-- CREATE BILLING HISTORY
INSERT INTO billing_history ("patient_id", "appointment_id", "amount", "date_paid")
VALUES (10, 1, 175.00, '2017-11-23'),
        (12, 2, 175.00, NULL);

-- CREATE APPOINTMENT RECORD
INSERT INTO appointment_record ("appointment_id", "patient_id", "notes")
  VALUES (1, 10, 'Higher than normal blood pressure; prescribed 30 units Vasotec.'),
          (2, 12, 'Prolonged cold; prescribed 60 units Tylenol 3.');

-- POPULATE MEDICATIONS
INSERT INTO medication("name", "inventory", "unit_price")
  VALUES ('Benadryl', 250, 2.33),
          ('Claritin', 250, 0.56),
          ('Ampicillin', 250, 0.32),
          ('Vasotec', 250, 0.68),
          ('Effexor XR', 250, 0.85),
          ('Glucotrol XL', 250, 0.46),
          ('Metformin', 250, 0.35),
          ('Aleve', 250, 1.00),
          ('Aspirin', 250, 0.42),
          ('Tylenol 3', 50, 0.75);

-- CREATE PRESCRIPTION
INSERT INTO prescription ("patient_id", "clinician_id", "medication_id", "date_prescribed", "dosage", "filled_by")
  VALUES (10, 6, 4, '2017-10-19 00:00:00', 30, 3),
          (12, 5, 10, '2017-11-08 00:00:00', 60, NULL);
