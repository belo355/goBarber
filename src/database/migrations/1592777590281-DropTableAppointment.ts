import {MigrationInterface, QueryRunner} from "typeorm";

export default class DropTableAppointment1592777590281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
    }

}
