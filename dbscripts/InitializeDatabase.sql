-- DROP TABLES
DROP TABLE IF EXISTS "appointment" CASCADE;
DROP TABLE IF EXISTS "appointment_record" CASCADE;
DROP TABLE IF EXISTS "availability" CASCADE;
DROP TABLE IF EXISTS "billing_history" CASCADE;
DROP TABLE IF EXISTS "clinic_user" CASCADE;
DROP TABLE IF EXISTS "medication" CASCADE;
DROP TABLE IF EXISTS "prescription" CASCADE;
DROP TABLE IF EXISTS "role" CASCADE;
DROP TABLE IF EXISTS "timeblock" CASCADE;
DROP TABLE IF EXISTS "user_health_info" CASCADE;
DROP TABLE IF EXISTS "user_role" CASCADE;

-- CREATE TABLES
CREATE TABLE "clinic_user" (
	user_id serial,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	phone_number varchar(30),
	address varchar,
	username varchar(30) UNIQUE,
	password varchar(30),
	is_active boolean DEFAULT true,
	PRIMARY KEY (user_id)
);

CREATE TABLE "role" (
	role_id serial PRIMARY KEY,
	role_name varchar(30) UNIQUE NOT NULL
);

CREATE TABLE "user_role" (
	user_id int,
	role_id int,
	PRIMARY KEY (user_id),
	FOREIGN KEY (user_id) REFERENCES "clinic_user"(user_id),
	FOREIGN KEY (role_id) REFERENCES "role"(role_id)
);

CREATE TABLE "timeblock" (
	timeblock_id int,
	start_time time,
	end_time time,
	PRIMARY KEY (timeblock_id)
);

CREATE TABLE "availability" (
	timeblock_id int,
	day_of_week int,
	clinician_id int,
	is_active boolean DEFAULT true,
	PRIMARY KEY (timeblock_id, day_of_week, clinician_id),
	FOREIGN KEY (timeblock_id) REFERENCES "timeblock"(timeblock_id),
	FOREIGN KEY (clinician_id) REFERENCES "clinic_user"(user_id)
);

CREATE TABLE "appointment" (
	appointment_id serial,
	date timestamp,
	timeblock_id int,
	patient_id int,
	clinician_id int,
	PRIMARY KEY (appointment_id),
	UNIQUE (date, timeblock_id, patient_id),
  UNIQUE (date, timeblock_id, clinician_id),
	FOREIGN KEY (timeblock_id) REFERENCES "timeblock"(timeblock_id),
	FOREIGN KEY (patient_id) REFERENCES "clinic_user"(user_id),
	FOREIGN KEY (clinician_id) REFERENCES "clinic_user"(user_id)
);

CREATE TABLE "appointment_record" (
	appointment_id int,
	patient_id int,
	notes varchar,
	PRIMARY KEY (appointment_id),
	FOREIGN KEY (appointment_id) REFERENCES "appointment"(appointment_id) ON DELETE CASCADE,
	FOREIGN KEY (patient_id) REFERENCES "clinic_user"(user_id)
);

CREATE TABLE "user_health_info" (
	user_id int,
	phn bigint,
	dob date,
	height int,
	blood_type varchar(5),
	sex varchar(2),
	PRIMARY KEY (user_id),
	UNIQUE (phn),
	FOREIGN KEY (user_id) REFERENCES "clinic_user"(user_id)
);

CREATE TABLE "billing_history" (
	patient_id int,
	appointment_id int,
	amount decimal,
	date_paid timestamp,
	PRIMARY KEY (patient_id, appointment_id),
	FOREIGN KEY (patient_id) REFERENCES "clinic_user"(user_id),
	FOREIGN KEY (appointment_id) REFERENCES "appointment"(appointment_id)
);

CREATE TABLE "medication" (
	medication_id serial,
	name varchar(80) UNIQUE NOT NULL,
	inventory int,
	unit_price decimal,
	PRIMARY KEY (medication_id)
);

CREATE TABLE "prescription" (
	patient_id int,
	clinician_id int,
	medication_id int,
	date_prescribed timestamp,
	dosage int NOT NULL,
	filled_by int,
	PRIMARY KEY (patient_id, clinician_id, medication_id, date_prescribed),
	FOREIGN KEY (patient_id) REFERENCES "clinic_user"(user_id),
	FOREIGN KEY (clinician_id) REFERENCES "clinic_user"(user_id),
	FOREIGN KEY (medication_id) REFERENCES "medication"(medication_id),
	FOREIGN KEY (filled_by) REFERENCES "clinic_user"(user_id)
);