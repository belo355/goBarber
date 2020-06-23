import {MigrationInterface, QueryRunner} from "typeorm";

export default class DropTableUsers1592880449375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
      await queryRunner.dropTable('users')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
      await queryRunner.dropTable('users')
    }

}
