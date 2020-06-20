import {MigrationInterface, QueryRunner, Table, Generated} from "typeorm";
import { query } from "express";

export default class updateCreateAppointment1592622915645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('appointments')
    }

}
